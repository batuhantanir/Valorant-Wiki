import React from "react";
import { useSelector } from "react-redux";
//CSS
import styles from "../Css/HomeCss/HomeComponent.module.css";

const HomeMaps = () => {
  const { maps } = useSelector((state) => state.Maps);
  return (
    <div className={styles.Container}>
      <div className={styles.AgentsList}>
        {maps.map((map) =>
          map.displayIcon !== null ? (
            <a href="/maps" className={styles.Card}>
              <img
                className={styles.MapsImg}
                src={map.displayIcon}
                alt="full Portrait Agent"
              />
              <h5>{map.displayName}</h5>
            </a>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default HomeMaps;
