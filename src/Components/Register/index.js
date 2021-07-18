import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { RegisterContext } from '../../Contexts/RegisterContext';
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
import useStyles from './Styles';

function SignUp() {
    const classes = useStyles();

    const { step, handleChange } = useContext(RegisterContext)

    const { path, url } = useRouteMatch()

    const history = useHistory()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ثبت نام
                </Typography>
                <Grid container spacing={2}>
                    <Switch>
                        <Redirect exact from="/register" to={`${url}/step1`} />
                        <Route exact path={`${path}/step1`} render={() =>
                            <Step1 />
                        } />
                        <Route exact path={`${path}/step2`} render={() =>
                            <Step2 />
                        } />
                        <Route exact path={`${path}/step3`} render={() =>
                            <Step3 />
                        } />
                        <Route exact path={`${path}/step4`} render={() =>
                            <Step4 />
                        } />
                    </Switch>
                </Grid>
            </Paper>
            <div className={classes.pagination}>
                <Pagination
                    count={4}
                    color="secondary"
                    selected={true}
                    page={step}
                    onChange={(event, val) => {
                        history.push(`${url}/step${val}`)
                        handleChange('step', val)
                    }}
                />
            </div>
        </Container >
    );
}

export default React.memo(SignUp)