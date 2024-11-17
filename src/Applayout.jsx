import { useState } from "react";
import styles from "./Applayout.module.css";
import Friends from "./Friends";
import Map from "./Map";
import { Outlet } from "react-router-dom";
function Applayout() {
  return (
    <div className={styles.app}>
      <Outlet />
      <Map />
    </div>
  );
}

export default Applayout;
