import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Almohanna | Creative Developer</title>
        <meta name="description" content="Sam Almohanna - A creative web developer who is passionate about designing functional accessable digital products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sam
        </h1>
        <h2>Almohanna</h2>
      </main>
    </div>
  )
}

export default Home
