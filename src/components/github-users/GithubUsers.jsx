import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubUsers } from "./redux-slice/github-users-slice";
import { type } from "@testing-library/user-event/dist/type";

const GithubUsers = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const dispatch = useDispatch();
  let { users, loading, error } = useSelector((state) => state.github);
  if (searchQuery !== null && searchQuery !== "") {
    users = [users];
  }


  const getUsers = () => {
    dispatch(fetchGithubUsers(searchQuery));
  };

  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    getUsers();
  }, [searchQuery]);
  return (
    <>
      <div className="header-wrapper">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) =>
            e.target.value === ""
              ? setSearchQuery(null)
              : setSearchQuery(e.target.value.trim())
          }
        />
        {searchQuery === null && (
          <button onClick={getUsers}>Get github users</button>
        )}
      </div>
      <div className="wrapper">
        {loading === true ? (
          <h1>Loading...</h1>
        ) : error !== null ? (
          "Error"
        ) : (
          users &&
          users.length > 0 &&
          users.map((user, i) => {
            return (
              <div key={i} className="card">
                <img src={user?.avatar_url} alt="" style={{ height: "150px" }} />
                <code style={{ display: "block" }}>
                  Followers: {user?.followers}
                </code>
                <code style={{ display: "block" }}>
                  Following: {user?.following}
                </code>
                <code style={{ display: "block" }}>{user?.login}</code>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default GithubUsers;
