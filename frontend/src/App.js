import{ ApolloClient , InMemoryCache, ApolloProvider, HttpLink, from, }from "@apollo/client";
import React from 'react';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import {onError} from "@apollo/client/link/error"
import ListProductByCategory from './Pages/ListProductByCategory'
import ProductsList from './Pages/ProductsList'
import CategoriesList from './Pages/CategoriesList'
import Register from './Pages/Register'
import Login from './Pages/Login'
import FavorisList from './Pages/FavorisList'
import {UserProvider}  from './context/UserContext';
import 'antd/dist/antd.css';

const errorLink =onError(({ graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({
      message,location,path}) =>{
alert(`graphql error ${message}`);})}})

 const link= from([
  errorLink,
  new HttpLink({uri:"http://localhost:4001/graphql"}),
])

const client= new ApolloClient({
  cache: new InMemoryCache(),
  link:link,
}
)
function App() {

  const name =  localStorage.getItem("USERNAME") || '';
  const token = localStorage.getItem("TOKEN") || '';
  return (
    <ApolloProvider client={client}>
      <>
        <UserProvider tokenValue={token} userName={name}>
          <BrowserRouter>
            <Routes>
              <Route exact path='/ProductsList'  element={<ProductsList />}   />
              <Route exact path='/CategoriesList'  element={<CategoriesList />}   />
              <Route exact path='/ListProductByCategory/:catgId'  element={<ListProductByCategory />}   />
              <Route exact path='/FavorisList'  element={<FavorisList />}   />
              <Route exact path='/register'  element={<Register />}   />
              <Route exact path='/login'  element={<Login />}   />
            </Routes>
          </BrowserRouter>
        </UserProvider>
     </>
   </ApolloProvider>
  );
}

export default App;
