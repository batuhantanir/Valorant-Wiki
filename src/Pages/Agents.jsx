import React from "react";
import { useSelector } from "react-redux";
import Agent from "../Components/Agent";
import styles from '../Css/Agents.module.css'

const Agents = () => {
  const { agents } = useSelector((state) => state.Agents);
  return (
    <div className={styles.Container}>
      {agents.map((agent, idx) => (
        <Agent agent={agent} agents={agents} key={idx} />
      ))}
    </div>
  );
};

export default Agents;
