import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Redirect } from 'react-router-dom';

import { LoginContext } from '../../Contexts/LoginContext';
import { UserContext } from '../../Contexts/UserContext'

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from '../../data.json'
import useStyles from './styles'

export default function SignIn() {
    const classes = useStyles();

    const { username, password, handleChange } = useContext(LoginContext)
    const { isUserLogin, login, setUser } = useContext(UserContext)

    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        setLoading(true)
        const userExist = isUserExist(username, password)
        setTimeout(() => {
            setLoading(false)
            if (userExist) {
                setUser(userExist)
                login()
            }
        }, 2000);

    }

    function isUserExist(name, pass) {
        for (const user of data) {
            if ((user.name == name) && (user.password == pass)) {
                return user
            }
        }
        return false
    }

    if (isUserLogin) return <Redirect to={{ pathname: '/home' }} />
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ورود
                </Typography>
                <ValidatorForm
                    onSubmit={handleSubmit}
                    instantValidate={false}
                    className={classes.form}
                >
                    <TextValidator
                        value={username}
                        onChange={(e) => handleChange('username', e.target.value)}
                        variant="outlined"
                        margin="normal"
                        id="name"
                        label="نام کاربری"
                        name="name"
                        autoFocus
                        style={{ direction: 'rtl' }}
                        validators={['required']}
                        errorMessages={[
                            'نام کاربری را وارد کنید',
                        ]}
                        className={classes.loginInput}
                    />
                    <TextValidator
                        value={password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        variant="outlined"
                        margin="normal"
                        name="password"
                        label="رمز ورود"
                        type="password"
                        id="password"
                        style={{ direction: 'rtl' }}
                        validators={['required']}
                        errorMessages={[
                            'رمز را وارد کنید',
                        ]}
                        className={classes.loginInput}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {loading ? <CircularProgress color="secondary" size={25} /> : 'ورود'}
                    </Button>
                    <Grid container>
                        <Grid item xs >
                            <Link href="#" variant="body2">
                                بازیابی رمز عبور
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"حساب کاربری ندارید؟ ثبت نام"}
                            </Link>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Paper>
        </Container>
    );
}