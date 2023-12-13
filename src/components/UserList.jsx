// UserList.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";

function UserList() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => dispatch(removeUser(user.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
