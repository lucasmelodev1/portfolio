import React from 'react';
import styles from './MinorResumeExperience.module.sass'

interface Props {
	title: string
	description: string
}

function MinorResumeExperience(props: Props) {
	return (
		<div className={styles.MinorResumeExperience}>
			<div className={styles.prefix}>
				•
			</div>
			<div>
				<h4 className={styles.title}>{props.title}</h4>
				<p className={styles.description}>{props.description}</p>
			</div>
		</div>
	);
}

export default MinorResumeExperience;