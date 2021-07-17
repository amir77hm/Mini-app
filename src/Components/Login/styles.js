import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    '@global': {
        '.MuiCircularProgress-colorSecondary': {
            color: '#fff'
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: '2.5rem'
    },
    loginInput: {
        width: '100%',
        height: '4.5rem'
    }
}))

export default useStyles;