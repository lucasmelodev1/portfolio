import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../screens/About/About'
import Hero from '../screens/Hero/Hero'
import Contact from '../screens/Contact/Contact'
import styles from '../styles/Home.module.sass'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import {createContext, MutableRefObject, useRef} from "react";

class IndexRef {
  about?: MutableRefObject<any>
  contact?: MutableRefObject<any>
  constructor(about?: MutableRefObject<any>, contact?: MutableRefObject<any>) {
    this.about = about
    this.contact = contact
  }
}

export const RefContext = createContext({
  refs: new IndexRef(),
})

const Home: NextPage = () => {
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const refs = new IndexRef(aboutRef, contactRef)
  const value = { refs }

  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Gabriel - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <RefContext.Provider value={value}>
          <Hero/>
        </RefContext.Provider>
        <div className={styles.maxWidth} ref={aboutRef}>
          <About/>
        </div>
        <div className={styles.maxWidth} ref={contactRef}>
          <Contact/>
        </div>
        <ScrollToTop/>
      </main>
    </div>
  )
}

export default Home
