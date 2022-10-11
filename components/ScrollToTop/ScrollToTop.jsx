import {useEffect, useState} from "react";
import styles from './ScrollToTop.module.sass'
import Image from "next/image";
import React from 'react';
import autoAnimate from "@formkit/auto-animate";

function ScrollButton() {
	const [visible, setVisible] = useState(false)

	const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 350){
				setVisible(true)
			}
			else if (scrolled <= 350){
				setVisible(false)
			}
		};


		window.addEventListener('scroll', toggleVisible);
	})


	return (
		<div className={styles.ScrollToTop} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
			<div className={styles.image}>
				<Image src={'/arrow_up.svg'} alt={'arrow up'} layout={'fill'} objectFit={'contain'}/>
			</div>
		</div>
	);
}

export default ScrollButton;