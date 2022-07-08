import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/addrecipe.module.css";

function NumberSelectField({ label, required, options, onChange }) {

    const [ selected, setSelected ] = useState(options[0]);
    const componentId = uuidv4();

    function handleChange(e) {
        const number = document.getElementById(`${componentId}number`).value;
        const unit = document.getElementById(`${componentId}unit`).value;
        onChange(`${number} ${unit}`);

        if (e.target.id === `${componentId}unit`)
            setSelected(unit);
    }

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            <div className={styles.numberselect}>
                <input type="number" name={label} id={`${componentId}number`} onChange={handleChange} />
                <div>
                    <select name={label} id={`${componentId}unit`} onChange={handleChange} value={selected}>
                        {options.map(o => {
                            return <option key={uuidv4()} value={o}>{o}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default NumberSelectField;
