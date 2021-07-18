import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { RegisterContext } from '../../Contexts/RegisterContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

function Step3() {
    const classes = useStyles();

    const { email, handleChange, prev, next } = useContext(RegisterContext)


    const handleSubmit = (e) => {
        next()
    }


    return (
        <ValidatorForm
            onSubmit={handleSubmit}
            instantValidate={false}
            className={classes.form}
        >
            <Grid item xs={12}>
                <TextValidator
                    value={email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    variant="outlined"
                    id="email"
                    label="ایمیل"
                    name="email"
                    style={{ direction: 'rtl' }}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                        'ایمیل را وارد کنید',
                        'ایمیل نادرست است'
                    ]}
                    className={classes.loginInput}
                />
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
                        بعدی
                    </Button>
                </div>
            </Grid>
        </ValidatorForm>
    )
}

export default Step3
