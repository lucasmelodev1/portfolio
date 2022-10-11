import React, {useContext, useEffect, useRef} from 'react'
import styles from './AboutNavigator.module.sass'
import {AboutContext} from "../../screens/About/About";
import {Properties} from "csstype";
import autoAnimate from "@formkit/auto-animate";

export default function AboutNavigator() {
  const { index, setIndex } = useContext(AboutContext)
  const ref = useRef(null)

  useEffect(() => {
    if(ref.current) {
      autoAnimate(ref.current)
    }
  }, [ref]);


  const getElementStyle = (itemIndex: number): Properties => {
    const selected: boolean = itemIndex == index
    return {
      fontWeight: selected ? 600 : 400,
      borderBottom: selected ? "2px solid white" : undefined,
      transitionDuration: '0.1s',
    }
  }

  // @ts-ignore
  return (
    <div className={styles.AboutNavigator} ref={ref}>
      <div className={styles.element} onClick={() => {setIndex(0)}} style={getElementStyle(0)}>GITHUB</div>
      <div className={styles.divisor}/>
      <div className={styles.element} onClick={() => {setIndex(1)}} style={getElementStyle(1)}>ABOUT ME</div>
      <div className={styles.divisor}/>
      <div className={styles.element} onClick={() => {setIndex(2)}} style={getElementStyle(2)}>RESUME</div>
    </div>
  )
}
