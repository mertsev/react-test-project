import React from "react";
import NavBar from "../../components/navbar";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme, Select } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  })
);
function Copyright() {
    return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
        {'SberSpark © '}
        <Link color="inherit" href="https://material-ui.com/">
          Бизнес-планирование и аналитика,
        </Link>{' '}
        {new Date().getFullYear()}  
        {'.'}
        </Typography>
      </div>
    );
  }
function Search() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Информация о клиенте
        </Typography>
        <div><br/>
            У выбранного Вами ИНН может быть несколько ОГРН,
            выберите нужное из списка для просмотра полной информации по клиенту.
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="inn"
            label="Введите ИНН"
            name="inn"
            autoComplete="inn"
            autoFocus
          />
          <Select
            //variant="outlined"
            //margin="normal"
            required
            fullWidth
            id="ogrn"
            label="Выберите ОГРН из выпадающего списка"
            name="ogrn"
            autoComplete="ogrn"
            autoFocus
          />          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Поиск
          </Button>
          <Typography variant="body2" color="textSecondary">
            *Поле не должно быть пустым.
          </Typography>  
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
    </div>
  );
}

export default Search;