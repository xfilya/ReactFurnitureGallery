import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Галерея товаров мебели</div>
    </header>
  );
}
