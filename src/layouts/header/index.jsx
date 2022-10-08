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
        <div className="dropdown">
          <div className="btn">Workspace</div>
          <div className="drop-menu">
            <div className="menu">
              <div className="m-title">Workspace</div>
              <div className="md-container">
                <Link to="workspace/task">
                  <div className="menu-desc">
                    <div className="wrap-md">
                      <div className="md-title">Task</div>
                      <div className="desc">
                        View the complete list of tasks that have been created.
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="workspace/member">
                  <div className="menu-desc">
                    <div className="wrap-md">
                      <div className="md-title">Member</div>
                      <div className="desc">
                        View every new member that has been added
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}
