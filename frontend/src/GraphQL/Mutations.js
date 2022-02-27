import {gql} from "@apollo/client"






export const CREATE_PRODUCT_MUTATION = gql`
mutation createProduct ($input: ProductInput)
{
    createProduct (input:$input )
 {
   name
  
 }
  }
`

export const CREATE_FAVORITE_MUTATION = gql`
mutation createFavoriteList ($input: FavoriteInput)
{
    createFavoriteList (input:$input )
 {
  user
  
 }
  }
`


export const CREATE_CATEGORY_MUTATION = gql`
mutation createCategory ($input: CategoryInput)
{
    createCategory (input:$input )
 {
   name
  
 }
  }
`

export const DELETE_PRODUCT_MUTATION = gql`
	mutation deleteProduct($id: ID) {
		deleteProduct(id: $id) {
			name
		}
	}

`

export const DELETE_CATEGORY_MUTATION = gql`
	mutation deleteCategory($id: ID) {
		deleteCategory(id: $id) {
			name
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

export const UPDATE_PRODUCT_MUTATION = gql`
mutation updateProduct ($id: ID,$input: ProductInput)
{
    updateProduct(id: $id,input:$input )
 {
   name,price
 }
  }
` 



export const CREATE_USER_MUTATION = gql`
mutation createUser ($input: UserInput)
{
   createUser (input:$input )
 {
   user{
     name,
     role
   }
  
 }
  }
`


export const LOGIN_MUTATION = gql`

mutation loginUser ($input: UserInput)
{
   loginUser (input:$input )

   
 {
 token,

 user{
     id,
     name,
     role
     
    
   }

  
 }
  }
`







;
