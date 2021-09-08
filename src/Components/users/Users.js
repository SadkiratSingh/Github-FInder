import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

const Users = () => {
  let { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userContainer}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};
export default Users;
