import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

const products = [
  { id: 1, title: "Современный стул", desc: "Элегантный дизайнерский стул", price: "12 990 ₽" },
  { id: 2, title: "Деревянный стол", desc: "Массив дерева, ручная работа", price: "34 990 ₽" },
  { id: 3, title: "Диван-софа", desc: "Комфортный диван для гостиной", price: "89 990 ₽" },
  { id: 4, title: "Шкаф-комод", desc: "Просторное хранилище", price: "45 990 ₽" },
  { id: 5, title: "Кровать двуспальная", desc: "Уютная кровать для спальни", price: "67 990 ₽" },
  { id: 6, title: "Книжная полка", desc: "Стильный стеллаж для книг", price: "23 990 ₽" },
];

export default function App() {
  return (
    <div className={styles.page}>
      <Header/>

      <main className={styles.main}>
        <CardList items={products} />
      </main>

      <Footer/>
    </div>
  );
}
