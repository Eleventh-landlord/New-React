import React from "react";
import "./App.css";

function ProfileStats({ projects, followers, following }) {
  return (
    <div className="profile-stats">
      <div className="stat">
        <span>{projects}</span>
        <p>Projects</p>
      </div>
      <div className="stat">
        <span>{followers}</span>
        <p>Followers</p>
      </div>
      <div className="stat">
        <span>{following}</span>
        <p>Following</p>
      </div>
    </div>
  );
}

export default ProfileStats;
