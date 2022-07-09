import React from "react";
import styles from "../styles/icon.module.css";

function SesameIcon() {
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
                    d="M45.15 13.125C46.725 13.125 48.3 13.125 49.6125 13.3875C50.1375 19.425 50.1375 31.5 43.05 39.9C37.8 46.4625 28.875 49.875 16.8 49.875H13.3875C12.8625 37.8 15.225 28.35 20.7375 22.3125C27.3 14.7 37.8 13.125 45.15 13.125ZM45.15 7.875C30.7125 7.875 4.2 13.3875 8.4 54.6C11.2875 54.8625 14.175 55.125 16.8 55.125C63.7875 55.125 54.3375 8.6625 54.3375 8.6625C54.3375 8.6625 50.6625 7.875 45.15 7.875ZM44.625 18.375C18.375 18.375 18.375 44.625 18.375 44.625C28.875 23.625 44.625 18.375 44.625 18.375Z"
                    fill="#3E2F5B"
                />
            </svg>
            <span className={styles.tooltip}>Sesame</span>
        </div>
    );
}

export default SesameIcon;
