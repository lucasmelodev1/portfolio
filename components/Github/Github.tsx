import React, {useContext, useEffect, useState} from 'react';
import styles from './Github.module.sass'
import axios from "axios";
import Image from 'next/image'
import TextDivisor from "../TextDivisor/TextDivisor";
import GithubProject from "../GithubProject/GithubProject";
import {AboutContext} from "../../screens/About/About";

interface githubType {
	login?: string
	avatar_url?: string
	bio?: string
}

interface Props {
	mounted?: Function
	ready?: Function
}

function Github(props: Props) {
	const [ data, setData ] = useState((): githubType => { return {} })
	const { index, setIndex } = useContext(AboutContext)

	useEffect(() => {
		if (index == 0) {
			if (props.mounted != null) {
				props.mounted()
			}
			const setGithubView = async () => {
				const res = await axios.get('https://api.github.com/users/musicianrpr')
				setData(res.data)
				if (props.ready != null) {
					props.ready()
				}
			}
			setGithubView()
		}
	}, [index, props])

	return (
		<div id='profile'>
			{/*{view}*/}
			<div className={styles.profile}>
				<div className={styles.image}>
					<Image src={data.avatar_url ?? ''} alt={"avatar"} layout={"fill"} objectFit={"contain"}/>
				</div>
				<div className={styles.textContent}>
					<h4 className={styles.title}>{data.login}</h4>
					<p className={styles.bio}>{data.bio}</p>
				</div>
			</div>
			<TextDivisor text={"FAVORITE PROJECTS"}/>
			<div className={styles.projects}>
				<GithubProject projectName={"GeoTower"} imagePath={'/project1.jpg'}/>
				<GithubProject projectName={"covid-rn-frontend"} imagePath={'/project2.jpg'}/>
			</div>
		</div>
	);
}

export default Github;