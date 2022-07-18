import React from "react";
import styles from "../styles/icon.module.css";

function SearchIcon() {
    return (
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="17.815"
                cy="17.815"
                r="15.315"
                stroke="#3E2F5B"
                strokeWidth="5"
                className={styles.stroke}
            />
            <rect
                width="5.5288"
                height="27.0088"
                rx="2.7644"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 30.902 26.9925)"
                fill="#3E2F5B"
                className={styles.fill}
            />
        </svg>
    );
}

export default SearchIcon;
