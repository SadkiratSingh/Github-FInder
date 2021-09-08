import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layouts/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/pages/About";
import User from "./Components/users/User";
import GithubState from "./context/github/GithubState";
import axios from "axios";
import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  const setAlertHandler = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Alert alert={alert} />
            {/* put all routes in a switch */}
            <Switch>
              {/* index route */}
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Fragment>
                      <Search setAlert={setAlertHandler} />
                      <Users />
                    </Fragment>
                  );
                }}
              />

              {/* about route */}
              <Route exact path="/about" component={About} />

              {/* user view route */}
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
