import React from "react";
import styles from "./Appsidebar.module.scss";
import logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { icons } from "./data";

const StyledNavLink = styled(NavLink)`
  display: inline-flex;

  &:link,
  &:visited {
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--bg-white);
    border-radius: var(--border-radius-md);

    svg {
      path {
        fill: var(--bg-primary);
      }
    }
  }

  &.active {
    svg {
      path {
        fill: var(--bg-primary);
      }
    }
  }
`;

function Appsidebar() {
  return (
    <aside className={styles.layoutSidebar}>
      <div className="flex flex-col gap-7">
        <NavLink to="dashboard">
          <img src={logo} alt="Logo" />
        </NavLink>

        <div className={styles.divider}></div>

        <nav>
          <ul className={`flex flex-col gap-4 w-full ${styles.menuContainer}`}>
            {icons.map((icon) => (
              <li key={icon.name}>
                <StyledNavLink to={icon.link}>
                  <icon.component aria-label={icon.name} />
                </StyledNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Appsidebar;
