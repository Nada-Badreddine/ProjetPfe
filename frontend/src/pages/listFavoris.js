import React,{useState} from 'react'
import {useQuery} from '@apollo/client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import {LOAD_Favoris_byUserID} from '../GraphQL/Queries'
import CardMedia from '@mui/material/CardMedia';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





const ListFavoris = (props) => {

 const userConecte = localStorage.getItem("user-ID");

 const {error,loading,data} = useQuery(LOAD_Favoris_byUserID, { variables: { user:userConecte }}) 


    
  return (
    <>
  

     <Container xs="8" style={{display:"flex"}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
    <Card sx={{ minWidth: 275 }}>
    {data?.listFavorisByUser?.map((item)=>{

     
      
        return(
      <CardContent>

     
       <CardMedia
        component="img"

        style={{width:"120px", height:"120px" }}
        image={item?.ProductId.productImg}
        alt="t-shirt"/>
        <Typography variant="body2">
          {item?.ProductId.name}
         
        </Typography>
        <Typography variant="body2">
          {item?.ProductId.price}
         
        </Typography>
     
      </CardContent>
      
   

        )
    })}
    </Card>
    </Grid>
    </Grid>
    </Box>
 
    </Container>
   
    
    </>
  )
}

export default ListFavoris