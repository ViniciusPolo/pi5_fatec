"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "menus",
      [
        {
          id: 1,
          restaurant_id: 1,
          food_name: "Combinado Sushi Salmão",
          price: 69.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://panelaterapia.com/wp-content/uploads/2013/10/sushi-receita.jpg",
          type_of_product: "food",
          created_at: "2023-10-11T15:07:27.585Z",
          updated_at: "2023-10-11T15:07:27.585Z",
        },
        {
          id: 2,
          restaurant_id: 1,
          food_name: "Combinado Hot Roll",
          price: 69.9,
          prepare_time: 30,
          ingrediants: null,
          logo: "https://img.cybercook.com.br/receitas/985/hot-roll-de-salmao-2.jpeg",
          type_of_product: "food",
          created_at: "2023-10-11T15:08:51.882Z",
          updated_at: "2023-10-11T15:08:51.882Z",
        },
        {
          id: 3,
          restaurant_id: 1,
          food_name: "Teppanyaki",
          price: 49.9,
          prepare_time: 20,
          ingrediants: null,
          logo: "https://i0.wp.com/porkworld.com.br/wp-content/uploads/2021/08/receita-teppanyaki.png?resize=800%2C530&ssl=1",
          type_of_product: "food",
          created_at: "2023-10-11T15:10:16.100Z",
          updated_at: "2023-10-11T15:10:16.100Z",
        },
        {
          id: 4,
          restaurant_id: 1,
          food_name: "Guioza",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.receiteria.com.br/wp-content/uploads/guioza-de-legumes-e1683638473140.jpg",
          type_of_product: "food",
          created_at: "2023-10-11T15:12:22.075Z",
          updated_at: "2023-10-11T15:12:22.075Z",
        },
        {
          id: 5,
          restaurant_id: 1,
          food_name: "Saquê",
          price: 11.9,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://bebidasemcasa.com.br/wp-content/uploads/2019/04/01-saque-jun-dait.png",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-11T15:13:48.412Z",
          updated_at: "2023-10-11T15:13:48.412Z",
        },
        {
          id: 6,
          restaurant_id: 2,
          food_name: "Macarrão à carbonara",
          price: 24.9,
          prepare_time: 30,
          ingrediants: null,
          logo: "https://renata.com.br/images/receitas/5/renata-imagem-receitas-macarrao-ao-molho-carbonara-share.jpg",
          type_of_product: "food",
          created_at: "2023-10-11T15:17:10.371Z",
          updated_at: "2023-10-11T15:17:10.371Z",
        },
        {
          id: 7,
          restaurant_id: 2,
          food_name: "Lasanha à Bolonhesa",
          price: 44.9,
          prepare_time: 45,
          ingrediants: null,
          logo: "https://achougastronomia.com.br/receitas/wp-content/uploads/2022/01/Receita-de-lasanha-de-carne-500x450.jpg",
          type_of_product: "food",
          created_at: "2023-10-11T15:20:08.457Z",
          updated_at: "2023-10-11T15:20:08.457Z",
        },
        {
          id: 8,
          restaurant_id: 2,
          food_name: "Tiramisù",
          price: 9.9,
          prepare_time: 15,
          ingrediants: null,
          logo: "https://cloudfront-us-east-1.images.arcpublishing.com/estadao/Q3SE72ZUZRGKHOJHHW33TBLP4A.jpg",
          type_of_product: "desert",
          created_at: "2023-10-11T16:07:13.465Z",
          updated_at: "2023-10-11T16:07:13.465Z",
        },
        {
          id: 9,
          restaurant_id: 2,
          food_name: "Risoto de Camarão",
          price: 5.9,
          prepare_time: 55,
          ingrediants: null,
          logo: "https://www.saborosaviagem.com.br/wp-content/uploads/2018/02/risocamarao.jpg",
          type_of_product: "food",
          created_at: "2023-10-11T16:08:44.016Z",
          updated_at: "2023-10-13T03:37:15.283Z",
        },
        {
          id: 10,
          restaurant_id: 2,
          food_name: "Coca-cola",
          price: 6.9,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://images.tcdn.com.br/img/img_prod/1072704/coca_cola_lata_350ml_1119_1_d542984277f3139d36c8bd6e64c300a3.jpg",
          type_of_product: "drink",
          created_at: "2023-10-11T16:14:39.331Z",
          updated_at: "2023-10-17T16:22:12.130Z",
        },
        {
          id: 11,
          restaurant_id: 4,
          food_name: "File do meio ao alho",
          price: 39.9,
          prepare_time: 20,
          ingrediants: null,
          logo: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/02/15/bife-ao-alho.jpg",
          type_of_product: "food",
          created_at: "2023-10-13T15:15:45.357Z",
          updated_at: "2023-10-13T15:15:45.357Z",
        },
        {
          id: 12,
          restaurant_id: 3,
          food_name: "Frango Caipira com Quiabo",
          price: 119.9,
          prepare_time: 70,
          ingrediants: null,
          logo: "https://i.ytimg.com/vi/S7wkqUGeS2k/maxresdefault.jpg",
          type_of_product: "food",
          created_at: "2023-10-14T00:37:24.728Z",
          updated_at: "2023-10-14T00:37:24.728Z",
        },
        {
          id: 13,
          restaurant_id: 3,
          food_name: "Polenta de belorzonte",
          price: 39.9,
          prepare_time: 40,
          ingrediants: null,
          logo: "https://static.itdg.com.br/images/1200-630/cd0a110b22d8a636271ebd4f75207d4b/357406-original.jpg",
          type_of_product: "food",
          created_at: "2023-10-14T00:37:53.659Z",
          updated_at: "2023-10-14T00:37:53.659Z",
        },
        {
          id: 14,
          restaurant_id: 3,
          food_name: "Quejim com goiabada",
          price: 9.9,
          prepare_time: 10,
          ingrediants: null,
          logo: "https://www.agrolink.com.br/upload/imagens-resizes/31b563fecd674e29b02eb807ad862ea4_858x483.jpg",
          type_of_product: "desert",
          created_at: "2023-10-14T00:38:37.173Z",
          updated_at: "2023-10-14T00:38:37.173Z",
        },
        {
          id: 15,
          restaurant_id: 3,
          food_name: "Cerveja Heineken",
          price: 13.9,
          prepare_time: 10,
          ingrediants: null,
          logo: "https://superpao.vtexassets.com/arquivos/ids/347819/Cerveja-Puro-Malte-Heineken-Long-Neck-330Ml.jpg?v=638337718063000000",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-14T00:40:07.559Z",
          updated_at: "2023-10-14T00:40:07.559Z",
        },
        {
          id: 16,
          restaurant_id: 3,
          food_name: "Caipirinha cachaça",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://as1.ftcdn.net/v2/jpg/05/65/74/18/1000_F_565741883_kHWcwRYO0pGP1n8MSAqax6wY9z3IESQm.jpg",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-14T00:40:58.066Z",
          updated_at: "2023-10-14T00:40:58.066Z",
        },
        {
          id: 17,
          restaurant_id: 3,
          food_name: "Coca Cola lata",
          price: 9.9,
          prepare_time: 10,
          ingrediants: null,
          logo: "https://images.tcdn.com.br/img/img_prod/1072704/coca_cola_lata_350ml_1119_1_d542984277f3139d36c8bd6e64c300a3.jpg",
          type_of_product: "drink",
          created_at: "2023-10-14T00:41:37.502Z",
          updated_at: "2023-10-14T00:41:37.502Z",
        },
        {
          id: 18,
          restaurant_id: 3,
          food_name: "Porco na lata",
          price: 79.9,
          prepare_time: 40,
          ingrediants: null,
          type_of_product: "food",
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          created_at: "2023-10-14T00:42:21.276Z",
          updated_at: "2023-10-14T00:42:21.276Z",
        },
        {
          id: 19,
          restaurant_id: 4,
          food_name: "Bisteca di porco",
          price: 29.5,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-14T20:51:33.058Z",
          updated_at: "2023-10-14T20:51:33.058Z",
        },
        {
          id: 20,
          restaurant_id: 4,
          food_name: "Suco di laranja",
          price: 10,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://www.edilsonsalgados.com.br/midias/imagens/15586173311.png",
          type_of_product: "drink",
          created_at: "2023-10-14T20:59:40.372Z",
          updated_at: "2023-10-14T20:59:40.372Z",
        },
        {
          id: 21,
          restaurant_id: 4,
          food_name: "Coca cola lata",
          price: 6,
          prepare_time: 1,
          ingrediants: null,
          logo: "https://images.tcdn.com.br/img/img_prod/1072704/coca_cola_lata_350ml_1119_1_d542984277f3139d36c8bd6e64c300a3.jpg",
          type_of_product: "drink",
          created_at: "2023-10-14T21:00:46.171Z",
          updated_at: "2023-10-14T21:00:46.171Z",
        },
        {
          id: 22,
          restaurant_id: 6,
          food_name: "Esfirra aberta de Carne",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:22:00.317Z",
          updated_at: "2023-10-16T23:22:00.317Z",
        },
        {
          id: 23,
          restaurant_id: 6,
          food_name: "Esfirra aberta de Queijo",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:22:09.862Z",
          updated_at: "2023-10-16T23:22:09.862Z",
        },
        {
          id: 24,
          restaurant_id: 6,
          food_name: "Esfirra aberta de Calabresa",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:22:17.682Z",
          updated_at: "2023-10-16T23:22:17.682Z",
        },
        {
          id: 25,
          restaurant_id: 6,
          food_name: "Esfirra aberta de frango",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:22:46.963Z",
          updated_at: "2023-10-16T23:22:46.963Z",
        },
        {
          id: 26,
          restaurant_id: 6,
          food_name: "Esfirra aberta a moda",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:05.491Z",
          updated_at: "2023-10-16T23:23:05.491Z",
        },
        {
          id: 27,
          restaurant_id: 6,
          food_name: "Esfirra fechada a moda",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:11.597Z",
          updated_at: "2023-10-16T23:23:11.597Z",
        },
        {
          id: 28,
          restaurant_id: 6,
          food_name: "Esfirra fechada de carne",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:20.501Z",
          updated_at: "2023-10-16T23:23:20.501Z",
        },
        {
          id: 29,
          restaurant_id: 6,
          food_name: "Esfirra fechada de queijo",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:27.125Z",
          updated_at: "2023-10-16T23:23:27.125Z",
        },
        {
          id: 30,
          restaurant_id: 6,
          food_name: "Esfirra fechada de calabresa",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:32.538Z",
          updated_at: "2023-10-16T23:23:32.538Z",
        },
        {
          id: 31,
          restaurant_id: 6,
          food_name: "Quibe cru com menta",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-16T23:23:54.707Z",
          updated_at: "2023-10-16T23:23:54.707Z",
        },
        {
          id: 32,
          restaurant_id: 6,
          food_name: "esfirra aberta de chocolate",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-16T23:24:19.165Z",
          updated_at: "2023-10-16T23:24:19.165Z",
        },
        {
          id: 33,
          restaurant_id: 6,
          food_name: "esfirra aberta romeu e julietta",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-16T23:24:33.739Z",
          updated_at: "2023-10-16T23:24:33.739Z",
        },
        {
          id: 34,
          restaurant_id: 6,
          food_name: "esfirra fechada com doce de leite",
          price: 19.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-16T23:24:53.266Z",
          updated_at: "2023-10-16T23:24:53.266Z",
        },
        {
          id: 35,
          restaurant_id: 6,
          food_name: "Brahma lata",
          price: 7.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://tdc08h.vteximg.com.br/arquivos/ids/159721-1000-1000/1092797-cerveja-brahma-473ml-latao-g.jpg?v=637789693333130000",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-16T23:26:08.362Z",
          updated_at: "2023-10-16T23:26:08.362Z",
        },
        {
          id: 36,
          restaurant_id: 6,
          food_name: "Skol lata",
          price: 7.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://m.media-amazon.com/images/I/51G13N7cczL.jpg",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-16T23:26:15.549Z",
          updated_at: "2023-10-16T23:26:15.549Z",
        },
        {
          id: 37,
          restaurant_id: 6,
          food_name: "Antarctica lata",
          price: 7.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://choppbrahmaexpress.vtexassets.com/arquivos/ids/156478/Cerveja-Antarctica-Original-Lata-269ml.jpg?v=637550548312230000",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-16T23:26:27.877Z",
          updated_at: "2023-10-16T23:26:27.877Z",
        },
        {
          id: 38,
          restaurant_id: 6,
          food_name: "Heineken lata",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://static.paodeacucar.com/img/uploads/1/623/17634623.png",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-16T23:26:39.114Z",
          updated_at: "2023-10-16T23:26:39.114Z",
        },
        {
          id: 39,
          restaurant_id: 6,
          food_name: "Bavaria lata",
          price: 5.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://appmercados.com.br/uploads/fa05d3091202fc5ecbc5aec1fda6cc87.jpg",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-16T23:26:50.498Z",
          updated_at: "2023-10-16T23:26:50.498Z",
        },
        {
          id: 40,
          restaurant_id: 6,
          food_name: "Coca Cola lata",
          price: 5.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://images.tcdn.com.br/img/img_prod/1072704/coca_cola_lata_350ml_1119_1_d542984277f3139d36c8bd6e64c300a3.jpg",
          type_of_product: "drink",
          created_at: "2023-10-16T23:27:05.489Z",
          updated_at: "2023-10-16T23:27:05.489Z",
        },
        {
          id: 41,
          restaurant_id: 6,
          food_name: "Suco laranja",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.edilsonsalgados.com.br/midias/imagens/15586173311.png",
          type_of_product: "drink",
          created_at: "2023-10-16T23:27:42.186Z",
          updated_at: "2023-10-16T23:27:42.186Z",
        },
        {
          id: 42,
          restaurant_id: 7,
          food_name: "Sundaes",
          price: 9.9,
          prepare_time: 7,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-17T02:52:21.646Z",
          updated_at: "2023-10-17T02:52:21.646Z",
        },
        {
          id: 43,
          restaurant_id: 7,
          food_name: "Milk-shake",
          price: 9.9,
          prepare_time: 8,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-17T02:52:56.385Z",
          updated_at: "2023-10-17T02:52:56.385Z",
        },
        {
          id: 44,
          restaurant_id: 7,
          food_name: "Picolé",
          price: 4.9,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-17T02:53:54.648Z",
          updated_at: "2023-10-17T02:53:54.648Z",
        },
        {
          id: 45,
          restaurant_id: 7,
          food_name: "Suco",
          price: 8.9,
          prepare_time: 3,
          ingrediants: null,
          logo: "https://www.edilsonsalgados.com.br/midias/imagens/15586173311.png",
          type_of_product: "drink",
          created_at: "2023-10-17T02:54:48.317Z",
          updated_at: "2023-10-17T02:54:48.317Z",
        },
        {
          id: 46,
          restaurant_id: 8,
          food_name: "Pão",
          price: 0.9,
          prepare_time: 30,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-17T02:57:31.316Z",
          updated_at: "2023-10-17T02:57:31.316Z",
        },
        {
          id: 47,
          restaurant_id: 8,
          food_name: "Croissant",
          price: 9.9,
          prepare_time: 40,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-17T02:59:45.176Z",
          updated_at: "2023-10-17T02:59:45.176Z",
        },
        {
          id: 48,
          restaurant_id: 8,
          food_name: "Petit gateau",
          price: 19.9,
          prepare_time: 60,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-17T03:01:06.170Z",
          updated_at: "2023-10-17T03:01:06.170Z",
        },
        {
          id: 49,
          restaurant_id: 8,
          food_name: "Ratatouille",
          price: 30.5,
          prepare_time: 70,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-17T03:02:48.102Z",
          updated_at: "2023-10-17T03:02:48.102Z",
        },
        {
          id: 50,
          restaurant_id: 8,
          food_name: "Macaron",
          price: 8.5,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "desert",
          created_at: "2023-10-17T03:09:34.304Z",
          updated_at: "2023-10-17T03:09:34.304Z",
        },
        {
          id: 51,
          restaurant_id: 8,
          food_name: "Café au lait",
          price: 8.9,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/04/13/2081474064-beneficios-do-cafe.jpg",
          type_of_product: "drink",
          created_at: "2023-10-17T04:46:39.211Z",
          updated_at: "2023-10-17T04:46:39.211Z",
        },
        {
          id: 52,
          restaurant_id: 8,
          food_name: " expresso caramel",
          price: 9.9,
          prepare_time: 5,
          ingrediants: null,
          logo: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/04/13/2081474064-beneficios-do-cafe.jpg",
          type_of_product: "drink",
          created_at: "2023-10-17T04:48:23.272Z",
          updated_at: "2023-10-17T04:48:23.272Z",
        },
        {
          id: 53,
          restaurant_id: 7,
          food_name: " vitamina gelada",
          price: 19.9,
          prepare_time: 10,
          ingrediants: null,
          logo: "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-343-0cf42cab1d2cea49d52129e3da0fe0e5.jpg",
          type_of_product: "drink",
          created_at: "2023-10-17T04:49:08.866Z",
          updated_at: "2023-10-17T04:49:08.866Z",
        },
        {
          id: 54,
          restaurant_id: 9,
          food_name: "Suco limao",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://a-static.mlcdn.com.br/450x450/suco-de-limao-recanto-da-val/recantodaval/dfbe6c2e5ecf11ec91c44201ac18503a/fb3fe5cb288c3c475fa970777fbe8057.jpeg",
          type_of_product: "drink",
          created_at: "2023-10-18T22:47:36.014Z",
          updated_at: "2023-10-18T22:47:36.014Z",
        },
        {
          id: 55,
          restaurant_id: 9,
          food_name: "Suco laranja",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.edilsonsalgados.com.br/midias/imagens/15586173311.png",
          type_of_product: "drink",
          created_at: "2023-10-18T22:47:47.338Z",
          updated_at: "2023-10-18T22:47:47.338Z",
        },
        {
          id: 56,
          restaurant_id: 9,
          food_name: "Picanha",
          price: 89.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-18T22:48:28.843Z",
          updated_at: "2023-10-18T22:48:28.843Z",
        },
        {
          id: 57,
          restaurant_id: 9,
          food_name: "Contra-file",
          price: 79.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-18T22:48:41.803Z",
          updated_at: "2023-10-18T22:48:41.803Z",
        },
        {
          id: 58,
          restaurant_id: 9,
          food_name: "Tulipa",
          price: 39.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-18T22:48:54.542Z",
          updated_at: "2023-10-18T22:48:54.542Z",
        },
        {
          id: 59,
          restaurant_id: 9,
          food_name: "Panceta",
          price: 39.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.istockphoto.com/id/1240581148/pt/foto/brazilian-food-dish-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=COar8PiMigXo4g9hQqkU7NwxbvluMi2QiYChCFL93I4=",
          type_of_product: "food",
          created_at: "2023-10-18T22:49:04.762Z",
          updated_at: "2023-10-18T22:49:04.762Z",
        },
        {
          id: 60,
          restaurant_id: 9,
          food_name: "Linguiça Cuiabana",
          price: 49.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://static.wixstatic.com/media/f68aa7_332a78d658d94cd89bfad47b6ded9d0f~mv2.jpg/v1/fill/w_480,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f68aa7_332a78d658d94cd89bfad47b6ded9d0f~mv2.jpg",
          type_of_product: "food",
          created_at: "2023-10-18T22:49:34.083Z",
          updated_at: "2023-10-18T22:49:34.083Z",
        },
        {
          id: 61,
          restaurant_id: 9,
          food_name: "Pão de alho",
          price: 29.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://i.ytimg.com/vi/ka2Zwr1p0Ks/maxresdefault.jpg",
          type_of_product: "food",
          created_at: "2023-10-18T22:49:48.577Z",
          updated_at: "2023-10-18T22:49:48.577Z",
        },
        {
          id: 62,
          restaurant_id: 9,
          food_name: "Cerveja Amstel",
          price: 8.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://media.cotabest.com.br/media/sku/cerveja-lata-350ml-amstel-un.jpg",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-18T22:50:21.986Z",
          updated_at: "2023-10-18T22:50:21.986Z",
        },
        {
          id: 63,
          restaurant_id: 9,
          food_name: "Cerveja Colorado",
          price: 18.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://samsclub.vtexassets.com/arquivos/ids/156508/Cerveja-Lager-Ribeirao-Laranja-Colorado-600ml.jpg?v=637430324532800000",
          type_of_product: "alcoholicDrink",
          created_at: "2023-10-18T22:50:47.282Z",
          updated_at: "2023-10-18T22:50:47.282Z",
        },
        {
          id: 64,
          restaurant_id: 9,
          food_name: "Pepsi Cola",
          price: 7.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://images.tcdn.com.br/img/img_prod/1014792/refrigerante_pepsi_cola_1l_24911_1_d02d4254e9cfe4080a9f6c67831078bb.jpg",
          type_of_product: "drink",
          created_at: "2023-10-18T22:51:23.722Z",
          updated_at: "2023-10-18T22:51:23.722Z",
        },
        {
          id: 65,
          restaurant_id: 9,
          food_name: "Guaraná Antarctica",
          price: 7.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1935-refrigerante-guarana-antarctica-lata-350ml.jpg",
          type_of_product: "drink",
          created_at: "2023-10-18T22:51:38.679Z",
          updated_at: "2023-10-18T22:51:38.679Z",
        },
        {
          id: 66,
          restaurant_id: 10,
          food_name: "X-Salada",
          price: 15.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://assets.unileversolutions.com/recipes-v2/111189.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:44:58.595Z",
          updated_at: "2023-10-21T13:44:58.595Z",
        },
        {
          id: 67,
          restaurant_id: 10,
          food_name: "X-Egg Salada",
          price: 15.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://assets.unileversolutions.com/recipes-v2/111189.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:45:23.565Z",
          updated_at: "2023-10-21T13:45:23.565Z",
        },
        {
          id: 68,
          restaurant_id: 10,
          food_name: "X-Frango",
          price: 15.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://naminhapanela.com/wp-content/uploads/2022/05/Como-fazer-hamburguer-caseiro-2-735x490.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:45:53.178Z",
          updated_at: "2023-10-21T13:45:53.178Z",
        },
        {
          id: 69,
          restaurant_id: 10,
          food_name: "X-Frango Bacon",
          price: 15.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://assets.unileversolutions.com/recipes-v2/111189.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:46:18.880Z",
          updated_at: "2023-10-21T13:46:18.880Z",
        },
        {
          id: 70,
          restaurant_id: 10,
          food_name: "X-Bacon",
          price: 18.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp",
          type_of_product: "food",
          created_at: "2023-10-21T13:46:45.822Z",
          updated_at: "2023-10-21T13:46:45.822Z",
        },
        {
          id: 71,
          restaurant_id: 10,
          food_name: "Artesanal Angus",
          price: 25.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://espetinhodesucesso.com.br/wp-content/uploads/2023/06/Carne-assada-no-forno-que-desmancha.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:47:21.609Z",
          updated_at: "2023-10-21T13:47:21.609Z",
        },
        {
          id: 72,
          restaurant_id: 10,
          food_name: "Artesanal Blend Fraldinha",
          price: 23.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://cdn0.tudoreceitas.com/pt/posts/8/1/1/fraldinha_assada_no_forno_com_manteiga_9118_orig.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:48:05.523Z",
          updated_at: "2023-10-21T13:48:05.523Z",
        },
        {
          id: 73,
          restaurant_id: 10,
          food_name: "Artesanal do Buda",
          price: 28.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:48:42.157Z",
          updated_at: "2023-10-21T13:48:42.157Z",
        },
        {
          id: 74,
          restaurant_id: 10,
          food_name: "Simplão",
          price: 11.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:51:20.569Z",
          updated_at: "2023-10-21T13:51:20.569Z",
        },
        {
          id: 75,
          restaurant_id: 10,
          food_name: "Simplão de tudo",
          price: 9.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T13:51:47.758Z",
          updated_at: "2023-10-21T13:51:47.758Z",
        },
        {
          id: 76,
          restaurant_id: 11,
          food_name: "Porco Agridoce",
          price: 20.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T14:01:49.126Z",
          updated_at: "2023-10-21T14:01:49.126Z",
        },
        {
          id: 77,
          restaurant_id: 11,
          food_name: "Frango Gong Bao",
          price: 21.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_2480-Frango-assado-com-salsa-e-cebolinha-1.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T14:03:05.898Z",
          updated_at: "2023-10-21T14:03:05.898Z",
        },
        {
          id: 78,
          restaurant_id: 11,
          food_name: "Yakisoba",
          price: 31.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://assets.delirec.com/images%2FeQDBqxbatSc5JplzHuBym5RD3ME3%2Frecipe%2Fb599603b-3dd3-4197-8e8a-c946398c858f-Yakisoba-de-Frango-gallery-0",
          type_of_product: "food",
          created_at: "2023-10-21T14:04:06.092Z",
          updated_at: "2023-10-21T14:04:06.092Z",
        },
        {
          id: 79,
          restaurant_id: 11,
          food_name: "Arroz Primavera",
          price: 20.9,
          prepare_time: 25,
          ingrediants: null,
          logo: "https://www.camomilalimao.com/wp-content/uploads/2021/02/fotos_blog_ig_template-2-1024x858.jpg",
          type_of_product: "food",
          created_at: "2023-10-21T14:05:11.844Z",
          updated_at: "2023-10-21T14:05:11.844Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("menus", null, {});
  },
};