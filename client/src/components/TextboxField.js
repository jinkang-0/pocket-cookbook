import React from "react";
import styles from "../styles/addrecipe.module.css";

function TextboxField({ label, required, onChange }) {

    // by Martin Prestone on StackOverflow
    function adjustSize(e) {
        e.target.style.height = "";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            <textarea name={label} id={label} onChange={onChange} onInput={adjustSize}></textarea>
        </div>
    );
}

export default TextboxField;
