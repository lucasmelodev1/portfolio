import React from 'react'
import styles from './Navigator.module.sass'

export default function Navigator() {
  return (
    <div className={styles.Navigator}>
      <div className={styles.element}>WORK</div>
      <div className={styles.divisor}/>
      <div className={styles.element}>INFO</div>
    </div>
  )
}
