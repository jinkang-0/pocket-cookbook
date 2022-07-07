import React from "react";
import styles from '../styles/about.module.css';

function AboutPage() {
    return (
        <>
            <header className={styles.intro}>
                <h1>Alias nisi, saepe illo.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod repellendus accusantium ad rem! Rem dicta blanditiis soluta nam quisquam corporis, numquam quae officia facilis similique deleniti voluptas reiciendis alias.
                </p>
            </header>

            <section className={styles.profile}>
                <img src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg" alt="profile" />
                <h3>Autem modi</h3>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi officiis totam qui iusto molestiae porro temporibus quae quia. Nesciunt expedita temporibus harum quidem, laudantium facilis eum nemo incidunt nam laboriosam! Ullam placeat voluptatum praesentium ducimus. Itaque vel quidem odit provident, a nihil dignissimos tempore blanditiis, numquam aperiam voluptas amet?
                </span>
            </section>
        </>
    );
}

export default AboutPage;
