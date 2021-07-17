import React from 'react'
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    '@global': {
        '.page-enter': {
            opacity: 0,
        },
        '.page-enter-active': {
            opacity: 1,
            transition: 'opacity 300ms',
        },
        '.page-exit': {
            opacity: 1,
        },
        '.page-exit-active': {
            opacity: 0,
            transition: 'opacity 300ms',
        }
    },
    root: {
        width: '100vw',
        height: '100vh',
        position: 'fixed'
    },
}))

export default function PageContext(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}
