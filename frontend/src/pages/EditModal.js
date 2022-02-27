import React,{useState} from 'react'
import {ModalHeader, ModalBody, ModalFooter,Button } from 'reactstrap';
import {useMutation} from '@apollo/client'
import { Row, Col } from 'reactstrap'
import { Modal } from 'antd';
import {UPDATE_PRODUCT_MUTATION} from '../GraphQL/Mutations'



const EditModal = (props) => {

  
    const[name,setName]=useState(props.nameProduct)
    const [price,setPrice]=useState(props.priceProduct)

    const [isSave, setIsSave] = useState(false);
    

    const [updateProduct,{ error }] =useMutation(UPDATE_PRODUCT_MUTATION)

    const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };
const onChangeName=(e)=>{
    setName(e.target.value)

}

const onChangePrice=(e)=>{
    setPrice(e.target.value)

}

const editBtn=()=>{

updateProduct(
        { variables: { 
            id: props.ProductId,
          
          input:{name:name,price:Number(price)} 
        },
       
        }
    )
    if(error){
        console.log(error)
    }
    setIsSave(true)

}

  return (
    <div>
    <Modal title="Edit an Offer" visible={props.isModalVisible} onOk={editBtn} onCancel={handleCancel}>
   
<ModalBody> 
       
          <Row>
                    <Col xs='12' >
                        <label style={{ color: '#808080' }}>Name</label>
                        <Row>
                            <Col>
                                <input type="text" value={name} onChange={onChangeName} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                 <Row>
                    <Col xs='12' >
                        <label style={{ color: '#808080' }}>Price</label>
                        <Row>
                            <Col>
                                <input type="text" value={price} onChange={onChangePrice} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
      </ModalBody>

 

    </Modal>
      

  
    </div>
  )
}

export default EditModal