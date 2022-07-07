import React from "react";

function CheckIcon({ className }) {
    return (
        <svg
            className={className}
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 17.1875L15.125 21.3125L22 13.0625"
                stroke="#4E9ECB"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.5 30.25C24.0939 30.25 30.25 24.0939 30.25 16.5C30.25 8.90608 24.0939 2.75 16.5 2.75C8.90608 2.75 2.75 8.90608 2.75 16.5C2.75 24.0939 8.90608 30.25 16.5 30.25Z"
                stroke="#4E9ECB"
                strokeWidth="4"
            />
        </svg>
    );
}

export default CheckIcon;
