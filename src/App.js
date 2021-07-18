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
      <RegisterProvider>
        <LoginProvider>
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
                      <Page>
                        <Login />
                      </Page>}
                    />
                    <Route path='/Register' render={() =>
                      <Page>
                        <Register />
                      </Page>}
                    />
                    <ProtectedRoot path='/profile' component={() =>
                      <Page>
                        <Profile />
                      </Page>
                    }
                    />
                    {/* <Route path='*' render={() => <Page><Redirect to='/home' /></Page>} /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )} />
        </LoginProvider>
      </RegisterProvider>
    </UserProvider>
  );
}

export default App;
