import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Math Mathias",
      image: "https://avatars.githubusercontent.com/u/45769545?s=96&v=4",
      places: 1,
    },
    {
      id: "u2",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 1,
    },
    {
      id: "u3",
      name: "Math Mathiass",
      image: "https://avatars.githubusercontent.com/u/45769545?s=96&v=4",
      places: 0,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
