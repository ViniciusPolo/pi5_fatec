import React, { Component } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Picker from '@ouroboros/react-native-picker';
import NumericInput from 'react-native-numeric-input'
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { Container, Restaurant, List, Name, Bio, button, ProfileButtonText, ProfileButton, User } from './styles';
import api from '../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Basket extends Component {

  state = {
    products: [],
    basket: [],
    loading: false,
    itemAdded: [],
    user_id: 0,
    quantity: 0,
    totalValue: 0.00,
    quantityTotalItens: 0,
    itemDescription:{}
  };

  searchForRequests = async (user_id, is_open) => {
    const basketList = await api.listBasket(user_id, is_open)
    let totalValue = 0
    let quantityTotalItens = 0
    for(let i=0; i < basketList.restaurant.length; i++){
      let food_description = await api.foodById(basketList.restaurant[i].food_id)
      totalValue += basketList.restaurant[i].total_value
      quantityTotalItens += basketList.restaurant[i].quantity
      basketList.restaurant[i].food_name = food_description.menu.food_name
      basketList.restaurant[i].valueproduct = food_description.menu.total_value
      //console.log("basketList---------------------------------------------->", basketList.restaurant[i])
    }
    this.setState({totalValue: totalValue, quantityTotalItens: quantityTotalItens})
    return basketList
  }

  async componentDidMount() {
    const { route } = this.props;
    const { itemAdded, user } = route.params;
    this.setState({ itemAdded: itemAdded, user_id: user, loading: true })
    const basket = await this.searchForRequests(user, 1)

    if (basket) {
      console.log("teste", basket.restaurant)
      this.setState({ basket: basket.restaurant });
    }
    this.setState({loading: false})
  }

  async componentDidUpdate(_, prevState) {
    const { products, user_id } = this.state;
    this.searchForRequests(user_id, 1)

    if (prevState.products !== products) {
      await AsyncStorage.setItem('products', products);
    }
  }

  removeCard = async (id) => {
    const { cards } = this.state;
    cards.splice(id, 1)
    this.setState({ cards: cards })
  }

  handleAddProduct = async () => {
    const { products, user_id } = this.state;

    console.log('products', products)
    this.setState({ loading: true });

    try {
      this.setState({ loading: false });
      const data = {
        restaurant_id: this.state.itemAdded.restaurant_id,
        food_id: this.state.itemAdded.id,
        user_id: user_id,
        total_delivery: 8.00,
        status_prepare: 1,
        status_delivered: 1,
        is_open: 1,
        quantity: this.state.quantity
      };

      const addItem = await api.addProductToBasket(data)
      const added = addItem;
      this.searchForRequests(6, 1)
      if (added) {
        setLoading(false)
        Alert.alert('Adicionado ao Carrinho');
        this.navigation.navigate("menu")
      } else {
        console.error("API ERROR", data.error);
        setLoading(false)
      }

    } catch (error) {
      this.setState({ loading: false });
    }

  }

  render() {
    const { products, itemAdded, loading, quantity, basket, totalValue, quantityTotalItens } = this.state

    return (
      <Container>
      {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
      <>
      <Restaurant style={{borderWidth: 0.6, paddingBottom: 10, backgroundColor: "#FFA500" }}>
                <Name>{itemAdded.food_name}</Name>
                <Bio style={{ color: '#000' }}>R$ {itemAdded.price}</Bio>
                <Bio style={{ color: '#000' }}>{itemAdded.prepare_time} minutos</Bio>
                <NumericInput 
                    value={quantity} 
                    onChange={(value) => this.setState({ quantity: value })}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240} 
                    totalHeight={50} 
                    iconSize={50}
                    step={1}
                    valueType='real'
                    rounded 
                    textColor='#000' 
                    iconStyle={{ color: '#FFA500' }} 
                    rightButtonBackgroundColor='#000' 
                    leftButtonBackgroundColor='#000'
                />
                <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {this.handleAddProduct}>
                    <ProfileButtonText style={{ color: '#000' }}>Adicionar</ProfileButtonText>
                </ProfileButton>
            </Restaurant>
      <List
          showVerticalScrollIndicator={false}
          data={basket}
          keyExtractor={(basket) => String(basket.id)}
          renderItem = {({item}) => (
              <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }} >
                  {/* <Logo source={{uri: item.logo}}/> */}
                  <Name>{item.food_name}</Name>
                  <Bio>R$ {item.total_value}</Bio>

                  <ProfileButton style={{ backgroundColor: "#000" }} onPress = {() => this.props.navigation.navigate('basket',{itemAdded: item} )}>
                      <ProfileButtonText style={{ color: '#FFA500' }}>Tirar do Carrinho</ProfileButtonText>
                  </ProfileButton>
              </Restaurant>
          )}
          />
          <Name>{quantityTotalItens}{quantityTotalItens > 1 ? " Itens, ": " Item, "}Valor Total: {totalValue}</Name>
          <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {this.handleAddProduct}>
                    <ProfileButtonText style={{ color: '#000' }}>Finalizar Pedido</ProfileButtonText>
                </ProfileButton>
                <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {this.handleAddProduct}>
                    <ProfileButtonText style={{ color: '#000' }}>Esvaziar Carrinho</ProfileButtonText>
                </ProfileButton>
      </>)}    
  </Container>
    )
  }
}