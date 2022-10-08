import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/index";

export default function Main() {
  return (
    <div className="content">
      <Navigation />
      <Outlet />
    </div>
  );
}
