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
          {charactersList?.results?.map((xter) => (
            <Grid md={2.4} lg={2} item xs={3} key={xter?.id}>
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
    </div>
  );
}

export default CardDetails;
