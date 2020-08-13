import React from 'react';
//import logo from './logo.svg';
import NavBar from '../../components/navbar';
import { Button, styled, Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const MyButton = styled(Button)({
    margin: 5
});

function SparkHome() {
  const classes = useStyles();
  return (
    <div>
    <div className="App">
        <NavBar/>
        <MyButton variant="contained" color="primary">Домой</MyButton>
        <MyButton variant="contained" color="primary">Учредители</MyButton>
        <MyButton variant="contained" color="primary">Связи</MyButton>
        <MyButton variant="contained" color="primary">Надежность</MyButton>
        <MyButton variant="contained" color="primary">Финансы</MyButton>
        <MyButton variant="contained" color="primary">Госзакупки</MyButton>
        <MyButton variant="contained" color="primary">Суды</MyButton>
        <MyButton variant="contained" color="primary">Долги</MyButton>
        <MyButton variant="contained" color="primary">Проверки</MyButton>
    </div>

    <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <div className="companyName">ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "НЕФТЯНАЯ КОМПАНИЯ "РОСНЕФТЬ"</div>
          <div className="companyStatus" color="lightGreen">Действующая организация</div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
    </Grid>
    </div>
    </div>
  );
}

export default SparkHome;
