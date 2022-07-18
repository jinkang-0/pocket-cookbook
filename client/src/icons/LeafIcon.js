import React from "react";
import styles from "../styles/icon.module.css";

function LeafIcon() {
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
                    d="M57.435 5.64374L54.285 6.69374C48.8864 8.56942 43.1215 9.14501 37.4587 8.37374C31.5082 7.45029 25.4176 8.27088 19.9237 10.7362C17.0112 11.9764 14.4552 13.9254 12.4883 16.4057C10.5215 18.8861 9.20627 21.819 8.66246 24.9375C8.10929 27.9364 8.16587 31.0161 8.82884 33.9927C9.49181 36.9692 10.7476 39.7818 12.5212 42.2625C12.3637 42.8137 12.2062 43.365 12.075 43.9162C11.0088 48.4497 10.4802 53.0929 10.5 57.75H15.75C15.9967 53.9381 16.5143 50.1485 17.2987 46.41C20.9407 48.3766 25.025 49.3796 29.1637 49.3237C33.0237 49.3211 36.844 48.5445 40.3987 47.04C60.375 38.5087 57.75 10.1325 57.75 8.95124L57.435 5.64374ZM38.3512 42.21C31.5 45.1237 23.31 44.625 18.7162 41.0287C19.4926 38.4327 20.558 35.932 21.8925 33.5737C22.9299 31.8764 24.1537 30.3004 25.5412 28.875C26.959 27.4344 28.5558 26.1816 30.2925 25.1475C33.881 23.0017 37.8609 21.5918 42 21V18.375C37.2376 18.2101 32.5045 19.1819 28.1925 21.21C23.7836 23.3613 20.0445 26.6738 17.3775 30.7912C16.3883 32.3638 15.5111 34.0041 14.7525 35.7C13.5358 32.5877 13.191 29.2025 13.755 25.9087C14.1245 23.6028 15.0751 21.4288 16.5171 19.5918C17.9592 17.7548 19.8452 16.3153 21.9975 15.4087C25.136 13.9418 28.5606 13.1887 32.025 13.2037C33.6525 13.2037 35.2537 13.3612 36.9337 13.4925C42.1951 14.1713 47.537 13.8597 52.6837 12.5737C52.5 19.8187 51.1875 36.75 38.3512 42.21Z"
                    fill="#3E2F5B"
                />
            </svg>
            <span className={styles.tooltip}>Vegetarian</span>
        </div>
    );
}

export default LeafIcon;
