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
	mutation deleteProduct($_id: ID) {
		deleteProduct(_id: $_id) {
			name
		}
	}

`

export const DELETE_CATEGORY_MUTATION = gql`
	mutation deleteCategory($_id: ID) {
		deleteCategory(_id: $_id) {
			name
		}
	}

`

export const UPDATE_PRODUCT_MUTATION = gql`
mutation updateProduct ($_id: ID,$input: ProductInput)
{
    updateProduct(_id: $_id,input:$input )
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
     name,
     role
   }

  
 }
  }
`







;
