import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = (props) => {
  return (
    <div class="card">
      {props.repos.map((repo) => {
        return <RepoItem key={repo.id} repo={repo} />;
      })}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
