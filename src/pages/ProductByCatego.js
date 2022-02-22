import React,{useEffect,useState} from 'react'
import { useParams } from "react-router";
import {useQuery,useMutation} from '@apollo/client'
import {LOAD_PRODUCT_byID} from '../GraphQL/Queries'
const ProductByCatego = () => {
    
    const [product, setProduct] = useState([]);

 
    const params = useParams();
    const current = params.catgId;
    
const {error,loading, data } =  useQuery(LOAD_PRODUCT_byID, { variables: { category:current }});


console.log('aaaaaa',data)


  return (
     <div>  
     
                      
    <h3>Product</h3>
    
     <table style={{ width: 500 }}>
        
     <tbody>
         
         {data?.getProduct?.map((item)=>{
             return <tr> <td> name: {item?.name}  </td>
          <td> price : {item.price}</td>
         
          
          
         
          
         
       
         
                </tr>} )}

</tbody>    
</table>

 
 
     
    </div>
  
  )
}

export default ProductByCatego