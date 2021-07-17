import React, { useContext } from 'react'
import useStyles from './styles'
import { UserContext } from '../../Contexts/UserContext'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Page from '../Page'

export default function Profile() {

    const classes = useStyles()

    const { user } = useContext(UserContext)

    const { path, url } = useRouteMatch()

    return (
        <div className={classes.root}>
            <div className={classes.nav}>
                <p style={{ direction: 'rtl' }}>
                    سلام {user.name}
                </p>
                {user.role === 'admin' ? (
                    <div className={classes.navItems}>
                        <Link className={classes.link} to={`${url}/dashboard`}>داشبورد</Link>
                        <Link className={classes.link} to={`${url}/dashboard`}>پیام ها</Link>
                    </div>
                ) : (
                    <div>profile</div>
                )}
            </div>
            <Switch>
                <Route exact path={`${path}/dashboard`} render={() => <Page><Dashboard /></Page>} />
            </Switch>
        </div>
    )
}
