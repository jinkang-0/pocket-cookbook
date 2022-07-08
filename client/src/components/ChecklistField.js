import React, { useState } from "react";
import OptionItem from "./OptionItem";
import styles from "../styles/addrecipe.module.css";

function ChecklistField({ label, required, options, onChange }) {

    const [selected, setSelected] = useState([]);

    function handleChange(e) {
        const opt = e.target.value;
        const newSelected = (selected.includes(opt)) ? selected.filter(s => s !== opt) : [...selected, opt];
        onChange(newSelected);
        setSelected(newSelected);
    }

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            <div>
                {options.map(o => {
                    return <OptionItem key={o} name={o} group={label} type="checkbox" onChange={handleChange} />
                })}
            </div>
        </div>
    );
}

export default ChecklistField;
