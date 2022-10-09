import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/profile4.jpg";

export default function Header() {
  return (
    <div className="_header">
      <div className="logo">TAIMA</div>
      <div className="menu-container">
        <Link to="/">
          <div className="dropdown">
            <div className="btn">Project</div>
          </div>
        </Link>
        <Link to="time-tracking">
          <div className="dropdown">
            <div className="btn">Time Tracking</div>
          </div>
        </Link>
        <Link to="workspace/task">
          <div className="dropdown">
            <div className="btn">Task</div>
          </div>
        </Link>
        <Link to="workspace/member">
          <div className="dropdown">
            <div className="btn">Member</div>
          </div>
        </Link>
      </div>
      <div className="profile">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}
