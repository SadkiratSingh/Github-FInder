import React, {Component} from 'react';
import NavBar from './Components/Layouts/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    // state always an object..
    this.state = {
      users: [],
      loading: false
    }
  }
  //runs only after the first time component is rendered to DOM
  async componentDidMount(){
    this.setState({loading:true});

    let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users:res.data, loading:false});
  }
  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className = 'container'>
          <Search />
          <Users loading = {this.state.loading} users = {this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
