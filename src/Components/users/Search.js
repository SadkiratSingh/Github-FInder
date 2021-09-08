import React, { useState, useContext, Fragment } from "react";
import GithubContext from "../../context/github/GithubContext";
import PropTypes from "prop-types";

const Search = (props) => {
  const [text, setText] = useState("");
  const { onSearchUsers, onClearUsers, users } = useContext(GithubContext);

  const { setAlert } = props;

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
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={onClearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
