import React from 'react'
import useStyles from './styles'


const Dashboard = () => {
    const classes = useStyles('/user')

    return (
        <div className={classes.root}>
            Dashboard
        </div>
    )
}

export default Dashboard
