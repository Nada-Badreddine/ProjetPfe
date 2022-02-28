import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
import {useMutation} from '@apollo/client'
import {LOGIN_MUTATION} from '../GraphQL/User/Mutations'
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { User_ID } from '../constants';

const Login = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')


const navigate = useNavigate();
const authContext=useContext(UserContext)
const [loginUser,{ error }] =useMutation(LOGIN_MUTATION)

    const loginBtn=()=>{
      
       loginUser(
        {
          
            variables:{
                input:{email,password}
               
              
            },
          
          onCompleted: ({ loginUser }) => {
    localStorage.setItem(AUTH_TOKEN, loginUser.token);
    localStorage.setItem(User_ID, loginUser.user.id);


     if (loginUser.user.role === 'client') {
      navigate('/crudproduct');;
    } else {
      navigate('/category');;
    }
    
  }
            
            
        }
        
    )
   
    
       
    }
 

   const {user} =useContext(UserContext)
    
  return (
    <div>
    <h2>Login to your account</h2>
    <h1>hello ,{user.name}</h1>
    
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="email"
                       onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>password : </label>
                        <input type="password"
                        onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                     <div className="form-group">
                        <button className="btn btn-success btn-block" onClick={loginBtn}> Login </button>
                    </div>
    </div>
  )
}

export default Login