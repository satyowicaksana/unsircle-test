import React from 'react';
import Auth from './containers/Auth'
import Dashboard from './containers/Dashboard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
