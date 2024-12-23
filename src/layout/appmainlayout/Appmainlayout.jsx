import React from "react";
import styles from "./Appmainlayout.module.scss";
import { Card } from "../../components/card";
import { Outlet } from "react-router-dom";

function Appmainlayout() {
  return (
    <main className={styles.mainContainer}>
      <Card>
        <Outlet />
      </Card>
    </main>
  );
}

export default Appmainlayout;
