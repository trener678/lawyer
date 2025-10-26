import styles from "./Interaction.module.css";

interface Interactionprops {
  img: string;
  text: string;
}

export default function Interaction({ img, text }: Interactionprops) {
  return (
    <div className={styles.interaction}>
      <img src={img} alt="" className="img" />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
