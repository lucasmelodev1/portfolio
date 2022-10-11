import React, {useEffect, useRef} from 'react'
import Navigator from '../../components/Navigator/Navigator'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import TextPlugin from 'gsap/dist/TextPlugin';
import styles from './Hero.module.sass'
import { gsap } from 'gsap'

export default function Hero() {
  const cursor = useRef(null)
  const text = useRef(null)
  const words = ['A Developer.', 'A Good Teammate.', 'Your next co-worker.']

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    gsap.to(
      cursor.current, 1, {
        opacity: 0,
        ease: 'back.inOut',
        repeat: -1
      }
    )
    let masterTl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    })

    words.forEach(word => {
      let tl = gsap.timeline({
        repeat: 1,
        repeatDelay: .5,
        yoyo: true
      })
      tl.to(
        text.current, {
          duration: 2,
          text: word,
          delay: .5
        },
      )
      masterTl.add(tl)
    })
  }, [text, cursor, words])

  return (
    <div className={styles.Hero}>
      <Navigator/>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Lucas Gabriel</h1>
        <div>
          <h2 className={styles.subtitle} ref={text}></h2>
          <span className={styles.span} ref={cursor}>_</span>
        </div>
      </div>
      <PrimaryButton text='HIRE ME'/>
    </div>
  )
}
