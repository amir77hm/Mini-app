import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        margin: '0 auto',
        marginTop: theme.spacing(3),
    },
    nav: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse'
    },
    navItems: {
    },
    link: {
        textDecoration: 'none',
        '&:nth-child(1)': {
            marginLeft: theme.spacing(2)
        }
    }
}))

export default useStyles
