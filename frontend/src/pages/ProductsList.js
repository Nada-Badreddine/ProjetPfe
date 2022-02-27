import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LOAD_PRODUCT } from '../GraphQL/Products/Queries'
import { LOAD_FAVORIS_BY_USER_ID } from '../GraphQL/Favoris/Queries'
import CardMedia from '@mui/material/CardMedia';
import { experimentalStyled as styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { CREATE_FAVORITE_MUTATION } from '../GraphQL/Favoris/Mutations'
import { red } from '@mui/material/colors';
import { DELETE_FAV_PRODUCT_MUTATION } from '../GraphQL/Favoris/Mutations'

const ProductsList = (props) => {

  const bull = (
    <Box
      component="span"
      sx={{
        display: 'inline-block', mx: '2px', transform: 'scale(0.8)', '& > :not(style)': {
          m: 2,
        },
      }}
    >
      •
    </Box>
  );

  const { loading, data } = useQuery(LOAD_PRODUCT)
  const [deleteFavProduct] = useMutation(DELETE_FAV_PRODUCT_MUTATION)
  const userConecte = localStorage.getItem("user-ID");
  const { loading: loadingFavoris, data: dataFavoris } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { user: userConecte } })
  const [createFavoriteList, { error }] = useMutation(CREATE_FAVORITE_MUTATION)

  const AddToFavoris = (item) => {
    createFavoriteList(
      {
        variables: {
          input: { ProductId: item.id,  user: userConecte },
          refetchQueries: [{query: LOAD_FAVORIS_BY_USER_ID, },],
        }
      }
    )
    if (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container xs="8" style={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Card sx={{ minWidth: 275 }}>
                {data?.products?.map((item) => {
                  const ExistingFavorite = dataFavoris?.listFavorisByUser?.find((elem) => {
                    return elem.ProductId.id === item?.id;
                  }
                  );
                  return (
                    <CardContent>
                      <CardMedia
                        component="img"
                        style={{ width: "120px", height: "120px" }}
                        image={item?.productImg}
                        alt="t-shirt" />
                      <Typography variant="body2">
                        {item?.name}
                        <br />
                        {item?.price}
                      </Typography>
                      <CardActions disableSpacing >
                        {ExistingFavorite ?
                          <IconButton aria-label="add to favorites"
                            onClick={
                              () =>
                                deleteFavProduct(
                                  {
                                    variables: { ProductId: item?.id },
                                    refetchQueries: [
                                      {
                                        query: LOAD_FAVORIS_BY_USER_ID,
                                      },
                                    ],
                                  }
                                )
                            }
                          >
                            <FavoriteIcon sx={{ color: red[500] }} />
                          </IconButton>
                          :
                          <IconButton aria-label="add to favorites" onClick={() => AddToFavoris(item)} >
                            <FavoriteIcon color="disabled" />
                          </IconButton>
                        }
                      </CardActions>
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

export default ProductsList