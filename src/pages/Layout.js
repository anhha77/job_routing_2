import React from "react";
import SearchAppBar from "../components/SearchAppBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <SearchAppBar />
      <Outlet />
    </>
  );
}

export default Layout;
