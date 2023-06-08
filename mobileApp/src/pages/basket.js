import React, { Component} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import NumericInput from 'react-native-numeric-input'
import { ActivityIndicator, Alert, Text, View} from 'react-native';
import { Container, List, Restaurant, Logo, Name, Bio, button, ProfileButtonText, ProfileButton , User} from './styles';
import api from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Basket extends Component {

    state = {
        products: [],
        loading: false,
        itemAdded: [],
        quantity: '0'
      };
    
      async componentDidMount() {
        const { route } = this.props;
        const { itemAdded } = route.params;
        this.setState({itemAdded: itemAdded})
        const products = await AsyncStorage.getItem('products');
        
        if (products) {
          this.setState({ products: products });
        } else {
          this.setState({ products: itemAdded })
        }
      }
    
      async componentDidUpdate(_, prevState) {
        const { products } = this.state;
    
        if (prevState.products !== products) {
          await AsyncStorage.setItem('products', products);
        }
      }
    
      removeCard = async (id) => {
        const { cards } = this.state;
        cards.splice(id,1)
        this.setState({cards: cards})
      }
    
      handleAddProduct = async () => {
        const { products } = this.state;
        
        console.log('products', products)
        this.setState({ loading: true });
        
        try {
            this.setState({ loading: false });
            const data = {
                createdAt: this.state.itemAdded.createdAt,
                food_name: this.state.itemAdded.food_name,
                id: this.state.itemAdded.id,
                quantity: this.state.quantity,
                ingrediants: this.state.itemAdded.ingrediants,
                prepare_time: this.state.itemAdded.prepare_time,
                price: this.state.itemAdded.price,
                restaurant_id: this.state.itemAdded.restaurant_id,
                updatedAt: this.state.itemAdded.updatedAt,
            };
            console.log('data', data)
            products.push(data)
            
          this.setState({
            products: products,
            loading: false,
          });

      } catch (error) {
        this.setState({ loading: false });
      }

    }

    render() {

        const {products, itemAdded, loading, quantity} = this.state
                  
    return (
        <Container>
            <Restaurant>
                <Name>{itemAdded.food_name}</Name>
                <Bio>R$ {itemAdded.price}</Bio>
                <Bio>{itemAdded.prepare_time} minutos</Bio>
                <NumericInput 
                    //value={quantity} 
                    //onChange={value => this.setState({quantity:value})}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240} 
                    totalHeight={50} 
                    iconSize={25}
                    step={1}
                    valueType='real'
                    rounded 
                    textColor='#B0228C' 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='#EA3788' 
                    leftButtonBackgroundColor='#E56B70'
                />
                <ProfileButton onPress = {this.handleAddProduct}>
                    <ProfileButtonText>Adicionar</ProfileButtonText>
                </ProfileButton>
            </Restaurant>
            <Restaurant>    
                <Name>{products.food_name}</Name>
            {/* <List
                showVerticalScrollIndicator={false}
                data={products}
                keyExtractor={product => product.id}
                renderItem={( {item} ) => (
                  <User>

                    <View style={{flexDirection: "row"}}>
                    <Name>{item.food_name}</Name>
                    </View>
                
                
                  </User>
                )}/> */}
            </Restaurant>
        </Container>
    )
}
}