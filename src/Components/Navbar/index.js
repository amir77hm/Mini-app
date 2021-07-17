import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import useStyles from './styles'
import { UserContext } from '../../Contexts/UserContext';

import { useHistory, useLocation } from 'react-router-dom'
export default function MenuAppBar() {
    const classes = useStyles();
    const { isUserLogin, logout } = useContext(UserContext)

    const { pathname } = useLocation()
    const currentRoot = pathname.split('/')[1].toLowerCase() || 'home'

    const [page, setPage] = useState(currentRoot);

    const history = useHistory()
    const handleChange = async (event, newValue) => {
        if (newValue === 'profile' && !isUserLogin) {
            setPage('login');
        } else {
            setPage(newValue);
        }
        await history.push(`/${newValue}`)
    };

    const handleExit = () => {
        logout()
        setPage('home')
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <BottomNavigation value={page} onChange={handleChange}
                        className={classes.title}>
                        <BottomNavigationAction
                            label="Home" value="home" icon={<Home className={classes.icon} />} />
                        <BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon className={classes.icon} />} />
                    </BottomNavigation>
                    {isUserLogin ? (
                        <div>
                            <Button variant="contained" color='secondary' onClick={handleExit}>خروج از حساب</Button>
                        </div>
                    ) : (
                        <div className={classes.buttonGroup}>
                            <Button variant="contained" onClick={() => {
                                history.push('/login')
                                setPage('/')
                            }}>ورود</Button>
                            <Button
                                variant="contained"
                                color='secondary'
                                onClick={() => {
                                    history.push('/register')
                                    setPage('/')
                                }}
                            >ثبت نام</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div >
    );
}