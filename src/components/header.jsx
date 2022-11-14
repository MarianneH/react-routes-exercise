import styles from "./header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? { color: "yellow" } : null;
  };
  return (
    <header className={styles.header}>
      <i> site logo </i>
      <nav className={styles.nav}>
        <NavLink style={handleActiveLink} to="/">
          Home
        </NavLink>
        <NavLink style={handleActiveLink} to="/dogs">
          Dogs
        </NavLink>
        <NavLink style={handleActiveLink} to="/cats">
          Cats
        </NavLink>
      </nav>
    </header>
  );
}
