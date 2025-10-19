import { Link } from "react-router-dom";

import styles from "./Btn.module.css";

interface Btnprops {
  text: string;
  padding: string;
  radius: string;
}

export default function Btn({ text, padding, radius }: Btnprops) {
  return (
    <Link
      to={"#"}
      className={styles.link}
      style={{ padding, borderRadius: radius }}
    >
      {text}
    </Link>
  );
}
