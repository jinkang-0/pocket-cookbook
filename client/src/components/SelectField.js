import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/addrecipe.module.css";

function SelectField({ label, options, required, onChange }) {

    const [selected, setSelected] = useState(options[0]);

    function handleChange(e) {
        onChange(e.target.value);
        setSelected(e.target.value);
    }

    const classname = (required) ? styles.required : "";
    
    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            <section>
                <select name={label} id={label} onChange={handleChange} value={selected}>
                    {options.map(o => {
                        return <option key={uuidv4()}>{o}</option>
                    })}
                </select>
            </section>
        </div>
    );
}

export default SelectField;
