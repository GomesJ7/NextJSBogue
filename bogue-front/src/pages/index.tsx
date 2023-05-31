import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from '../components/header';
import Galerie from '../components/galerie'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogue</title>
        <meta name="Bogue web site"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>BOGUE!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2>Connexion &rarr;</h2>
            <p>Connectez vous afin de pouvoir continuer l'expérience Bogue</p>
          </a>

          <a href="/register" className={styles.card}>
            <h2>Inscription &rarr;</h2>
            <p>Inscrivez vous afin de découvrir Bogue !</p>
          </a>

          <a href="/marineAnimal" className={styles.card}>
            <h2>Création animal &rarr;</h2>
          </a>

          <a href="/location" className={styles.card}>
            <h2>Création localisation &rarr;</h2>
          </a>

          <a href="#Galerie" className={styles.card}>
            <h2>Animaux &rarr;</h2>
            <p>Découvrir le répertoire des animaux marins</p>
          </a>

        </div>
      </main>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#15487A" fill-opacity="1"
        d="M0,160L26.7,160C53.3,160,107,160,160,149.3C213.3,139,267,117,320,122.7C373.3,128,427,160,480,181.3C533.3,203,587,213,640,192C693.3,171,747,117,800,112C853.3,107,907,149,960,170.7C1013.3,192,1067,192,1120,186.7C1173.3,181,1227,171,1280,154.7C1333.3,139,1387,117,1413,106.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
        </path>
        </svg>

      <Galerie />

      <footer className={styles.footer}>
        <a rel="noopener noreferrer">
          By Bogue Team
        </a>
      </footer>
    </div>
  )
}

export default Home
