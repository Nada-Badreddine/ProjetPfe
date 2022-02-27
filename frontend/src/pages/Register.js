import React,{useState} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
const Register = () => {

    const[name,setName]=useState('')

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[selectedRole,setSelectedRole]=useState('')


    const [createUser,{ error }] =useMutation(CREATE_USER_MUTATION)

const handleChangeRole=(e)=>{
    setSelectedRole(e.target.value)

}

    const addUser=()=>{
 createUser(
        {
          
            variables:{
                input:{name,password,email,role:selectedRole}
                
              
            }
            
        }
    )
 if(error){
        console.log(error)
    }
    }
  return (
    <div>
    <h2>Register Now</h2>
    
     <div className="form-group">
                        <label>Name : </label>
                        <input type="text"
                        onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="email"
                       onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password"
                       onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>

                     <div className="form-group">
                    
                        <label>what is your role ? </label>
                    
                        <select value={selectedRole} 
                        onChange={handleChangeRole} >
                         <option value="client">client  </option>
                         <option value="Admin">Admin  </option>
            ) </select>


     </div>   
                    <div className="form-group">
                        <button className="btn btn-success btn-block" onClick={addUser}> add User </button>
                    </div>
    
    </div>
  )
}

export default Register