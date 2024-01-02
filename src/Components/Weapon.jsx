import React from "react";
import styles from "../Css/Weapons.module.css";

const Weapon = ({ weapon }) => {
  return (
    <div>
      <div className={styles.Card}>
        <img
          className={styles.Img}
          src={weapon.displayIcon}
          alt={weapon.displayName}
        />
        <h3 className={styles.Title}>{weapon.displayName}</h3>
        <h4 className={styles.DetailsTitle}>Stats</h4>
        <table className={styles.DetailsTable}>
          <tr className={styles.Details}>
            <td>Category : </td>
            {weapon.shopData !== null ? (
              <td> {weapon.shopData.category}</td>
            ) : (
              <td>Null</td>
            )}
          </tr>
          <tr className={styles.Details}>
            <td>Fire rate : </td>
            {weapon.shopData !== null ? (
              <td> {weapon.weaponStats.fireRate}</td>
            ) : (
              <td>Null</td>
            )}
          </tr>
          <tr className={styles.Details}>
            <td>Magazine size : </td>
            {weapon.shopData !== null ? (
              <td> {weapon.weaponStats.magazineSize}</td>
            ) : (
              <td>Null</td>
            )}
          </tr>
          <tr className={styles.Details}>
            <td>Reload time : </td>
            {weapon.shopData !== null ? (
              <td> {weapon.weaponStats.reloadTimeSeconds + "sn"}</td>
            ) : (
              <td>Null</td>
            )}
          </tr>
          <tr className={styles.Details}>
            <td>Cost : </td>
            {weapon.shopData !== null ? (
              <td>
                {" "}
                {weapon.shopData.cost === 0 ? "free" : weapon.shopData.cost}
              </td>
            ) : (
              <td>Free</td>
            )}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Weapon;
