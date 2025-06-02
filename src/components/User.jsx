import React, { useState } from "react";
import "./User.css";

function User(props) {
  let [user, setUser] = useState({
    img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid",
    username: "Amulya",
    created_at: "2 days ago",
  });
  return (
    <div className="user-detail">
      <form>
        <input type="checkBox" />
        <img src={user.img} alt="profile image" className="profile-img" />
        <p>{user.username} </p>
        <p style={{ color: "grey" }}>{user.created_at}</p>
      </form>
    </div>
  );
}

export default User;
