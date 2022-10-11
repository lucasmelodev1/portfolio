import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './ScrollableView.module.sass'
import {AboutContext} from "../../screens/About/About";
import AboutMe from "../AboutMe/AboutMe";
import Github from "../Github/Github";
import Resume from "../Resume/Resume";
import autoAnimate from "@formkit/auto-animate";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from 'gsap'
import AboutNavigator from "../AboutNavigator/AboutNavigator";

function ScrollableView() {
	const { index, setIndex } = useContext(AboutContext)
	const [ loaded, setLoaded ] = useState(() => false)
	const pin = useRef(null)
	const scrollable = useRef(null)

	useEffect(() => {
		if(pin.current) {
			autoAnimate(pin.current)
		}
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context(() => {
			gsap.to(scrollable.current, {
				scrollTrigger: {
					trigger: pin.current,
					toggleActions: "restart pause reverse pause",
					start: 'top top',
					end: () => {
						// @ts-ignore
						return `${scrollable.current.clientHeight}px center`
					},
					markers: true,
					pin: true,
					scrub: true
				},
			})
		}, [pin, scrollable])
		return () => ctx.revert()
		// @ts-ignore
	}, [index, scrollable, pin, loaded]);



	const views = [
		<div key={0} id={`div0`}>
			<AboutContext.Provider value={{index, setIndex}}>
				<Github ready={() => setLoaded(true)} mounted={() => setLoaded(false)}/>
			</AboutContext.Provider>
		</div>,
		<div key={1} id={`div1`}>
			<AboutMe/>
		</div>,
		<div key={2} id={`div2`}>
			<Resume/>
		</div>
	]

	return(
		<div className={styles.ScrollableView}>
			<div className={styles.pin} ref={pin}>
				<AboutNavigator/>
			</div>
			<div className={styles.view} ref={scrollable}>
				{views[index]}
			</div>
		</div>
	);
}

export default ScrollableView;