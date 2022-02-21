import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useQuery,useMutation} from '@apollo/client'
import {LOAD_PRODUCT} from '../GraphQL/Queries'
import {DELETE_PRODUCT_MUTATION} from '../GraphQL/Mutations'
import EditModal from './EditModal'

import { Modal } from 'antd';


const Product = (props) => {



 const navigate = useNavigate();


const {error,loading,data} = useQuery(LOAD_PRODUCT) 
const [deleteProduct] =useMutation(DELETE_PRODUCT_MUTATION)

const [currentProduct, setCurrentProduct] = useState([]);
const [openModal, setOpenModal] = useState(false);


const showModal = (item) => {
    setOpenModal(true);
    setCurrentProduct(item);

  };


console.log("test1",data?.products)


  return (
    <div>  
     
                      
    <h2> list Product</h2>
    
    <button style={{marginLeft:'600px'}}  onClick={()=> navigate('/add')}    >Add your product</button>
     <table style={{ width: 500 }}>
        
     <tbody>
         
         {data?.products?.map((item)=>{
             return <tr> <td> name: {item?.name}  </td>
          <td> price : {item.price}</td>
           <td>catego:{item?.category}</td>
          
          
          <td>
          
          <button onClick={
              ()=>
               deleteProduct(
        { variables: { _id: item._id  },
       
        refetchQueries: [
				{
					query: LOAD_PRODUCT,
				},
			],
        
        }
    )


          }>delete</button></td>
          <td>
          
          <button onClick={()=>showModal(item)}  >edit</button>
          
          </td>

         
       
         
                </tr>} )}

</tbody>    
</table>

 {
                               openModal && (
                                    <EditModal
                                    isModalVisible={openModal}
                                    setIsModalVisible={setOpenModal}
                                    nameProduct={currentProduct?.name}
                                    priceProduct={currentProduct?.price}
                                    ProductId={currentProduct?._id}
                                    
                                    
                                    />

                                
                                )
}
 
     
    </div>
  

  )
}

export default Product