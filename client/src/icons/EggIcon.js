import React from "react";
import styles from "../styles/icon.module.css";

function EggIcon() {
    return (
        <div className={`${styles.iconBox} ${styles.fill}`}>
            <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M31.5 52.5C35.6772 52.5 39.6832 50.8406 42.6369 47.8869C45.5906 44.9332 47.25 40.9272 47.25 36.75C47.25 25.6699 38.2778 10.5 31.5 10.5C24.7222 10.5 15.75 25.6699 15.75 36.75C15.75 40.9272 17.4094 44.9332 20.3631 47.8869C23.3168 50.8406 27.3228 52.5 31.5 52.5ZM31.5 57.75C25.9305 57.75 20.589 55.5375 16.6508 51.5992C12.7125 47.661 10.5 42.3195 10.5 36.75C10.5 25.1528 19.9027 5.25 31.5 5.25C43.0973 5.25 52.5 25.1528 52.5 36.75C52.5 42.3195 50.2875 47.661 46.3492 51.5992C42.411 55.5375 37.0695 57.75 31.5 57.75Z"
                    fill="#3E2F5B"
                />
            </svg>
            <span className={styles.tooltip}>Egg</span>
        </div>
    );
}

export default EggIcon;
