import React from "react";
import NavBar from "../../components/navbar";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

function Draft() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
    </div>
  );
}

export default Draft;