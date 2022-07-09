import React from "react";
import styles from "../styles/icon.module.css";

function TreeIcon() {
    return (
        <div className={styles.iconBox}>
            <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M31.5 6.89062L14.7656 28.5469H24.6094L10.8281 44.2969H26.5781V56.1094H36.4219V44.2969H52.1719L38.3906 28.5469H48.2344L31.5 6.89062Z"
                    stroke="#3E2F5B"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={styles.tooltip}>Vegan</span>
        </div>
    );
}

export default TreeIcon;
