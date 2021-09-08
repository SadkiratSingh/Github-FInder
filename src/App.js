import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layouts/Navbar";
import Home from "./Components/pages/Home";
import NoComponent from "./Components/pages/NoComponent";
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
                <Route exact path="/" component={Home} />

                {/* about route */}
                <Route exact path="/about" component={About} />

                {/* user view route */}
                <Route exact path="/user/:login" component={User} />

                {/* any other route */}
                <Route component={NoComponent} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
