import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../Contexts/UserContext'

export default function ProtectedRoot({ component: Component, ...rest }) {
    const { isUserLogin } = useContext(UserContext)

    if (!isUserLogin) {
        return <Redirect to={{
            pathname: '/login',
            state: {
                from: rest.path
            }
        }} />
    }
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    )
}