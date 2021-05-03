import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';


import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Members from './components/pages/Members';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
    render() {
        return (
                <Router>
                    <Security issuer="https://dev-50192976.okta.com/oauth2/default"
          client_id="0oao9uacdG3wV4pLv5d6"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}>
            <div className="App">
                <Navbar />
                <Route path="/" exact={true} component={Home} />
                <SecureRoute path="/Members" exact={true} component={Members} />
                <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-50192976.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={LoginCallback} />
            </div>
            </Security>
            </Router>
        );
    }
}

export default App;

