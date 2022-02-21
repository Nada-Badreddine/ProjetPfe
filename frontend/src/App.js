import{
ApolloClient ,
InMemoryCache,
ApolloProvider,
HttpLink,
from,
}from "@apollo/client";

import React from 'react';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import {onError} from "@apollo/client/link/error"

import ProductByCatego from './pages/ProductByCatego'

import Register from './pages/Register'
import Login from './pages/login'
import Category from './pages/category'
import Product from './pages/Product'
import Add from './pages/add'
import AddCatego from './pages/addCatego'
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
    <div>


<UserProvider tokenValue={token} userName={name}>

<BrowserRouter>
      <Routes>

         <Route exact path='/ProdbyCateg/:catgId'  element={<ProductByCatego />}   /> 
        
         <Route exact path='/register'  element={<Register />}   /> 
         <Route exact path='/login'  element={<Login />}   /> 
          <Route exact path='/category'  element={<Category />}   /> 
          <Route exact path='/product'  element={<Product />}   /> 
          <Route exact path='/add'  element={<Add />}   /> 
          <Route exact path='/addCategory'  element={<AddCatego />}   /> 
      
      

          
       
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </div>
    </ApolloProvider>
    
   
  );
}

export default App;
