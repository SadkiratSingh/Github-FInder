import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layouts/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/pages/About";
import User from "./Components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              {/* put all routes in a switch */}
              <Switch>
                {/* index route */}
                <Route
                  exact
                  path="/"
                  render={() => {
                    return (
                      <Fragment>
                        <Search />
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
      </AlertState>
    </GithubState>
  );
};

export default App;
