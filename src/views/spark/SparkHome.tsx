import React from 'react';
//import logo from './logo.svg';
import NavBar from '../../components/navbar';
import { Button, styled, Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './SparkHome.css';

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
          <div className="companyName"><h3>ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "НЕФТЯНАЯ КОМПАНИЯ "РОСНЕФТЬ"</h3></div>
          <div className="companyStatus" color="lightGreen"><p>Действующая организация</p></div>
          <dl className="companyCol">
            <dt className="company-info__title">ОГРН</dt>
            <dd className="company-info__text">
              <span id="clip_ogrn">1027700043502</span>
            </dd>
            <dd className="company-info__text">
              <span id="clip_ogrn"> от 19 июля 2002 г.</span>
            </dd>
          </dl>
          <dl className="companyCol">
            <dt className="company-info__title">ИНН/КПП</dt>
            <dd className="company-info__text">
              <span id="clip_inn">7706107510</span>
            </dd>
            <dd className="company-info__text">
              <span id="clip_kpp">770601001</span>
            </dd>
          </dl>
          <dl className="companyCol">
            <dt className="company-info__title">Дата регистрации</dt>
            <dd className="company-info__text">
              <span id="foundingDate">07.06.1993</span>
            </dd>
            <dt className="company-info__title">Уставный капитал</dt>
            <dd className="company-info__text">
              <span id="foundingDate">105 981 778,17 руб.</span>
            </dd>
          </dl>
          <dt className="company-info__title">Юридический адрес</dt>
          <dd className="company-info__text">
              <span itemProp="address">
                
              </span>
            </dd>
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
