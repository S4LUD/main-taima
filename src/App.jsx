import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./components/project";
import TimeTracking from "./components/timetracking";
import Task from "./components/task";
import Workspace from "./route-layout/workspace";
import Root from "./route-layout/root";
import Member from "./components/member";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Project />} />
        <Route path="time-tracking" element={<TimeTracking />} />
        <Route path="workspace" element={<Workspace />}>
          <Route path="task" element={<Task />} />
          <Route path="member" element={<Member />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
