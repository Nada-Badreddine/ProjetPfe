import { gql } from '@apollo/client'

export const LOAD_PRODUCT = gql`
    query{
        products{
            name,
            price,
            id,
            productImg,
            description
        }
    }
 `
export const LOAD_PRODUCT_BY_ID = gql`
    query ($category: ID){
        getProduct(category: $category){
            name,price
        }
    }
`
;