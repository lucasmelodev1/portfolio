import React, {useEffect, useState} from 'react'
import AboutNavigator from '../../components/AboutNavigator/AboutNavigator'
import styles from './About.module.sass'
import ScrollableView from "../../components/ScrollableView/ScrollableView";

export const AboutContext = React.createContext({
    index: 0,
    setIndex: (index: number) => {}
})

export default function About() {
  const [index, setIndex] = useState(() => 0)
  const value = { index, setIndex }

  return (
    <div className={styles.About}>
      <h2 className={styles.title}>A bit about me</h2>
      <AboutContext.Provider value={value}>
        <ScrollableView/>
      </AboutContext.Provider>
    </div>
  )
}
