import React from "react";
import styles from "./Apptopbar.module.scss";
import { ReactComponent as Tag } from "../../assets/svg/Tag.svg";
import { ReactComponent as ChartPieSlice } from "../../assets/svg/ChartPieSlice.svg";
import { ReactComponent as ChatTeardropText } from "../../assets/svg/ChatTeardropText.svg";

function Apptopbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className="flex gap-5">
        <li
          className={`flex items-center gap-2 cursor cursor-pointer text text-primary size-18 ${styles.active} ${styles.navMenu} ${styles.navMenu}`}
        >
          <ChartPieSlice />
          Summary
        </li>
        <li
          className={`flex items-center gap-2 cursor cursor-pointer text text-primary size-18  ${styles.navMenu} ${styles.navMenu}`}
        >
          <Tag />
          Sales
        </li>
        <li
          className={`flex items-center gap-2 cursor cursor-pointer text text-primary size-18  ${styles.navMenu} ${styles.navMenu}`}
        >
          <ChatTeardropText />
          Chats
        </li>
      </ul>
    </nav>
  );
}

export default Apptopbar;
