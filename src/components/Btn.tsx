import { Link } from "react-router-dom";

import styles from "./Btn.module.css";

interface Btnprops {
  text: string;
  padding: string;
  link: string;
}

export default function Btn({ text, padding, link }: Btnprops) {
  return (
    <Link to={link} className={styles.link} style={{ padding }}>
      {text}
    </Link>
  );
}
