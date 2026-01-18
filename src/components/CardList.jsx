import styles from "./CardList.module.css";
import Card from "./Card.jsx";

export default function CardList(props) {
  return (
    <section className={styles.grid}>
      {props.items.map((p) => (
        <Card key={p.id} title={p.title} desc={p.desc} price={p.price} />
      ))}
    </section>
  );
}
