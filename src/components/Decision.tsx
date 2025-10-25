import styles from "./Decision.module.css";

import img from "../images/decision.svg";

interface DecisionProps {
  text: string;
}

export default function Decision({ text }: DecisionProps) {
  return (
    <div className={styles.decision}>
      <img src={img} alt="" />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
