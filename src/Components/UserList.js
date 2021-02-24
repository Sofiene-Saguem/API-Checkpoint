import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((users) => setUsers(users));
  }, []);
  return (
    <div className="usercard">
      {users.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
};

export default UserList;
