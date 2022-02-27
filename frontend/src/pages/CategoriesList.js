import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useQuery} from '@apollo/client'
import {LOAD_CATEGORIES} from '../GraphQL/Categories/Queries'

const CategoriesList = () => {

const {error,loading,data} = useQuery(LOAD_CATEGORIES)
const navigate = useNavigate();

  return (
      <div>
        <h2>category</h2>
        <table style={{ width: 500 }}>
          <tbody>
            {data?.categories?.map((item)=>{
             return <tr> <td> name: {item?.name}  </td>
              <td> price : {item?.reference}</td>
          <button onClick={()=> navigate('/ProdbyCateg/' + item.id)}> see products</button>
          </tr>} )}
          </tbody>
        </table>
      </div>

  )
}

export default CategoriesList