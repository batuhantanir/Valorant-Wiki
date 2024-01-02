import React, { useEffect } from "react";
import styles from "../Css/Agents.module.css";

const Agent = ({ agent }) => {
  return (
    <div>
      <div
        id={agent.uuid}
        className={`${styles.Card} card`}
        style={{ backgroundImage: `url(${agent.background})` }}
      >
        <img className={styles.agentImg} src={agent.displayIcon} alt="" />
        <h2 className={styles.AgentName}>{agent.displayName}</h2>
        <h3 className={styles.roleTitle}>-Role-</h3>
        <p className={styles.roleDescription}>
          <img
            className={styles.roleIcon}
            src={agent.role.displayIcon}
            alt="Role İcon"
          />
          {agent.role.displayName}
        </p>
        <h3 className={styles.abilitieTitle}>- Abilities -</h3>
        <ul className={styles.abilitiesUl}>
          {agent.abilities.map((abilitie, idx) =>
            abilitie.displayIcon ? (
              <li key={idx} className={styles.abilitieName}>
                <img
                  className={styles.abilitieIcon}
                  src={abilitie.displayIcon}
                  alt=""
                />
                {abilitie.displayName}
              </li>
            ) : (
              <li key={idx}></li>
            )
          )}
        </ul>
        <div className={styles.description}>{agent.description}</div>
      </div>
    </div>
  );
};

export default Agent;
