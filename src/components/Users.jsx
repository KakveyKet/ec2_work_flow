import React from "react";

const Users = (props) => {
  return (
    <div>
      <h2>my name is {props.name}</h2>
      <p>I am an expert in {props.expertise}</p>
    </div>
  );
};

export default Users;
