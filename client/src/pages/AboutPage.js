import React from "react";
import styles from '../styles/about.module.css';

function AboutPage() {
    return (
        <>
            <header className={styles.intro}>
                <h1>Recipes, made convenient</h1>
                <p>
                    With the use of filters, search, and customization, finding and managing recipes becomes a whole lot easier. View public recipes, or run it locally to manage your personal recipes and make life easier.
                </p>
            </header>

            <section className={styles.profile}>
                <div className={styles.imgContainer}>
                    <img src="assets/profile.jpg" alt="profile" />
                </div>
                <h3>Jinkang Fang</h3>
                <span>
                    I made this website as a passion project to help me sort through the numerous recipes I will inevitably pile up in the future.
                    It started off as a design on Figma, then transformed into this using a MERN stack when my free time got out of hand over the summer.
                </span>
            </section>
        </>
    );
}

export default AboutPage;
