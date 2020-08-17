import React from "react";
// import logo from './logo.svg';
import NavBar from "../../components/navbar";
import { Button, styled, Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "./SparkHome.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const MyButton = styled(Button)({
  margin: 5,
});

function SparkHome() {
  const classes = useStyles();
  return (
    <div>
      <div className="App">
        <NavBar />
        <MyButton variant="contained" color="primary">
          Домой
        </MyButton>
        <MyButton variant="contained" color="primary">
          Учредители
        </MyButton>
        <MyButton variant="contained" color="primary">
          Связи
        </MyButton>
        <MyButton variant="contained" color="primary">
          Надежность
        </MyButton>
        <MyButton variant="contained" color="primary">
          Финансы
        </MyButton>
        <MyButton variant="contained" color="primary">
          Госзакупки
        </MyButton>
        <MyButton variant="contained" color="primary">
          Суды
        </MyButton>
        <MyButton variant="contained" color="primary">
          Долги
        </MyButton>
        <MyButton variant="contained" color="primary">
          Проверки
        </MyButton>
      </div>

      <div className={classes.root}>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={8}>
            <Paper className={classes.paper}>
              <div className="leftcol">
                <div className="company-requisites">
                  <div className="companyName">
                    <h3>
                      ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "НЕФТЯНАЯ КОМПАНИЯ
                      "РОСНЕФТЬ"
                    </h3>
                  </div>
                  <div className="companyStatus" color="lightGreen">
                    <p>Действующая организация</p>
                  </div>
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
                    <span itemProp="postalCode">115035, </span>
                    <span itemProp="addressRegion">город Москва, </span>
                    <span itemProp="streetAddress">
                      Софийская набережная, 26/1
                    </span>
                  </dd>
                </div>
                <div className="company-row hidden-parent">
                  <span className="company-info__title">Руководитель</span>
                  <span className="chief-title">
                    ГЛАВНЫЙ ИСПОЛНИТЕЛЬНЫЙ ДИРЕКТОР
                  </span>
                  <span className="company-info__text">
                    Сечин Игорь Иванович
                  </span>
                  <span className="chief-title">с 9 июня 2012 г.</span>
                </div>
                <div className="company-row">
                  <span className="company-info__title">
                    Держатель реестра акционеров
                  </span>
                  <span className="company-info__text">
                    <a href="/id/1282692" className="link-arrow">
                      <span>
                        ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ"РЕЕСТР-РН"
                      </span>
                    </a>
                  </span>
                </div>
                <div className="company-row">
                  <span className="company-info__title">
                    Правопредшественники
                  </span>
                  <div className="company-info__title hidden-parent">
                    <a href="/id/4517659" className="link-arrow noarrow">
                      <span>ОАО "НК "Роснефть" - Сахалинморнефтегаз"</span>
                    </a>
                    ,
                    <a href="/id/10873356" className="link-arrow noarrow">
                      <span>ОАО "НК "Роснефть"-Краснодарнефтегаз"</span>
                    </a>
                    ,
                    <button
                      type="button"
                      className="all-text-link js-hidden-text-opener link-arrow noarrow"
                    >
                      еще 10
                    </button>
                  </div>
                  <div className="company-info__text">
                    Подробнее в{" "}
                    <a
                      href="/egrul?ogrn=1027700043502#xblock_predsh"
                      rel="nofollow"
                      className="link-bolder"
                    >
                      выписке из ЕГРЮЛ
                    </a>
                  </div>
                </div>
              </div>
              <div className="rightcol">
                <div className="company-row">
                  <span className="company-info__title">
                    <dt>Основной вид деятельности</dt>
                  </span>
                  <span className="company-info__text">
                    <dt>Добыча сырой нефти</dt>
                    <span className="bolder">(06.10.1)</span>
                  </span>
                  <a
                    href="/okved/583710"
                    className="gtm_main_okved"
                    rel="nofollow"
                  >
                    Все виды деятельности (45)
                  </a>
                </div>
                <div className="company-row">
                  <span className="company-info__title">Налоговый орган</span>
                  <span className="company-info__text">
                    Инспекция ФНС России № 6 по г. Москве
                  </span>
                  <span className="chief-title">с 7 июня 1993 г.</span>
                </div>
                <dl className="company-row">
                  <dt className="company-info__title">Коды статистики</dt>
                  <dd className="company-info__text has-copy">
                    <span className="copy_title">ОКПО</span>
                    <span className="copy_target" id="clip_okpo">
                      00044428
                    </span>
                    <span
                      className="copy_button clipper"
                      data-clipboard-target="#clip_okpo"
                      data-quetip="Скопировано"
                      data-quetime="500"
                    />
                  </dd>
                  <dd className="company-info__text has-copy">
                    <span className="copy_title">ОКАТО</span>
                    <span className="copy_target" id="clip_okato">
                      45286596000
                    </span>
                    <span
                      className="copy_button clipper"
                      data-clipboard-target="#clip_okato"
                      data-quetip="Скопировано"
                      data-quetime="500"
                    />
                  </dd>
                  <dd className="company-info__text has-copy">
                    <span className="copy_title">ОКТМО</span>
                    <span className="copy_target" id="clip_oktmo">
                      45384000000
                    </span>
                    <span
                      className="copy_button clipper"
                      data-clipboard-target="#clip_oktmo"
                      data-quetip="Скопировано"
                      data-quetime="500"
                    />
                  </dd>
                  <dd className="company-info__text has-copy">
                    <span className="copy_title">ОКФС</span>
                    <span className="copy_target" id="clip_okfs">
                      49
                    </span>
                    <span
                      className="copy_button clipper"
                      data-clipboard-target="#clip_okfs"
                      data-quetip="Скопировано"
                      data-quetime="500"
                    />
                  </dd>
                  <dd className="company-info__text">
                    <span className="chief-title">
                      Иная смешанная российская собственность
                    </span>
                  </dd>
                  <dd className="company-info__text has-copy">
                    <span className="copy_title">ОКОГУ</span>
                    <span className="copy_target" id="clip_okogu">
                      4100614
                    </span>
                    <span
                      className="copy_button clipper"
                      data-clipboard-target="#clip_okogu"
                      data-quetip="Скопировано"
                      data-quetime="500"
                    />
                  </dd>
                  <dd className="company-info__text">
                    <span className="chief-title">
                      Открытое акционерное общество "Нефтяная компания
                      "Роснефть"
                    </span>
                  </dd>
                </dl>
                <div className="company-row">
                  <dl>
                    <dt>
                      <span className="company-info__title">Контакты</span>
                    </dt>
                    <dl>
                      <span className="company-info__contact site">
                        <span className="offscreen">Официальный сайт</span>
                        <dt>
                          <a
                            href="http://www.rosneft.ru"
                            rel="nofollow noopener"
                            target="_blank"
                          >
                            www.rosneft.ru
                          </a>
                        </dt>
                      </span>
                    </dl>
                  </dl>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item={true} xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SparkHome;
