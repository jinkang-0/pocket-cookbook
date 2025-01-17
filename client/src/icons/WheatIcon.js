import React from "react";
import styles from "../styles/icon.module.css";

function WheatIcon() {
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
                    d="M41.3438 5.90625V10.9974L33.4688 18.8724V1.96875H29.5312V18.8724L21.6562 10.9974V5.90625H17.7188V37.4062C17.7243 40.7169 18.9207 43.9151 21.0896 46.4165C23.2584 48.9179 26.2548 50.5554 29.5312 51.03V59.0625H33.4688V51.03C36.7452 50.5554 39.7416 48.9179 41.9104 46.4165C44.0793 43.9151 45.2757 40.7169 45.2812 37.4062V5.90625H41.3438ZM29.5312 47.0512C27.3095 46.5946 25.3131 45.386 23.8786 43.6291C22.4441 41.8722 21.6592 39.6744 21.6562 37.4062V32.3151L29.5312 40.1901V47.0512ZM29.5312 34.6224L21.6562 26.7474V16.5651L29.5312 24.4401V34.6224ZM33.4688 24.4401L41.3438 16.5651V26.7474L33.4688 34.6224V24.4401ZM33.4688 47.0512V40.1901L41.3438 32.3151V37.4062C41.3408 39.6744 40.5559 41.8722 39.1214 43.6291C37.6869 45.386 35.6905 46.5946 33.4688 47.0512Z"
                    fill="#3E2F5B"
                />
            </svg>
            <span className={styles.tooltip}>Wheat</span>
        </div>
    );
}

export default WheatIcon;
