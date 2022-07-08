import React from "react";
import styles from "../styles/addrecipe.module.css";

function TextField({ label, required, onChange }) {

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            <input type="text" name={label} id={label} onChange={onChange} />
        </div>
    );
}

export default TextField;
