import React from "react";
import styles from "../styles/error.module.css";

function ErrorPage() {
    return (
        <div className={styles.container}>
            <img src="/assets/pillbug.png" alt="pillbug" />
            <h1>Whoops!</h1>
            <p>The page you're looking for doesn't exist!</p>
        </div>
    );
}

export default ErrorPage;
