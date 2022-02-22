import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useQuery,useMutation} from '@apollo/client'
import {LOAD_CATEGORIES} from '../GraphQL/Queries'
import {DELETE_CATEGORY_MUTATION} from '../GraphQL/Mutations'

const Category = () => {
  
const {error,loading,data} = useQuery(LOAD_CATEGORIES) 
const navigate = useNavigate();

const [currentCatgories, setCurrentCategories] = useState([]);
const [deleteCategory] =useMutation(DELETE_CATEGORY_MUTATION)
  return (
      <div>
    
    <h2>category</h2>

     <button style={{marginLeft:'600px'}}  onClick={()=> navigate('/addCategory')}    >Add category</button>
     <table style={{ width: 500 }}>
        
     <tbody>
         
         {data?.categories?.map((item)=>{
             return <tr> <td> name: {item?.name}  </td>
          <td> price : {item?.reference}</td>
          <button onClick={()=> navigate('/ProdbyCateg/'+ item._id)}> see products</button>
<button
onClick={
              ()=>
               deleteCategory(
        { variables: { _id: item._id  },
       
        refetchQueries: [
				{
					query: DELETE_CATEGORY_MUTATION,
				},
			],
        
        }
    )


          }

>delete Category</button>
          
        
          </tr>} )}

</tbody>
</table>
  </div>

  )
}

export default Category