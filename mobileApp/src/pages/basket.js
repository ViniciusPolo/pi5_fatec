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
    basketChanged: false, // Indicador de alteração do estado basket
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
      console.log("basketList---------------------------------------------->", basketList.restaurant[i])
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
    this.setState({loading: false})
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

    } catch (error) {
      this.setState({ loading: false });
    }

  }

  handleConfirmBasket = async () => {
        //Fazer um For percorrendo o basket mudando o status dos pedidos
        console.log("compra realizada")
    // const { products, user_id } = this.state;

    // console.log('products', products)
    // this.setState({ loading: true });

    // try {
    //   this.setState({ loading: false });
    //   const data = {
    //     restaurant_id: this.state.itemAdded.restaurant_id,
    //     food_id: this.state.itemAdded.id,
    //     user_id: user_id,
    //     total_delivery: 8.00,
    //     status_prepare: 1,
    //     status_delivered: 1,
    //     is_open: 1,
    //     quantity: this.state.quantity
    //   };

    //   const addItem = await api.addProductToBasket(data)
    //   const added = addItem;
    //   if (added) {
    //     setLoading(false)
    //     Alert.alert('Adicionado ao Carrinho');
    //     this.navigation.navigate("menu")
    //   } else {
    //     console.error("API ERROR", data.error);
    //     setLoading(false)
    //   }

    // } catch (error) {
    //   this.setState({ loading: false });
    // }

  }

  render() {
    const { products, itemAdded, loading, quantity, basket, totalValue, quantityTotalItens, user_id, basketChanged } = this.state

    return (
      <Container>
      {loading ? (<ActivityIndicator color='black' size={"large"} />) : (
      <>
      <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {() => {
                                this.props.navigation.navigate("menu",{itemAdded: itemAdded, user: user_id});
                            }}>
                    <ProfileButtonText style={{ color: '#000' }}>Adicionar mais Itens</ProfileButtonText>
                </ProfileButton>
                <Name style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }}>
                  {quantityTotalItens == 0 ? "Seu Carrinho está vazio": "Seu Carrinho contém:"}
                  </Name>
      <List
          showVerticalScrollIndicator={false}
          data={basket}
          keyExtractor={(basket) => String(basket.id)}
          renderItem = {({item}) => (
              <Restaurant style={{ borderBottomWidth: 0.6, borderColor: 'rgba(0, 0, 0, 0.3)', paddingBottom: 10 }} >
                  {/* <Logo source={{uri: item.logo}}/> */}
                  <Name>{item.food_name}</Name>
                  <Bio>R$ {item.total_value}</Bio>
              </Restaurant>
          )}
          />
          <Name>{quantityTotalItens}{quantityTotalItens > 1 ? " Itens, ": " Item, "}Valor Total: {totalValue}</Name>
          <ProfileButton style={{ backgroundColor: "#FFA500" }} onPress = {this.handleConfirmBasket}>
                    <ProfileButtonText style={{ color: '#000' }}>Finalizar Pedido</ProfileButtonText>
                </ProfileButton>
                <ProfileButton style={{ backgroundColor: "#FFA500" }}onPress = {() => {
                                this.props.navigation.navigate("addBasket",{itemAdded: itemAdded, user:user_id});
                            }}>
                    <ProfileButtonText style={{ color: '#000' }}>ALterar Carrinho</ProfileButtonText>
                </ProfileButton>
      </>)}    
  </Container>
    )
  }
}