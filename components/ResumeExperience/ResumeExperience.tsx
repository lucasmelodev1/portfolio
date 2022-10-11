import React from 'react';
import styles from './ResumeExperience.module.sass'
import SecondaryDivisor from "../SecondaryDivisor/SecondaryDivisor";

interface Props {
	title: string
	place: string
	period: string
	description: string
	specialization: string[]
}

function ResumeExperience(props: Props) {
	let elements = props.specialization.map((value) => <>
		<div className={styles.element}>
			<h6 className={styles.text}>{value}</h6>
		</div>
	</>)

	return (
		<div className={styles.WorkExperience}>
			<div className={styles.section1}>
				<h3 className={styles.title}>{props.title}</h3>
				<h4 className={styles.company}>{props.place}</h4>
				<h4 className={styles.period}>{props.period}</h4>
				<p className={styles.description}>{props.description}</p>
			</div>
			<SecondaryDivisor text={'SPECIALIZATION'}/>
			<div className={styles.section2}>
				{elements}
			</div>
		</div>
	);
}

export default ResumeExperience;