import { gql } from '@apollo/client'

export const LOAD_FAVORIS = gql`
query{
    listFavoris{
    user
    ProductId {
      id
    }
   
  }


} 
 
 `

 export const LOAD_FAVORIS_BY_USER_ID = gql`
  query ($user: ID){
    listFavorisByUser(user: $user)
    
   {
    user
    ProductId {
      id
      price
      name
      productImg
    }
    }
  }
`
  ;