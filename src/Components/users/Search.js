import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  static propTypes = {
    onSearchUsers: PropTypes.func.isRequired,
    onClearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  };
  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something", "light");
    } else {
      this.props.onSearchUsers(this.state.text);
      this.setState({ text: "" });
    }
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmitHandler.bind(this)} className="form">
          <input
            type="text"
            name="text"
            placeholder="search users ..."
            value={this.state.text}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.onClearUsers}
          >
            Clear
          </button>
        )}
      </Fragment>
    );
  }
}

export default Search;
