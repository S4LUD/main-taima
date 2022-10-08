import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  return <div className="_navigation">{`Navigation ${location.pathname}`}</div>;
}
