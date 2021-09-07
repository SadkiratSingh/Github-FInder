import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Layouts/Navbar";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/pages/About";
import User from "./Components/users/User";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    // state always an object..
    this.state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
    };
  }
  //runs only after the first time component is rendered to DOM
  // async componentDidMount(){
  //   this.setState({loading:true});

  //   let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({users:res.data, loading:false});
  // }

  searchUsersHandler = async (text) => {
    this.setState({ loading: true });

    let res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUserHandler = async (username) => {
    this.setState({ loading: true });

    let res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  clearUsersHandler = () => {
    this.setState({ users: [], loading: false });
  };

  setAlertHandler = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Alert alert={this.state.alert} />
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
                        onSearchUsers={this.searchUsersHandler}
                        onClearUsers={this.clearUsersHandler}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlertHandler}
                      />
                      <Users
                        loading={this.state.loading}
                        users={this.state.users}
                      />
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
                      onGetUser={this.getUserHandler}
                      user={this.state.user}
                      loading={this.state.loading}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
