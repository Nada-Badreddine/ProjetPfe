import React from 'react'
import { useParams } from "react-router";
import {useQuery} from '@apollo/client'
import {LOAD_PRODUCT_BY_ID} from '../GraphQL/Products/Queries'
const ListProductByCategory = () => {
    const params = useParams();
    const current = params.catgId;
    const {error,loading, data } =  useQuery(LOAD_PRODUCT_BY_ID, { variables: { category:current }});

  return (
     <div>  
        <h3>Product by category</h3>
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

export default ListProductByCategory