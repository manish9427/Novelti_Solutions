// components/UserList.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <Link to="/create">Create User</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/edit/${user.id}`}
            >{`${user.firstName} ${user.lastName}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
