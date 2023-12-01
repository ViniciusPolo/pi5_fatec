"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          id: 1,
          user_owner: 46,
          restaurant_name: "Miyazaki's Sushi",
          bio: "Culinária oriental",
          logo: "https://i.ytimg.com/vi/3pDs6A3KTHU/maxresdefault.jpg",
          cousine_type: "JAPONESA",
          created_at: "2023-10-11T15:02:50.917Z",
          updated_at: "2023-10-11T15:02:50.917Z",
        },
        {
          id: 2,
          user_owner: 46,
          restaurant_name: "Bistrô do Jão",
          bio: "Culinária italiana",
          logo: "https://m.media-amazon.com/images/I/61WVpPH6PaL.jpg",
          cousine_type: "ITALIANA",
          created_at: "2023-10-11T15:04:28.453Z",
          updated_at: "2023-10-11T15:04:28.453Z",
        },
        {
          id: 3,
          user_owner: 46,
          restaurant_name: "Na Lenha",
          bio: "Comida caipira feita de verdade no fogão a lenha",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEoqBszyAt97M3aTE_DF4GFH40yXO8GcIiH-MOysZQv18X8ZuBHMl4HRd5CcyUqGGFeo&usqp=CAU",
          cousine_type: "MINEIRA",
          created_at: "2023-10-13T03:42:14.206Z",
          updated_at: "2023-10-13T03:42:14.206Z",
        },
        {
          id: 4,
          user_owner: 46,
          restaurant_name: "Vaca a mineira",
          bio: "Mio Carne de Minas",
          logo: "https://img.restaurantguru.com/r2b7-Delicias-Mineira-logo.jpg",
          cousine_type: "CHURRASCO",
          created_at: "2023-10-13T15:12:31.303Z",
          updated_at: "2023-10-13T15:12:31.303Z",
        },
        {
          id: 5,
          user_owner: 46,
          restaurant_name: "Cozina Malaquasta",
          bio: "O legitimo sabor italiano",
          logo: "https://m.media-amazon.com/images/I/51a1Tx91WEL._AC_UF1000,1000_QL80_.jpg",
          cousine_type: "ITALIANA",
          created_at: "2023-10-14T21:14:05.628Z",
          updated_at: "2023-10-14T21:14:05.628Z",
        },
        {
          id: 6,
          user_owner: 46,
          restaurant_name: "Catarfood",
          bio: "Comida Arabe no Brasil",
          logo: "https://facildelembrar.com/wp-content/uploads/2023/07/culinaria-arabe.png",
          cousine_type: "ARABE",
          created_at: "2023-10-16T23:20:52.277Z",
          updated_at: "2023-10-16T23:20:52.277Z",
        },
        {
          id: 7,
          user_owner: 46,
          restaurant_name: "Gela-Boca",
          bio: "refresco para dias quentes",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHE-v9Uy8AA9W-mW2Bqs3ZGph1rs6niPcaA&usqp=CAU",
          cousine_type: "SOBREMESA",
          created_at: "2023-10-17T02:29:57.306Z",
          updated_at: "2023-10-17T02:29:57.306Z",
        },
        {
          id: 8,
          user_owner: 46,
          restaurant_name: "Pain de Bittencourt",
          bio: "Pão francês e variados",
          logo: "https://thumbs.dreamstime.com/z/culin%C3%A1ria-francesa-card%C3%A1pio-nacional-da-fran%C3%A7a-comida-para-cartoon-de-restaurante-ilustra%C3%A7%C3%A3o-vetorial-pratos-franceses-com-175455552.jpg",
          cousine_type: "FRANCESA",
          created_at: "2023-10-17T02:35:12.188Z",
          updated_at: "2023-10-17T02:35:12.188Z",
        },
        {
          id: 9,
          user_owner: 46,
          restaurant_name: "Brasa Brasil",
          bio: "O melhor churrasco do Brasil",
          logo: "https://blog.yooga.com.br/content/images/2023/02/Faturamento-churrascaria---Yooga-Blog.jpg",
          cousine_type: "CHURRASCO",
          created_at: "2023-10-18T22:27:44.587Z",
          updated_at: "2023-10-18T22:29:21.404Z",
        },
        {
          id: 10,
          user_owner: 46,
          restaurant_name: "Buda's Lanches",
          bio: "Lanches Saborosos do Buda",
          logo: "https://static.vecteezy.com/system/resources/previews/019/607/567/original/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png",
          cousine_type: "FASTFOOD",
          created_at: "2023-10-21T13:44:03.263Z",
          updated_at: "2023-10-21T13:44:03.263Z",
        },
        {
          id: 11,
          user_owner: 46,
          restaurant_name: "Xing Ling",
          bio: "Menu original da China",
          logo: "https://www.prisfood.com.br/wp-content/uploads/2022/08/15143961380_1.jpg",
          cousine_type: "CHINESA",
          created_at: "2023-10-21T14:00:13.040Z",
          updated_at: "2023-10-21T14:00:13.040Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};