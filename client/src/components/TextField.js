import React from "react";

function TextField({ label, required }) {

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="text" name={label} id={label} required={required} />
        </div>
    );
}

export default TextField;
