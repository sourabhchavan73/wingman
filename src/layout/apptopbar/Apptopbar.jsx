import React from "react";
import styles from "./Apptopbar.module.scss";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { icons } from "./data";

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 12px;
  gap: 10px;

  &:link,
  &:visited {
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background: var(--bg-light);
    padding: 12px;
    border-radius: 1200px;
    color: var(--color-primary);
  }

  &.active {
    svg {
      path {
        fill: var(--bg-primary);
      }
    }
  }
`;

function Apptopbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className="flex gap-5">
        {icons.map((icon) => (
          <li
            key={icon.label}
            className={`flex items-center gap-2 cursor cursor-pointer text text-primary  ${styles.navMenu}`}
          >
            <StyledNavLink to={icon.link}>
              <icon.component aria-label={icon.label} />
              {icon.label}
            </StyledNavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Apptopbar;
