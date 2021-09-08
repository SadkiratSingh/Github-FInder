import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layouts/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/pages/About";
import User from "./Components/users/User";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  //runs only after the first time component is rendered to DOM
  // async componentDidMount(){
  //   this.setState({loading:true});

  //   let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({users:res.data, loading:false});
  // }

  const searchUsersHandler = async (text) => {
    setLoading(true);

    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  const getUserHandler = async (username) => {
    setLoading(true);

    let res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  const getReposHandler = async (username) => {
    setLoading(true);

    let res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const clearUsersHandler = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlertHandler = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
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
                    <Search
                      onSearchUsers={searchUsersHandler}
                      onClearUsers={clearUsersHandler}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlertHandler}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                );
              }}
            />

            {/* about route */}
            <Route exact path="/about" component={About} />

            {/* user view route */}
            <Route
              exact
              path="/user/:login"
              render={(props) => {
                return (
                  <User
                    {...props}
                    onGetUser={getUserHandler}
                    onGetRepos={getReposHandler}
                    user={user}
                    loading={loading}
                    repos={repos}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
