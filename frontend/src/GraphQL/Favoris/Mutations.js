import {gql} from "@apollo/client"

export const CREATE_FAVORITE_MUTATION = gql`
mutation createFavoriteList ($input: FavoriteInput)
{
    createFavoriteList (input:$input )
 {
  user
 }
  }
`


export const DELETE_FAV_PRODUCT_MUTATION = gql`
	mutation deleteFavProduct($ProductId: ID) {
		deleteFavProduct(ProductId: $ProductId) {
			user
		}
	}

`

;
