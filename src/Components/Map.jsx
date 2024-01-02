import React from "react";
//CSS
import styles from "../Css/Maps.module.css";

const Map = ({ map }) => {
  return (
    <div className={styles.Card}>
      <h3 className={styles.MapTitle}>{map.displayName}</h3>
      <p className={styles.coordinates}>Coordinat : {map.coordinates}</p>
      <div className={styles.ImgContainer}>
      <img className={styles.splash} src={map.splash} alt="map.splash" />
      {map.displayIcon ? <img className={styles.displayIcon} src={map.displayIcon} alt="" /> : ""}
      
      </div>
    </div>
  );
};

export default Map;
