import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Page from './Components/Page'
import Register from './Components/Register'

import ProtectedRoot from './Routes/Protected.Route'
import { UserProvider } from './Contexts/UserContext'
import { LoginProvider } from './Contexts/LoginContext'
import { RegisterProvider } from './Contexts/RegisterContext'

function App() {
  return (
    <UserProvider>
      <Route render={({ location }) => (
        <>
          <Navbar />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='page'
              timeout={300}
            >
              <Switch location={location}>

                <Route exact path='/home' render={() =>
                  <Page>
                    <Home />
                  </Page>}
                />
                <Route exact path='/login' render={() =>
                  <LoginProvider>
                    <Page>
                      <Login />
                    </Page>
                  </LoginProvider>}
                />
                <Route path='/Register' render={() =>
                  <RegisterProvider>
                    <Page>
                      <Register />
                    </Page>
                  </RegisterProvider>}
                />
                <ProtectedRoot path='/profile' component={() =>
                  <Page>
                    <Profile />
                  </Page>
                }
                />
                {/* <Route exact path='*' render={() => <Page><Redirect to='/home' /></Page>} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </>
      )} />
    </UserProvider>
  );
}

export default App;
