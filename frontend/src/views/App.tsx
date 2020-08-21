import React from "react";
import NavBar from "../components/navbar";
import {
  Grid,
  Card,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <NavBar />
      </div>

      <div>
        <Grid item={true} xs={12} sm={12}>
          <Card className={classes.card} elevation={2}>
            <CardContent>
              <Typography gutterBottom={true} variant="h5">
                <Link rel="noopener" to="spark/home/1">
                  ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "НЕФТЯНАЯ КОМПАНИЯ "РОСНЕФТЬ"
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );
}

export default App;
