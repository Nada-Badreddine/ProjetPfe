import axios from'axios';
import { ApolloServer, gql } from'apollo-server';

const typeDefs = gql`

type userObject {
 id: ID
 name: String
 email: String
 password: String
 role: String 
}

type User {
 id: ID 
 user: userObject
 token: String
}

type userlog {
  id: ID
  name: String
  email: String
  role: String
}

type UserLogin{
  token: String
  user: userlog
}

input UserInput {
  name: String
  password: String
  email: String 
  role: String
 }

 input ProductInput {
  name: String
  price: Int
  category: ID 
  productImg: String
  description: String
 }

 input FavoriteInput {
    user: ID
    ProductId: ID
 }

 type Favorite {
 id: ID 
 user: ID
 ProductId: Product
 }

type Product {
 id: ID 
 name: String
 price: Int
 productImg: String
 description: String
 category: ID
}

type Category {
 id: ID 
 name: String
 reference: Int
}

 input CategoryInput {
  name: String
  reference: Int
 }

type Query {
    products: [Product]
    listFavoris: [Favorite]
    listFavorisByUser(user: ID): [Favorite]
    categories: [Category]
    getProduct(category: ID): [Product]
  }

  type Mutation {
    createProduct(input: ProductInput) : Product
    createFavoriteList(input: FavoriteInput) : Favorite
    createCategory(input: CategoryInput) : Category
    updateProduct(id: ID, input: ProductInput): Product
    deleteProduct(id: ID) : Product
    deleteFavProduct(ProductId: ID) : Favorite
    deleteCategory(id: ID) : Category
    createUser(input: UserInput) : User
    loginUser(input: UserInput) : UserLogin
  }
`;

const resolvers = {
  Query: {

    async products() {
      const a = await axios.get("http://localhost:4005/products");

      return a.data.result;
    },

    async listFavoris() {
      const a = await axios.get("http://localhost:4005/favoriteList");
      return a.data.result;
    },

    async categories() {
      const categ = await axios.get("http://localhost:4005/categories");


      return categ.data.result;
    },

    getProduct: async (_, { category }) => {
      const res = await axios.get("http://localhost:4005/products/" + category);
      return res.data.result;
    },

    listFavorisByUser: async (_, { user }) => {
      const res = await axios.get("http://localhost:4005/listFavoris/" + user);
      return res.data.result;
    },
  },

  Mutation: {
    deleteProduct: async (_, { id }) => {
      const res = await axios.delete("http://localhost:4005/products/" + id);
      return res.data;
    },

    deleteFavProduct: async (_, { ProductId }) => {
      const res = await axios.delete("http://localhost:4005/Favproduct/" + ProductId);
      return res.data;
    },
    deleteCategory: async (_, { id }) => {
      const res = await axios.delete("http://localhost:4005/categories/" + id);
      return res.data;
    },


    createProduct: async (_, { input }) => {
      const res = await axios.post("http://localhost:4005/products/", input);


      return res.data.result;
    },

    createFavoriteList: async (_, { input }) => {
      console.log("icii")
      const res = await axios.post("http://localhost:4005/favorite", input);


      return res.data.result;
    },
    createCategory: async (_, { input }) => {
      const res = await axios.post("http://localhost:4005/categories/", input);

      return res.data;
    },

    createUser: async (_, { input }) => {
      const resUser = await axios.post("http://localhost:4005/register", input);

      return resUser.data;
    },

    loginUser: async (_, { input }) => {
      const logUser = await axios.post("http://localhost:4005/auth", input);

      return logUser.data;
    },

    updateProduct: async (_, { input, id }) => {
      const res = await axios.put("http://localhost:4005/products/" + id, input);
      console.log("aaaaa", res)
      return res.data.result;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4001).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});




