import React,{useState} from 'react'
import {useMutation,useQuery} from '@apollo/client'
import {CREATE_PRODUCT_MUTATION} from '../GraphQL/Mutations'
import {LOAD_CATEGORIES} from '../GraphQL/Queries'
const Add = () => {
const[name,setName]=useState('')
const[price,setPrice]=useState(0)
const[category,setCategSelected]=useState('')

const [createProduct,{ error }] =useMutation(CREATE_PRODUCT_MUTATION) 
const {loading,data} = useQuery(LOAD_CATEGORIES) 
const addProduct=()=>{


 createProduct(
        {
          
            variables:{
                input:{name,price: Number(price),category}
                
              
            }
            
        }
    )
 if(error){
        console.log(error)
    }

}



const handleChangeCateg=(e)=>{
    setCategSelected(e.target.value)
      
}
console.log('aaaaaaa',category)
  return (
    <div>
   
    <h2>Add your product</h2>
    
      <div className="form-group">
                        <label>Name : </label>
                        
                        <input type="text"
                         
                        onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Price : </label>
                        
                        <input type="text"
                         
                        onChange={(e) => setPrice(e.target.value)} className="form-control" />
                    </div>


                    <div className="form-group">
                    
                        <label>Choose Catgory : </label>
                    
                        <select value={category} onChange={handleChangeCateg}
                        >
            {data?.categories.map((item) => (
              
              <option
               value={item.id}>{item.name}
              </option>
            )
            
            )}
          </select>
          
                       


     </div>   
                       <div className="form-group">
                        <button className="btn btn-success btn-block" onClick={addProduct} > add </button>
                    </div>
    
    
    
    
    
    
    
    </div>
  )
}

export default Add