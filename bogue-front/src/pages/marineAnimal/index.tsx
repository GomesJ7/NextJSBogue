import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Header from '../../components/header';
import Create_Animal from '../../components/createAnimal';

const CreateAnimal: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogue</title>
        <meta name="Bogue web site"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Create_Animal/>
      </main>

      <footer className={styles.footer}>
        <a rel="noopener noreferrer">
          By Bogue Team
        </a>
      </footer>
    </div>
  )
}

export default CreateAnimal
