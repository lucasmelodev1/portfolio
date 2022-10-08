import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../screens/About/About'
import Hero from '../screens/Hero/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Gabriel - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero/>
        <About/>
      </main>
    </div>
  )
}

export default Home
