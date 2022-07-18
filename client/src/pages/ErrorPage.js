import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/error.module.css";
import globalStyles from "../styles/global.module.css";

function ErrorPage() {

    const theme = useContext(ThemeContext);

    return (
        <div className={`${styles.container} ${globalStyles[theme]}`}>
            {(theme === "dark") ?
                <img src="/assets/painted_pillbug.png" alt="painted pillbug" /> :
                <img src="/assets/pillbug.png" alt="pillbug" />
            }
            <h1>Whoops!</h1>
            <p>The page you're looking for doesn't exist!</p>
        </div>
    );
}

export default ErrorPage;
