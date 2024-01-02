import React from "react";
import { useSelector } from "react-redux";
//COMPONENTS
import Map from "../Components/Map";
//CSS
import styles from "../Css/Maps.module.css";

const Maps = () => {
  const { maps } = useSelector((state) => state.Maps);
  return (
    <div className={styles.Container}>
      {maps.map((map, idx) => (
        <Map map={map} key={idx} />
      ))}
    </div>
  );
};

export default Maps;
