import React from 'react';
import styles from './CaptionBox.module.sass'
import Image from "next/image";

interface Props {
	text: string
	imagePath: string
}

function CaptionBox(props: Props) {
	return (
		<div className={styles.CaptionBox}>
			<div className={styles.image}>
				<Image src={props.imagePath} alt={props.text} layout={'fill'} objectFit={'contain'}/>
			</div>
			<div className={styles.textDiv}>
				<h6 className={styles.text}>{props.text}</h6>
			</div>
		</div>
	);
}

export default CaptionBox;