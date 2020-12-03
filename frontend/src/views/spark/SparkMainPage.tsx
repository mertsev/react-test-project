import React from "react";
import NavBar from "../../components/navbar";
import {
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { PlaceholderDataSetterContainer, PlaceholderDataViewerContainer } from "../../components";

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

function SparkMainPage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <NavBar />
      </div>

      <div>
        <PlaceholderDataViewerContainer/>
        <PlaceholderDataSetterContainer/>
      </div>
    </div>
  );
}

export default SparkMainPage;
