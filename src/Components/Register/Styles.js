import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    paper: {
        marginTop: theme.spacing(7),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    loginInput: {
        width: '100%',
        height: '4.5rem'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(4)
    },
    btns: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

        '& button': {
            width: '48%'
        }
    },
    notShow: {
        opacity: '0',
        cursor: 'auto'
    }
}))

export default useStyles;