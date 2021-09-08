import React from "react";
import PropTypes from "prop-types";

const RepoItem = (props) => {
  return (
    <div className="card">
      <a href={props.repo.html_url}>{props.repo.name}</a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
