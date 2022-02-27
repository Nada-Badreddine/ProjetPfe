import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Admin, Resource } from 'react-admin';
import CategoryList from './categories/components/CategoryList';
import AddCategory from './categories/components/AddCategory';
import EditCategory from './categories/components/EditCategoy';
import AddProduct from './products/components/AddProduct';
import EditProduct from './products/components/EditProduct';
import ProductList from './products/components/ProductList';
import Dashboard from './dashbord/dashbord';
import authProvider from './provider/authProvider'
import dataProvider from './dataProvider';

ReactDOM.render(
  <React.StrictMode>
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="categories" list={CategoryList} edit={EditCategory} create={AddCategory} />
      <Resource name="products" list={ProductList} edit={EditProduct} create={AddProduct} />
    </Admin>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
