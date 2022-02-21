import React,{useState} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_CATEGORY_MUTATION} from '../GraphQL/Mutations'




const AddCatego = () => {


    
const[name,setName]=useState('')
const[reference,setReference]=useState(0)


const [createCategory,{ error }] =useMutation(CREATE_CATEGORY_MUTATION) 


const addCategory=()=>{


 createCategory(
        {
          
            variables:{
                input:{name,reference: Number(reference)}
                
              
            }
            
        }
    )
 if(error){
        console.log(error)
    }

}

  return (
    <div>
   
    <h2>Add your category</h2>
    
      <div className="form-group">
                        <label>Name : </label>
                        
                        <input type="text"
                         
                        onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Reference : </label>
                        
                        <input type="text"
                         
                        onChange={(e) => setReference(e.target.value)} className="form-control" />
                    </div>


                   
                       <div className="form-group">
                        <button className="btn btn-success btn-block" onClick={addCategory} > add </button>
                    </div>
    
    
    
    
    
    
    
    </div>
  )
}

export default AddCatego