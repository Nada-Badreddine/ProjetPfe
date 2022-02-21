import {gql} from '@apollo/client'
 





 export const LOAD_PRODUCT = gql`
query{
    products{
    name,
    price,
    category,
    _id
 
   
  }


} 
 
 `
 export const LOAD_CATEGORIES = gql`
query{
    categories{
    name,
    reference,
    _id
 
   
  }


} 
 
 `

 export const LOAD_PRODUCT_byID = gql`
  query ($category: ID){
    getProduct(category: $category)
    
   {

     name,price
    }
  }
`





 ;