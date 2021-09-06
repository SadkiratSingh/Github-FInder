import React, { Component } from 'react'

class Search extends Component{
    constructor(){
        super();
        this.state = {
            text:''
        }
    }
    onChangeHandler = (event) =>{
        this.setState({text:event.target.value});
    }
    onSubmitHandler(event){
        event.preventDefault();
        this.props.onSearchUsers(this.state.text);
        this.setState({text:''});
    }
    render(){
        return(
            <form onSubmit = {this.onSubmitHandler.bind(this)} className = 'form'>
                <input type='text' name='text' placeholder = 'search users ...' value = {this.state.text} onChange = {this.onChangeHandler} />
                <input type='submit' value='search' className = 'btn btn-dark btn-block' />
            </form>
        )
    }
}

export default Search;