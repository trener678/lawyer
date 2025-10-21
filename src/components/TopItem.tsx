import styles from "./TopItem.module.css";

interface ItemTopProps {
  text: string;
  img: string;
}

export default function TopItem({ text, img }: ItemTopProps) {
  return (
    <div className={styles.item}>
      <img src={img} alt="" className="img" />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
