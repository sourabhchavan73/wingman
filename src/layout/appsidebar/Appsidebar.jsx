import React from "react";
import styles from "./Appsidebar.module.scss";
import logo from "../../assets/svg/logo.svg";
import { ReactComponent as Sales } from "../../assets/svg/sales.svg";
import { ReactComponent as Chats } from "../../assets/svg/chats.svg";
import { ReactComponent as Home } from "../../assets/svg/home.svg";

function Appsidebar() {
  return (
    <aside className={styles.layoutSidebar}>
      <div className="flex flex-col gap-7">
        <img src={logo} alt="Logo" />

        <div className={styles.divider}></div>

        <nav>
          <ul className={`flex flex-col gap-4 w-full ${styles.menuContainer}`}>
            <li className={styles.active}>
              <Home aria-label="Home" />
            </li>
            <li>
              <Chats aria-label="Chats" />
            </li>
            <li>
              <Sales aria-label="Sales" />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Appsidebar;
