import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../../context/github/GithubContext";
import PropTypes from "prop-types";

const Search = (props) => {
  const [text, setText] = useState("");
  const { onSearchUsers } = useContext(GithubContext);

  const { setAlert, showClear, onClearUsers } = props;

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Please Enter Something", "light");
    } else {
      onSearchUsers(text);
      setText("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="text"
          placeholder="search users ..."
          value={text}
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={onClearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  onClearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
