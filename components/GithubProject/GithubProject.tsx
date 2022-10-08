import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from 'GithubProject.module.sass'
import project1 from "../../public/project1.png"

interface Props {
	projectName: string
}

function GithubProject(props: Props) {
	const [ element, setElement ] = useState(() => <></>)

	useEffect(() => {
		const getElement = async () => {
			const res = await axios.get('https://api.github.com/users/musicianrpr/repos')
			let project: Object;
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].name == props.projectName) {
					project = res.data[i]
				}
			}

			const description = res.data.description

			const res2 = await axios.get('https://api.github.com/repos/musicianrpr/' + props.projectName + '/languages')

			setElement(
				<>
					<div className={styles.githubProject1}>
						<div className={styles.githubProject1Image}>
							<Image src={project1} alt={"project 1 image"} layout={"fill"} objectFit={"contain"}/>
						</div>
						<div className={styles.githubProject1TextContent}>
							<h3 className={styles.githubProject1Title}>GeoTower</h3>
							<p className={styles.githubProject1Description}></p>
						</div>
					</div>
				</>
			)
			
		}
	});


	return (
		{element}
	);
}

export default GithubProject;