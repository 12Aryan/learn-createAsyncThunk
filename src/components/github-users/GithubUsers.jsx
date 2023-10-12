import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubUsers } from "./redux-slice/github-users-slice";

const GithubUsers = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.github);
  console.log("users--", users);
  console.log("loading--", loading);
  console.log("error--", error);

  const getUsers = () => {
    dispatch(fetchGithubUsers("helo"));
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={getUsers}>Get github users</button>
        {loading === true ? (
          <h1>Loading...</h1>
        ) : error !== null ? (
          "Error"
        ) : (
          users &&
          users.length > 0 &&
          users.map((user, i) => {
            return <div key={i}>{user.login}</div>;
          })
        )}
      </div>
    </>
  );
};

export default GithubUsers;
