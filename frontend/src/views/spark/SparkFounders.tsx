import React from "react";
// import logo from './logo.svg';
import NavBar from "../../components/navbar";
import { Button, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import CenteredTabs from "../../components/tabs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      padding: theme.spacing(1),
      textAlign: "left",
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  })
);

function SparkFounders() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <NavBar />
        <CenteredTabs />
      </div>

      <div className={classes.root}>
        <Grid
          container={true}
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item={true} xs={12} sm={12}>
            <Card className={classes.card} elevation={2}>
              <CardContent>
                <Typography gutterBottom={true} variant="h5">
                  ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "НЕФТЯНАЯ КОМПАНИЯ "РОСНЕФТЬ"
                </Typography>
                <Typography variant="overline">
                  Действующая организация
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SparkFounders;
