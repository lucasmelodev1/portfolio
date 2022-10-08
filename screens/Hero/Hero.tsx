import React from 'react'
import Navigator from '../../components/Navigator/Navigator'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import styles from './Hero.module.sass'

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <Navigator/>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Lucas Gabriel</h1>
        <h2 className={styles.subtitle}>Front-end Developer</h2>
      </div>
      <PrimaryButton text='HIRE ME'/>
    </div>
  )
}
