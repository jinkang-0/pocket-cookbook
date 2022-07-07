import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/global.module.css";
import ChefHatIcon from "../icons/ChefHatIcon";

function Navbar() {
    const location = useLocation();

    if (location.pathname === "/") return null;

    return (
        <nav>
            <Link className={styles.home} to="/">
                <ChefHatIcon />
            </Link>
            {(location.pathname.startsWith("/planning")) ?
                <Link className={styles.selected} to="#">Planning</Link> :
                <Link to="/planning">Planning</Link>
            }
            {(location.pathname.startsWith("/recipes")) ?
                <Link className={styles.selected} to="#">Recipes</Link> :
                <Link to="/recipes">Recipes</Link>
            }
            {(location.pathname.startsWith("/about")) ?
                <Link className={styles.selected} to="#">About</Link> :
                <Link to="/about">About</Link>
            }
        </nav>
    );
}

export default Navbar;
