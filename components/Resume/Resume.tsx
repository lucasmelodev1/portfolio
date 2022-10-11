import React from 'react';
import styles from './Resume.module.sass'
import TextDivisor from "../TextDivisor/TextDivisor";
import ResumeExperience from "../ResumeExperience/ResumeExperience";
import MinorResumeExperience from "../MinorResumeExperience/MinorResumeExperience";

function Resume() {
	return (
		<>
			<div className={styles.Resume}>
				<h3 className={styles.title}>Front-end Developer</h3>
				<h4 className={styles.subtitle}>Back-end Developer</h4>
				<h4 className={styles.subtitle}>Mobile Developer</h4>
				<div className={styles.contacts}>
					<h6 className={styles.contact}>Email: lucasgabrielmelorodrigues@gmail.com</h6>
					<h6 className={styles.contact}>Phone: +55 84 999144328</h6>
				</div>
				<div className={styles.links}>
					<h6 className={styles.link}><a href={'https://github.com/musicianrpr'} target={'_blank'} rel="noreferrer">github.com/musicianrpr</a></h6>
					<h6 className={styles.link}><a href={'https://linkedin.com/in/lucasgabrielmelorodrigues'} target={'_blank'} rel="noreferrer">linkedin.com/in/lucasgabrielmelorodrigues</a></h6>
				</div>
				<TextDivisor text={'WORK EXPERIENCE'}/>
				<div className={styles.experience}>
					<ResumeExperience title={'Software Developer'} place={'Alphatec Serviços e Comércio LTDA'} period={'2022 - 5 months'} description={'Worked as fullstack developer in the retail market. My decisions leaded the company to a good product design and plan. I was responsible to build all the project architecture (Cloud + DBaaS), design and platforms'} specialization={['React.js', 'Next.js', 'Typescript', 'Node.js', 'Azure', 'SASS', 'Flutter', 'Kotlin']}/>
				</div>
				<TextDivisor text={'EDUCATION'}/>
				<div className={styles.experience}>
					<ResumeExperience title={'Computer Science'} place={'Universidade Federal Rural do Semi-árido'} period={'2022 - now'} description={'Student with one of the best grades of the class, specially in math related subjects.'} specialization={['Algorithms', 'Data Structures', 'Linear Algebra', 'Calculus']}/>
				</div>
				<TextDivisor text={'COURSES'}/>
				<div className={styles.minorExperiences}>
					<MinorResumeExperience title={'The Complete Node.js Developer Course'} description={'Udemy'}/>
					<MinorResumeExperience title={'The Complete SQL Bootcamp 2022: Go from Zero to Hero'} description={'Udemy'}/>
					<MinorResumeExperience title={'Fundamentals of Database Engineering'} description={'Udemy'}/>
				</div>
				<TextDivisor text={'LANGUAGES'}/>
				<div className={styles.minorExperiences}>
					<MinorResumeExperience title={'Portuguese'} description={'Fluent - Native'}/>
					<MinorResumeExperience title={'English'} description={'Conversational/Professional level'}/>
				</div>
			</div>
		</>
	);
}

export default Resume;