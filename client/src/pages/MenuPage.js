import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import SunSolidIcon from "../icons/SunSolidIcon";
import MoonSolidIcon from "../icons/MoonSolidIcon";
import styles from "../styles/menu.module.css";
import globalStyles from "../styles/global.module.css";

function MenuPage({ switchTheme }) {

    const theme = useContext(ThemeContext);

    return (
        <div className={`${styles.container} ${styles[theme]} ${globalStyles[theme]}`}>
            <button onClick={switchTheme} className={`${styles.themeIcon} ${globalStyles[theme]}`}>
                {(theme === "dark") ?
                    <SunSolidIcon /> :
                    <MoonSolidIcon />
                }
            </button>
            <div className={styles.menu}>
                <h1 className={styles.title}>Pocket Cookbook</h1>

                <div className={styles.options}>
                    <Link
                        to="/planning"
                        className={styles.option}
                        id="planning"
                    >
                        <p className={styles.optionLink}>Planning</p>
                        <div></div>
                    </Link>
                    <Link to="/recipes" className={styles.option} id="recipes">
                        <p className={styles.optionLink}>Recipes</p>
                        <div></div>
                    </Link>
                    <Link to="/about" className={styles.option} id="about">
                        <p className={styles.optionLink}>About</p>
                        <div></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
