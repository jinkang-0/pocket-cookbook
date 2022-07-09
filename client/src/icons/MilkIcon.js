import React from "react";
import styles from "../styles/icon.module.css";

function MilkIcon() {
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
                    d="M7.875 28.875H42V57.75H7.875V28.875Z"
                    stroke="#3E2F5B"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.375 49.875V36.75L24.9375 44.625L31.5 36.75V49.875H18.375ZM55.125 26.25L39.375 13.125L55.125 26.25ZM26.25 7.875V15.75L39.375 13.125V5.25L26.25 7.875ZM42 28.875L55.125 26.25V53.8125L42 57.75V28.875ZM25.5701 15.75L7.875 28.875H42L25.5701 15.75Z"
                    stroke="#3E2F5B"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={styles.tooltip}>Milk</span>
        </div>
    );
}

export default MilkIcon;
