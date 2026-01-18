import { useState } from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <button
          className={`${styles.like} ${liked ? styles.liked : ""}`}
          onClick={() => setLiked((v) => !v)}
          aria-label="Добавить в избранное"
          type="button"
        >
          {liked ? "❤" : "♡"}
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.desc}>{props.desc}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
    </article>
  );
}
