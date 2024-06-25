import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
          author="Thiago Cordeiro"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas, illo officia laudantium cum earum, impedit, aspernatur in sequi atque vel provident vitae tempore eius delectus optio iste consequuntur iusto?"
        />
        <Post author="Elon Musk" content="Conteúdo legal" />
        </main>
      </div>
    </div>
  );
}
