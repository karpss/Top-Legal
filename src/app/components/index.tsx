import React from "react";
import { createSelector } from "reselect";
import {
  Box,
  Grid,
  CardActionArea,
  LinearProgress,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import makeSelectCharactersList from "../pages/Home/selectors";
import { useAppSelector } from "../hooks";

const stateSelector = createSelector(
  makeSelectCharactersList,
  (charactersList) => ({ charactersList }),
);

function CardDetails() {
  const { charactersList } = useAppSelector(stateSelector);
  return (
    <div>
      {!charactersList ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {charactersList?.results?.map((char) => (
            <Grid md={2.4} lg={2} item xs={3} key={char?.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={char?.image || ""}
                    alt={char?.name || ""}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {char?.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Status: {char?.status}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Gender: {char?.gender}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Location: {char?.location?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default CardDetails;
