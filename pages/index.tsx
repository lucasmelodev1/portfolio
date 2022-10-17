import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../screens/About/About'
import Hero from '../screens/Hero/Hero'
import Contact from '../screens/Contact/Contact'
import styles from '../styles/Home.module.sass'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import {useEffect} from "react";
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export class NavigatorIds {
  static about = 'about'
  static work = 'work'
  static contact = 'contact'
}

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Gabriel - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Hero/>
        <div className={styles.maxWidth} id={NavigatorIds.about}>
          <About/>
        </div>
        <div className={styles.maxWidth} id={NavigatorIds.work}>

        </div>
        <div className={styles.maxWidth} id={NavigatorIds.contact}>
          <Contact/>
        </div>
        <ScrollToTop/>
      </main>
    </div>
  )
}

export default Home
