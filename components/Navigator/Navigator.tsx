import React, {useContext, useEffect, useRef} from 'react'
import styles from './Navigator.module.sass'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { gsap } from 'gsap'
import {NavigatorIds} from "../../pages";

export default function Navigator() {
  const navigator = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      for (let i = 0; i < 3; i++) {
        gsap.from(
          `#element${i+1}`, {
            x: 300,
          }
        )

        gsap.to(
          `#element${i+1}`, {
            x: 0,
            duration: .6,
          }
        )
      }

      return () => ctx.revert()
    })
  }, [navigator]);


  const onMouseOver = (index: number) => {
    gsap.to(
      `#box${index}`, {
        width: '100%',
      }
    )
    gsap.to(
      `#element${index}`, {
        color: '#FFFFFF'
      }
    )
  }

  const onMouseOut = (index: number) => {
    gsap.to(
      `#box${index}`, {
        width: '0',
      }
    )
    gsap.to(
      `#element${index}`, {
        color: '#3B3B3B'
      }
    )
  }

  const scrollTo = (id: string) => {
    gsap.to(
      // @ts-ignore
      window, {
        duration: 1,
        // @ts-ignore
        scrollTo: `#${id}`,
        ease: 'power1.easeOut'
      }
    )
  }

  return (
    <div className={styles.Navigator} ref={navigator}>
      <div className={styles.element}
        id="element1"
        onMouseOver={() => onMouseOver(1)}
        onMouseOut={() => onMouseOut(1)}
        onClick={() => {
          scrollTo(NavigatorIds.about)
        }
      }>
        ABOUT
        <div className={styles.box} id="box1"/>
      </div>
      <div className={styles.element}
        id="element2"
        onMouseOver={() => onMouseOver(2)}
        onMouseOut={() => onMouseOut(2)}
        onClick={() => {
          scrollTo(NavigatorIds.work)
        }
      }>
        WORK
        <div className={styles.box} id="box2"/>
      </div>
      <div className={styles.element + ' ' + styles.contact}
        id="element3"
        onMouseOver={() => onMouseOver(3)}
        onMouseOut={() => onMouseOut(3)}
        onClick={() => {
          scrollTo(NavigatorIds.contact)
        }
      }>
        CONTACT
        <div className={styles.box} id="box3"/>
      </div>
    </div>
  )
}
