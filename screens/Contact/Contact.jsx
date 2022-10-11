import React from 'react';
import styles from './Contact.module.sass'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

function Contact() {
	return (
		<div className={styles.Contact}>
			<h2 className={styles.title}>Reach Me</h2>
			<div className={styles.contacts}>
				<div className={styles.sendEmail}>
					<h4 className={styles.sendEmailTitle}>Send me and email</h4>
					<input className={styles.subject} type={"text"} placeholder={"Subject"}/>
					<textarea className={styles.content}  rows={12} placeholder={"Content"}></textarea>
					<PrimaryButton text={'SEND EMAIL'} cols={'4'}/>
				</div>
			</div>
		</div>
	);
}

export default Contact;