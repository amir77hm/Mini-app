import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { RegisterContext } from '../../Contexts/RegisterContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    loginInput: {
        width: '100%',
        height: '4.5rem',
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

function Step2() {
    const classes = useStyles();

    const { lastName, handleChange, next, prev } = useContext(RegisterContext)


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
                    value={lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    variant="outlined"
                    id="lastName"
                    label="نام خانوادگی"
                    name="lastName"
                    style={{ direction: 'rtl' }}
                    validators={['required']}
                    errorMessages={[
                        'نام خانوادگی را وارد کنید',
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

export default Step2
