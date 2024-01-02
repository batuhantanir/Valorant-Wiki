import React from "react";
import Weapon from "../Components/Weapon";
import { useSelector } from "react-redux";
import styles from '../Css/Weapons.module.css'

const Weapons = () => {
  const { weapons } = useSelector((state) => state.Weapons);
  return (
    <div className={styles.Container} >
      {weapons.map((weapon,idx) => (
        <Weapon weapon={weapon} key={idx} />
      ))}
    </div>
  );
};

export default Weapons;
