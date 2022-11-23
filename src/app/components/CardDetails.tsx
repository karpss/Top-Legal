/* eslint-disable */
import React from 'react';
import { createSelector } from 'reselect';
import { useAppSelector } from '../hooks';
import { makeSelectCharactersList } from '../pages/Home/selectors';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const stateSelector = createSelector(makeSelectCharactersList, (charactersList) => ({charactersList}) )

const CardDetails = () => {
  const {charactersList} = useAppSelector(stateSelector)
  return (
    <>
    {!charactersList ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={3} >
        {charactersList?.results?.map((xter) =>(
            <Grid md={2.4} lg={2} item xs={3} key={xter?.id} >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={xter?.image || ""}
                alt={xter?.name || ""} 
                />

                <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {xter?.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
           Status: {xter?.status}
          </Typography>

          <Typography variant="body2" color="text.secondary">
           Gender: {xter?.gender}
          </Typography>

          <Typography variant="body2" color="text.secondary">
           Location: {xter?.location?.name}
          </Typography>





                </CardContent>






                </CardActionArea>
                
                
                
                
                
                
                
                </Card>  




            </Grid>
        ))}
        
    </Grid>
     )}

    </>
  )
  
}

export default CardDetails;