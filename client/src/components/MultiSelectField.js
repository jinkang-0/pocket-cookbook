import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MultiSelectItem from "./MultiSelectItem";
import styles from "../styles/addrecipe.module.css";

function MultiSelectField({ label, required, options, onChange }) {

    const [selected, setSelected] = useState([]);

    function handleButtonClick(e) {
        e.preventDefault();

        // update data
        const opt = e.target.value;
        const newSelected = (selected.includes(opt)) ? selected.filter(s => s !== opt) : [...selected, opt];
        onChange(newSelected);
        setSelected(newSelected);
    }

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label className={classname}>{label}</label>
            <input type="hidden" name={label} value={selected} />
            <div className={styles.multiselect}>
                {options.map(o => {
                    return <MultiSelectItem selected={selected.includes(o)} key={uuidv4()} onClick={handleButtonClick} option={o} />
                })}
            </div>
        </div>
    );
}

export default MultiSelectField;
