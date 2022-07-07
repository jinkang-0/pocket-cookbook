import React from "react";
import { v4 as uuidv4 } from "uuid";

function SelectField({ label, options, required }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <section>
                <select name={label} id={label} required={required}>
                    {options.map(o => {
                        return <option key={uuidv4()}>{o}</option>
                    })}
                </select>
            </section>
        </div>
    );
}

export default SelectField;
