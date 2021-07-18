import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { RegisterContext } from '../../Contexts/RegisterContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    loginInput: {
        width: '100%',
        height: '4.5rem'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    btns: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

        '& button': {
            width: '48%'
        }
    },
}));

function Step4() {
    const classes = useStyles();

    const { password, handleChange, next, prev } = useContext(RegisterContext)

    const history = useHistory()
    const handleSubmit = async (e) => {
        await next()
        history.push('/home')
        handleChange('step', 1)
    }

    return (
        <ValidatorForm
            onSubmit={handleSubmit}
            instantValidate={false}
            className={classes.form}
        >
            <Grid item xs={12}>
                <TextValidator
                    value={password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    variant="outlined"
                    id="password"
                    label="رمز عبور"
                    name="password"
                    style={{ direction: 'rtl' }}
                    validators={['required']}
                    errorMessages={[
                        'پسورد را وارد کنید',
                    ]}
                    className={classes.loginInput}
                    type='password'
                />
            </Grid>
            <div className={classes.btns}>
                <Button
                    // type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={() => prev()}
                >
                    قبلی
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    ثبت نام
                </Button>
            </div>
        </ValidatorForm>
    )
}

export default Step4
