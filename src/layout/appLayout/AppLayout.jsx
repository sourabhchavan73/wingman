import React from "react";
import Appsidebar from "../appsidebar/Appsidebar";
import Apptopbar from "../apptopbar/Apptopbar";
import Appmainlayout from "../appmainlayout/Appmainlayout";

function AppLayout() {
  return (
    <>
      <Appsidebar />
      <Apptopbar />
      <Appmainlayout />
    </>
  );
}

export default AppLayout;
