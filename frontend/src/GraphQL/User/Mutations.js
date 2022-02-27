import {gql} from "@apollo/client"

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