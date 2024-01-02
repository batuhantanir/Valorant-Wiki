import React from "react";
import { useSelector } from "react-redux";
//CSS
import styles from "../Css/HomeCss/HomeComponent.module.css";

const HomeWeapons = () => {
  const { weapons } = useSelector((state) => state.Weapons);
  return (
    <div className={styles.Container}>
      <div className={styles.AgentsList}>
        {weapons.map((weapon) => (
          <a href="/weapons" className={styles.Card}>
            <img
              className={styles.WeaponsImg}
              src={weapon.displayIcon}
              alt="full Portrait Agent"
            />
            <h5>{weapon.displayName}</h5>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeWeapons;
