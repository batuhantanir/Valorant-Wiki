import React from "react";
//LOGO
import logo from "../img/logo192.png";
//COMPONENT
import HomeAgents from "../Components/HomeAgents";
import HomeWeapons from "../Components/HomeWeapons";
import HomeMaps from "../Components/HomeMaps";
//CSS
import styles from "../Css/HomeCss/Home.module.css";

const Home = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src={logo} alt="valorant wiki logo" />
      <h2 className={styles.WikiTitle}>Welcome to the VALORANT Wiki</h2>
      <span className={styles.WikiDescription}>
        The wiki resource for Riot Games' competitive 5v5 character-based
        tactical shooter, VALORANT, that was released on June 2nd, 2020. Set in
        a near-future Earth, you team up with 4 other players against 5 enemies
        in round-based combat with an agent of your choice. Creativity is your
        greatest weapon.
      </span>
      <h3 className={styles.ContainerTitle}>
        <a href="/agents">Agents</a>
      </h3>
      <HomeAgents />
      <h3 className={styles.ContainerTitle}>
        <a href="/weapons">Weapons</a>
      </h3>
      <HomeWeapons />
      <h3 className={styles.ContainerTitle}>
        <a href="/maps">Maps</a>
      </h3>
      <HomeMaps />
    </div>
  );
};

export default Home;
