import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ChefHatIcon from "../icons/ChefHatIcon";
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/global.module.css";

function Navbar() {

    const location = useLocation();
    const theme = useContext(ThemeContext);

    if (location.pathname === "/") return null;
    
    return (
        <nav className={styles[theme]}>
            <Link className={styles.home} to="/">
                <ChefHatIcon />
            </Link>
            {(location.pathname.startsWith("/planning")) ?
                <Link className={styles.selected} to="/planning">Planning</Link> :
                <Link to="/planning">Planning</Link>
            }
            {(location.pathname.startsWith("/recipes")) ?
                <Link className={styles.selected} to="/recipes">Recipes</Link> :
                <Link to="/recipes">Recipes</Link>
            }
            {(location.pathname.startsWith("/about")) ?
                <Link className={styles.selected} to="/about">About</Link> :
                <Link to="/about">About</Link>
            }
        </nav>
    );
}

export default Navbar;
