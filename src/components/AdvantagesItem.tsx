import { Link } from "react-router-dom";
import styles from "./AdvantagesItem.module.css";

import link__img from "../images/advantages-link.svg";

interface AdvantagesItemProps {
  text: string;
  link: string;
  img: string;
  text__link: string;
}

export default function AdvantagesItem({
  img,
  text,
  link,
  text__link,
}: AdvantagesItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.item__container}>
        <img src={img} alt="" className="img" />
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.item__link}>
        <Link to={link} className={styles.link}>
          {text__link}
        </Link>
        <img src={link__img} alt="" className="link__img" />
      </div>
    </div>
  );
}
