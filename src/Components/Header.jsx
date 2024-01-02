import React, { useEffect, useRef, useState } from "react";
import styles from "../Css/Header.module.css";
import logo from "../img/logo192.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPage = useRef(location.pathname.slice(1));
  const [page, setPage] = useState(currentPage.current);
  useEffect(() => {
    if (location.pathname !== "/") {
      currentPage.current = window.location.pathname.slice(1);
    } else {
      currentPage.current = "home";
    }
    setPage(currentPage.current);
  }, [location]);
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <span className={styles.navbarBrand}>
          <img className={styles.navbarImg} src={logo} alt="Logo" />
          <h1 className={styles.navbarText}>Valorant wiki</h1>
        </span>
      </Link>

      <ul className={styles.NavbarList}>
        <li className={styles.NavbarListItem}>
          <Link
            to="agents"
            className={page === "agents" ? styles.activeNav : styles.navLink}
          >
            Agents
          </Link>
        </li>
        <li className={styles.NavbarListItem}>
          <Link
            to="weapons"
            className={page === "weapons" ? styles.activeNav : styles.navLink}
          >
            Weapons
          </Link>
        </li>
        <li className={styles.NavbarListItem}>
          <Link
            to="maps"
            className={page === "maps" ? styles.activeNav : styles.navLink}
          >
            Maps
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
