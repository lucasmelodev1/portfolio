import styles from './About.module.sass'

export default function About() {

  return (
    <div className={styles.About}>
      <div className={styles.titleDiv}>
        <h2 className={styles.title}>What I do</h2>
        <div className={styles.decoration} id="about-title-decoration"/>
      </div>
      <div className={styles.text}>
        <p></p>
      </div>
        {/*<ScrollableView/>*/}
    </div>
  )
}
