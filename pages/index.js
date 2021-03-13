import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from 'react-bootstrap/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HopLiteJS</title>
        <link rel="icon" href="/favicon.ico" />



        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/oslabs-beta/hoplitejs">HopLite.js!</a> <img
        src="/hopLiteLogo.png"
        alt="Picture of the author"
        width={70}
        height={70}
      />
        </h1>

        <p className={styles.description}>
          An Easy To Use Authentican and Authorization Library- {' '}
          <code className={styles.code}><a href="https://github.com/oslabs-beta/hoplitejs">HopLite.js!</a></code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/oslabs-beta/hoplitejs/blob/main/README.md" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about HopLiteJs features</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about HopLite.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy integratable boilerplates into projects with HopLite.js helper functions</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contact Us &rarr;</h3>
            <p>
              Contact the team for technical support, questions, and suggested improvements.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
         
        >
          Created And Designed By:
          Reuben Kirsh, Maxwell Reed, Ted Min, Karin Illesova
          
        </a>
      </footer>
    </div>
  )
}
