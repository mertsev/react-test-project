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

import { Formik, Form, Field, ErrorMessage } from 'formik';

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

const formValidation = (values: any) => {
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

function FormExample() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={formValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                                </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default FormExample;