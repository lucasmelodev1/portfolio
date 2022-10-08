import React from 'react';
import styles from './TextDivisor.module.sass'

interface Props {
	text: string
}

function TextDivisor(props: Props) {
	return (
		<div className={styles.TextDivisor}>
			{props.text}
		</div>
	);
}

export default TextDivisor;