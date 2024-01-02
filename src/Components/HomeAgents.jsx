import React from "react";
import { useSelector } from "react-redux";
//CSS
import styles from "../Css/HomeCss/HomeComponent.module.css";

const HomeAgents = () => {
  const { agents } = useSelector((state) => state.Agents);

  return (
    <div className={styles.Container}>
      <div className={styles.AgentsList}>
        {agents.map((agent) => (
          <a href="/agents" className={styles.Card}>
            <img
              className={styles.fullPortrait}
              src={agent.fullPortrait}
              alt="full Portrait Agent"
            />
            <h5>{agent.displayName}</h5>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeAgents;
