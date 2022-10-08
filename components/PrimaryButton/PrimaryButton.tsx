import React from 'react'
import styles from './PrimaryButton.module.sass'

interface Props {
  text: string
}

export default function PrimaryButton(props: Props) {
  return (
    <div className={styles.PrimaryButton}>
      <h5 className={styles.text}>
        {props.text}
      </h5>
    </div>
  )
}
