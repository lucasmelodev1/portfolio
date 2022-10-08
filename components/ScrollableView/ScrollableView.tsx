import React, {useContext, useEffect, useState} from 'react';
import styles from './ScrollableView.module.sass'
import {AboutContext} from "../../screens/About/About";
import Image from "next/image";
import axios from 'axios'
import TextDivisor from "../TextDivisor/TextDivisor";

function ScrollableView() {
	const { index, setIndex } = useContext(AboutContext)
	const [ githubView, setGithubView ] = useState(() => <p>loading</p>)

	useEffect(() => {
		const setView = async () => {
			const res = await axios.get('https://api.github.com/users/musicianrpr')
			const name = res.data.login
			const bio = res.data.bio

			setGithubView(
				<>
					<div className={styles.githubProfile}>
						<div className={styles.githubImage}>
							<Image src={res.data.avatar_url} alt={"avatar"} layout={"fill"} objectFit={"contain"}/>
						</div>
						<div className={styles.githubTextContent}>
							<h4 className={styles.githubTitle}>{name}</h4>
							<p className={styles.githubBio}>{bio}</p>
						</div>
					</div>
					<TextDivisor text={"FAVORITE PROJECTS"}/>

				</>
			)
		}
		setView()
	})

	const views = [
		<>
			{githubView}
		</>,
		<div key={1} className={styles.aboutMe}>
			<p>1</p>
		</div>,
		<div key={2} className={styles.resume}>
			<p>2</p>
		</div>
	]

	return (
		<div className={styles.ScrollableView}>
			{views[index]}
		</div>
	);
}

export default ScrollableView;