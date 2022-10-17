import styles from './About.module.sass'
import {useEffect, useRef} from "react";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { gsap } from 'gsap'

export default function About() {
  const about = useRef(null)
  const beforeTimeline = useRef(gsap.timeline())
  const timeline = useRef(gsap.timeline())

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to(
        "#about-cursor", {
          opacity: 0,
          ease: 'back.inOut',
          duration: 1,
          repeat: -1
        }
      )

      gsap.to(
        "#about-title", {
          scrollTrigger: {
            trigger: about.current,
            start: 'top center'
          },
          text: 'What I do.',
          duration: 1.6
        }
      )

      gsap.from(
        "#about-image", {
          scrollTrigger: {
            trigger: about.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1
          },
          x: 200
        }
      )

      gsap.from(
        "#about-text", {
          scrollTrigger: {
            trigger: about.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          opacity: 0
        },
      )

      const tl = gsap.timeline({paused: true})
      timeline.current = tl

      tl.to(
        "#about-text", {
          text: '',
          duration: 1
        }
      )

      tl.to(
        "#about-image", {
          scale: 1,
          rotation: 0,
          duration: .5,
        }, 0
      )

      tl.to(
        "#about-image", {
          clipPath: 'circle(100%)',
          duration: .5
        }, 0
      )

      tl.to(
        "#about-image", {
          height: '100%',
          margin: 0,
          right: 0
        }, 0
      )
      tl.to(
        "#about-image", {
          width: '100%',
          duration: 1
        }, 0
      )
      const yoyoBigTl = gsap.timeline({repeat: -1})

      yoyoBigTl.to(
        "#about-image", {
          scale: 1.1,
          duration: 50,
          yoyo: true,
          repeat: 1
        }
      )

      tl.to(
        "#about-image2", {
          backgroundColor: '#101010',
          scale: .8,
          duration: .5
        }
      )

      const textTl = gsap.timeline()
      tl.add(textTl)

      textTl.to(
        "#about-title", {
          text: '',
          duration: 1
        }, 0
      )

      textTl.to(
        "#about-image-title", {
          text: 'Tarantula Nebula',
          duration: 1
        }, 0
      )

      textTl.to(
        "#about-image-subtitle", {
          text: 'James Webb',
          duration: 1
        }
      )

      textTl.to(
        "#about-title", {
          text: 'Who I am.',
          duration: 1
        }
      )

      textTl.to(
        "#about-text", {
          text: "I am a curious person who is always in contact with both new technologies " +
            "and the classic ways of breaking down the problems. When it comes to master a " +
            "subject, I am the right person to this task. If the job is in my hands, it is " +
            "done, and done with outstanding quality. Besides, I LOVE teaching, it is one of " +
            "my greatest passions and certainly it helped me through my career as a developer.",
          color: "#FFFFFF",
          textShadow: '2px 2px rgba(0,0,0, 0.5)',
          duration: 1.5
        }, "<"
      )

      const yoyoTl = gsap.timeline({repeat: -1})

      yoyoTl.to(
        "#about-image", {
          scale: 1.1,
          rotate: '5deg',
          duration: 20,
          yoyo: true,
          repeat: 1
        }
      )

      beforeTimeline.current.add(yoyoTl)
    })

    return () => ctx.revert()
  }, [about])

  return (
    <div className={styles.About} ref={about}>
      <div className={styles.content}>
        <div className={styles.titleDiv}>
          <h2 className={styles.title} id="about-title"></h2>
          <span className={styles.title} id="about-cursor">_</span>
        </div>
        <div className={styles.text} id="about-text">
          From design to deployment, I make reliable, fast and beautiful websites for
            clients worldwide. I am a analytical person who contributes with good in-depth
            investigation about the product needs in a team. Because I work independently,
            I have experience in using different technologies as the job requires. Among
            the technologies I use in my daily work, there are:
            Figma, Flutter, React.js, Node.js, Typescript and Javascript, Docker, and a
            lot more. If you want to build a well-made websites or apps, count on me.
        </div>
      </div>
      <div className={styles.image} id="about-image"/>
      <div className={styles.image + ' ' + styles.innerImage} id="about-image2" onMouseOver={() => {
        beforeTimeline.current.pause()
        timeline.current.play()
      }} onMouseOut={() => {
        if (timeline.current.totalProgress() > .6) {
          timeline.current.reverse(1).then(() => {
            if(timeline.current.totalProgress() <= 0) {
              beforeTimeline.current.play()
            }
          })
        }
        timeline.current.reverse().then(() => {
          if(timeline.current.totalProgress() <= 0) {
            beforeTimeline.current.play()
          }
        })
      }}>
        <h3 className={styles.imageTitle} id="about-image-title"></h3>
        <h4 className={styles.imageSubtitle} id="about-image-subtitle"></h4>
      </div>
    </div>
  )
}
