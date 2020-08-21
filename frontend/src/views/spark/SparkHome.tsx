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

function SparkHome() {
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
                <Grid
                  container={true}
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item={true} xs={12} sm={4}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">ОГРН</Typography>
                        <Typography variant="body1" color="textSecondary">
                          1027700043502
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          от 19 июля 2002 г.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={4}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">ИНН/КПП</Typography>
                        <Typography variant="body1" color="textSecondary">
                          7706107510
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          770601001
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={4}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Юридический адрес
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          <span itemProp="postalCode">115035, </span>
                          <span itemProp="addressRegion">город Москва, </span>
                          <span itemProp="streetAddress">
                            Софийская набережная, 26/1
                          </span>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Руководитель
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          Главный исполнительный директор
                        </Typography>
                        <Typography variant="subtitle1">
                          Сечин Игорь Иванович
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          с 9 июня 2012 г.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={6}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography>
                          <span className="company-info__title">
                            Держатель реестра акционеров
                          </span>
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <span className="company-info__text">
                            <a href="/id/1282692" className="link-arrow">
                              <span>
                                ОБЩЕСТВО С ОГРАНИЧЕННОЙ
                                ОТВЕТСТВЕННОСТЬЮ"РЕЕСТР-РН"
                              </span>
                            </a>
                          </span>
                        </Typography>
                        <Typography variant="subtitle1">
                          <span className="company-info__title">
                            Правопредшественники
                          </span>
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <a href="/id/4517659" className="link-arrow noarrow">
                            <span>
                              ОАО "НК "Роснефть" - Сахалинморнефтегаз"
                            </span>
                          </a>
                          ,
                          <a href="/id/10873356" className="link-arrow noarrow">
                            <span>ОАО "НК "Роснефть"-Краснодарнефтегаз"</span>
                          </a>
                          ,
                          <Button size="small" color="primary">
                            Ещё 10
                          </Button>
                        </Typography>
                        <Typography>
                          Подробнее в{" "}
                          <a
                            href="/egrul?ogrn=1027700043502#xblock_predsh"
                            rel="nofollow"
                            className="link-bolder"
                          >
                            выписке из ЕГРЮЛ
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Основной вид деятельности
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <dt>Добыча сырой нефти</dt>
                          <dt>(06.10.1)</dt>
                        </Typography>
                        <Typography variant="subtitle1">
                          <a
                            href="/okved/583710"
                            className="gtm_main_okved"
                            rel="nofollow"
                          >
                            Все виды деятельности (45)
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Налоговый орган
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <span className="company-info__text">
                            Инспекция ФНС России № 6 по г. Москве
                          </span>
                        </Typography>
                        <Typography variant="subtitle1">
                          с 7 июня 1993 г.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={6}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Коды статистики
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <dt>ОКПО 00044428</dt>
                          <dt>ОКАТО 45286596000</dt>
                          <dt>ОКТМО 45384000000</dt>
                          <dt>ОКФС 49</dt>
                        </Typography>
                        <Typography variant="overline">
                          <dt>Иная смешанная российская собственность</dt>
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                          <dt>ОКОГУ4100614</dt>
                          <dt>ОКПО00044428</dt>
                        </Typography>
                        <Typography variant="overline">
                          <dt>
                            Открытое акционерное общество "Нефтяная компания
                            "Роснефть"
                          </dt>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item={true} xs={12} sm={3}>
                    <Card className={classes.card} elevation={3}>
                      <CardContent>
                        <Typography variant="subtitle1">Контакты</Typography>
                        <dt>
                          <Link rel="noopener" to="http://www.rosneft.ru">
                            www.rosneft.ru
                          </Link>
                        </dt>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SparkHome;
