import {gql} from '@apollo/client'
 





 export const LOAD_PRODUCT = gql`
query{
    products{
    name,
    price,
    category,
    id,
    productImg,
    description
 
   
  }


} 
 
 `


 export const LOAD_Favoris = gql`
query{
    listFavoris{
    user,
    productName,
    ProductId,
    productImg
 
   
  }


} 
 
 `

export const LOAD_Favoris_byUserID = gql`
  query ($user: ID){
    listFavorisByUser(user: $user)
    
   {
    user,
    productName,
    ProductId,
    productImg
     
    }
  }
`





 export const LOAD_CATEGORIES = gql`
query{
    categories{
    name,
    reference,
    id
 
   
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