import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Grid,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "20px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h2"
              align="center"
              color="textSecondary"
              gutterBottom
              paragraph
            >
              Desc
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="secondary">
                    Albom
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
