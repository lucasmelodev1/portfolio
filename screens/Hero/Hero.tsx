import React, {useEffect, useRef, useState} from 'react'
import Navigator from '../../components/Navigator/Navigator'
import TextPlugin from 'gsap/dist/TextPlugin';
import styles from './Hero.module.sass'
import { gsap, Power0 } from 'gsap'

export default function Hero() {
  const hero = useRef(null)
  const timeline = useRef(gsap.timeline())
  const words = ['A Developer.', 'A Leader.', 'Lucas Gabriel.']

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({paused: true})
      timeline.current = tl

      tl.to(
        "#hero-background", {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          height: '100%',
          duration: .6
        }
      )
      tl.to(
        "#hero-background", {
          duration: 1,
          width: '100%',
          right: 0
        }
      )
      tl.to(
        "#hero-navigator", {
          x: document.getElementById("hero-navigator")?.clientWidth,
          duration: .6
        }, "<+=10%"
      )
      tl.to(
        "#hero-description", {
          text: '',
          duration: .6
        }, "<+=10%"
      )
      tl.to(
        "#hero-background2", {
          backgroundColor: '#101010',
          duration: .2
        }
      )
      tl.to(
        "#background2-text", {
          text: 'Cosmic Cliffs',
          duration: 1
        }
      )
      tl.to(
        "#hero-description", {
          color: '#FFFFFF',
          fontWeight: 400,
        }
      )
      tl.to(
        "#hero-description", {
          text: "My passion is to study about mathematics, physics, psychology, music and software development. I am a very talkative person when in a deep discussion and around people I treasure.",
          duration: 3
        }, "<+=10%"
      )
      tl.to(
        "#background2-text2", {
          text: 'By James Webb',
          duration: 1
        }, "<+=10%"
      )
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    gsap.to(
      ".cursor", 1, {
        opacity: 0,
        ease: 'back.inOut',
        repeat: -1
      }
    )
  }, [hero])

  useEffect(() => {
    let masterTl = gsap.timeline({
    })

    words.forEach((word, index) => {
      const condition = index + 1 == words.length
      let tl = gsap.timeline({
        repeat: condition ? 0 : 1,
        repeatDelay: .5,
        yoyo: condition ? false : true
      })
      tl.to(
        "#hero-text", {
          duration: 2,
          text: word,
          delay: .5
        },
      )
      masterTl.add(tl)
    })
  }, [hero, words])

  useEffect(() => {
    const tl = gsap.timeline({repeat: -1})
    tl.to(
      "#hero-background", {
        backgroundPositionX: `calc(-11520px)`,
        ease: Power0.easeNone,
        duration: 300
      }
    )
  }, [hero]);


  return (
    <div className={styles.Hero} ref={hero}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Hi, {"I'm"}</h1>
        <div className={styles.subtitleDiv}>
          <span className={styles.subtitle} id="hero-text"></span>
          <span className={styles.subtitle + ' ' + "cursor"}>_</span>
        </div>
        <p className={styles.description} id="hero-description">
          I am a developer with years of experience building websites from design to deploy. Living in Brazil, I work remotely to national and international companies to make their goals come true.
        </p>
      </div>
      <div className={styles.background} id="hero-background" />
      <div className={styles.background2} id="hero-background2" onMouseOver={() => {
        timeline.current.play()
      }} onMouseOut={() => {
        if(timeline.current.totalProgress() > .95) {
          timeline.current.reverse(2)
        } else {
          timeline.current.reverse()
        }
      }}>
        <h3 className={styles.text} id="background2-text"></h3>
        <h4 className={styles.text2} id="background2-text2"></h4>
      </div>
      <div className={styles.navigatorDiv} id="hero-navigator">
        <Navigator/>
      </div>
    </div>
  )
}
