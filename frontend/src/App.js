import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AuthPage from './pages/Auth/Auth';
import BookingsPage from './pages/Bookings/Bookings';
import FrontPage from './pages/FrontPage/FrontPage';
import EventsPage from './containers/Events/Events'
import TripsPage from './pages/Trips/Trips';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import store from './store'

import './App.css';



class App extends Component {
  state = {
    token: null,
    userId: null
  };

   

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    // pasar por redux los valores de AuthContext
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <AuthContext.Provider
              value={{
                token: this.state.token,
                userId: this.state.userId,
                login: this.login,
                logout: this.logout
              }}
            >
              <MainNavigation />
              <main className="main-content">
                <Switch>
                  {/* {this.state.token && <Redirect from="/" to="/events" exact />} */}
                  {this.state.token && <Redirect from="/auth" to="/events" exact />}
                  {!this.state.token && (
                    <Route path="/auth" component={AuthPage} />
                    )}
                  <Route path="/events" component={EventsPage} />
                  <Route path="/trips/:id" component={TripsPage} />
                  <Route path="/" component={FrontPage} />
                  {this.state.token && (
                    <Route path="/bookings" component={BookingsPage} />
                    )}
                  {!this.state.token && <Redirect to="/events" exact />}
                </Switch>
              </main>
            </AuthContext.Provider>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;