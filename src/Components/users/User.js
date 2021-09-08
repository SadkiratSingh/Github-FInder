import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../Layouts/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

const User = (props) => {
  const { match } = props;
  const { user, loading, onGetUser, onGetRepos, repos } =
    useContext(GithubContext);
  // you are tried to be called every render but now you will be called once after initial render.
  useEffect(() => {
    onGetUser(match.params.login);
    onGetRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    hireable,
    company,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      {/* Link basically renders the anchor tag only */}
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-danger">Public Repos:{public_repos}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
