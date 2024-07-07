import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://www.github.com/teagucordeiro.png"
          />
          <div className={styles.authorInfo}>
            <strong>Thiago Cordeiro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2024-06-29 22:00:00" title="29 de Junho às 22:06h">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a href="#">
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
