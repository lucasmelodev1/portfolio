import React from 'react';
import styles from './AboutMe.module.sass'
import Image from "next/image";
import TextDivisor from "../TextDivisor/TextDivisor";
import CaptionBox from "../CaptionBox/CaptionBox";

function AboutMe() {
	return (
		<div className={styles.aboutMe}>
			<div className={styles.header}>
				<div className={styles.photo}>
					<Image src={'/about.jpg'} alt={'personal photo'} layout={'fill'} objectFit={'contain'}/>
				</div>
				<div className={styles.infos}>
					<h3 className={styles.title}>Lucas Gabriel de Melo Rodrigues</h3>
					<p className={styles.info}>Location: Brazil, Rio Grande do Norte</p>
					<p className={styles.info}>Gender: Male</p>
					<p className={styles.info}>Graduation: Computer Science</p>
				</div>
			</div>
			<TextDivisor text={'FAVORITE BOOKS'}/>
			<div className={styles.captionBox}>
				<CaptionBox text={'ANNA KARIENINA'} imagePath={'/book1.jpg'}/>
				<CaptionBox text={'1984'} imagePath={'/book2.jpg'}/>
				<CaptionBox text={'PSYCHOLOGY OF CROWDS'} imagePath={'/book3.jpg'}/>
			</div>
			<TextDivisor text={'HOBBIES'}/>
			<div className={styles.captionBox}>
				<CaptionBox text={'PIANO'} imagePath={'/hobby1.jpg'}/>
				<CaptionBox text={'PSYCHOLOGY'} imagePath={'/hobby2.jpg'}/>
				<CaptionBox text={'GAMING'} imagePath={'/hobby3.jpg'}/>
			</div>
		</div>
	);
}

export default AboutMe;