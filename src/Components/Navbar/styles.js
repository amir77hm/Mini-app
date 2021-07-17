import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    '@global': {
        '*': {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
            fontFamily: 'roboto'
        },
        '.Mui-selected': {
            color: '#fff',
        },
        '.MuiBottomNavigationAction-iconOnly': {
            color: '#fff',
        },

    },
    root: {
        flexGrow: 1,
        direction: 'rtl',
        color: '#fff',
        backgroundColor: '#fff'
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
    },
    icon: {
        fill: '#fff',
    },
    buttonGroup: {
        '& button:nth-child(1)': {
            marginLeft: theme.spacing(1)
        }
    }
}));
