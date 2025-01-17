import React from "react";
import styles from "../styles/icon.module.css";

function ShellfishIcon() {
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
                    d="M27.0677 14.4375H51.1875C51.1875 14.4375 51.1875 21 47.25 24.9375C43.3125 28.875 39.375 30.1875 38.0625 30.1875C36.75 30.1875 24.2812 31.5 21 34.125C17.7187 36.75 15.7513 41.3438 21 45.9375C26.2487 50.5313 35.4375 52.5 42 49.875C48.5625 47.25 52.5 39.375 52.5 39.375L57.75 52.5C57.75 52.5 47.25 56.4375 38.0625 57.75C28.875 59.0625 19.6875 57.75 11.8125 49.875C3.93748 42 2.62367 32.1563 9.18748 23.625C14.6554 16.5165 22.8559 14.8759 25.4389 14.5255C25.9792 14.4595 26.5234 14.4301 27.0677 14.4375V14.4375Z"
                    stroke="#3E2F5B"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.stroke}
                />
                <path
                    d="M34.125 30.1875L26.25 14.4375"
                    stroke="#3E2F5B"
                    strokeWidth="5.25"
                    className={styles.stroke}
                />
                <path
                    d="M23.625 5.25H42C44.4367 5.25 46.7736 6.21797 48.4965 7.94096C50.2195 9.66395 51.1875 12.0008 51.1875 14.4375V14.4375"
                    stroke="#3E2F5B"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.stroke}
                />
                <path
                    d="M39.375 23.625C40.8247 23.625 42 22.4497 42 21C42 19.5503 40.8247 18.375 39.375 18.375C37.9253 18.375 36.75 19.5503 36.75 21C36.75 22.4497 37.9253 23.625 39.375 23.625Z"
                    fill="#3E2F5B"
                    className={styles.fill}
                />
            </svg>
            <span className={styles.tooltip}>Shellfish</span>
        </div>
    );
}

export default ShellfishIcon;
