import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from './GithubProject.module.sass'
import Image from "next/image";
import SecondaryDivisor from "../SecondaryDivisor/SecondaryDivisor";

interface Props {
	projectName: string
	imagePath: string
}

function GithubProject(props: Props) {
	const [ element, setElement ] = useState(() => <div></div>)

	// @ts-ignore
	const myLoader = ({ src, width, quality }) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`
	}

	useEffect(() => {
		const getElement = async () => {
			const res = await axios.get('https://api.github.com/users/musicianrpr/repos')
			let project
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].name == props.projectName) {
					project = res.data[i]
				}
			}

			const description = project.description

			const res2 = await axios.get('https://api.github.com/repos/musicianrpr/' + props.projectName + '/languages')
			let languages: string[] = Object.keys(res2.data)
			let lines: number[] = Object.values(res2.data)
			let totalLines = 0
			for (let i = 0; i < lines.length; i++) {
				totalLines += lines[i]
			}
			const linesPercentage: number[] = lines.map((value, _) => ((value / totalLines) * 100))

			let languageElement = []
			for(let i = 0; i < lines.length; i++) {
				if (i < 3) {
					languageElement.push(
						<>
							<div className={styles.languageElement}>
								<div className={styles.languagePercentageBar} style={{
									width: `calc(100% - ${100 - linesPercentage[i]}%)`
								}}/>
								<div className={styles.percentage}/>
								<h5 className={styles.language}>{languages[i] + ': '}</h5>
								<h6 className={styles.lines}>{linesPercentage[i].toFixed(0) + '%'}</h6>
							</div>
						</>
					)
				}

			}

			setElement(
				<>
					<div className={styles.githubProject}>
						<div className={styles.section1}>
							<div className={styles.image}>
								<Image src={props.imagePath} alt={"project image"} layout={"fill"} objectFit={"contain"}/>
							</div>
							<div className={styles.textContent}>
								<h3 className={styles.title}>{props.projectName}</h3>
								<p className={styles.description}>{description}</p>
							</div>
						</div>
						<div className={styles.section2}>
							<div className={styles.languages}>
								<SecondaryDivisor text={'LANGUAGES'}/>
								{languageElement}
							</div>
						</div>
					</div>
				</>
			)
		}
		getElement()
	});


	return (
		<>
			{element}
		</>
	);
}

export default GithubProject;