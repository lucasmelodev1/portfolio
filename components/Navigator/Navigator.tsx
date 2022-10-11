import React, {MutableRefObject, Ref, useContext, useEffect} from 'react'
import styles from './Navigator.module.sass'
import {RefContext} from "../../pages";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { gsap } from 'gsap'

export default function Navigator() {
  const { refs } = useContext(RefContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  }, [])

  const scrollTo = (ref: MutableRefObject<any>) => {
    gsap.to(
      // @ts-ignore
      window, {
        duration: 1,
        // @ts-ignore
        scrollTo: ref.current,
        ease: 'power1.easeOut'
      }
    )
  }

  return (
    <div className={styles.Navigator}>
      <div className={styles.element} onClick={() => {
        // @ts-ignore
        scrollTo(refs.about)
      }}>WORK</div>
      <div className={styles.divisor}/>
      <div className={styles.element} onClick={() => {
        // @ts-ignore
        scrollTo(refs.contact)
      }}>CONTACT</div>
    </div>
  )
}
