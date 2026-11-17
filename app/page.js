import EngineSound from "./engine-sound";
import styles from "./page.module.css";

const FLAG_STRIPS = Array.from({ length: 12 }, (_, index) => index);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.flagScene} aria-hidden="true">
          <div className={styles.pole} />
          <div className={styles.flag}>
            {FLAG_STRIPS.map((strip) => (
              <span key={strip} style={{ "--strip": strip }} />
            ))}
          </div>
        </div>

        <p className={styles.status}>Em preparação</p>
        <h1 className={styles.title}>Meu clone do TabNews</h1>
        <p className={styles.subtitle}>Página em construção.</p>
        <p className={styles.description}>
          Estamos preparando tudo para a largada. Em breve, nos vemos na pista.
        </p>

        <EngineSound />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/saraujos/tabnews-clone-ai-native"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acompanhe o projeto no GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </div>
  );
}
