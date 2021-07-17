import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        maxWidth: '60rem',
        margin: '0 auto',
        marginTop: '2rem',

        '& img': {
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            objectFit: 'cover'
        },
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gridGap: '10px',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(3,1fr)'
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(2,1fr) !important'
        },
    },
    card: {
        border: '1px solid #000',
        padding: '5px',
    },
    name: {
        fontSize: 15
    },
    email: {
        fontSize: 12
    }

}))

export default useStyles;