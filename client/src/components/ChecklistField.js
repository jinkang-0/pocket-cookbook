import React from "react";
import OptionItem from "./OptionItem";

function ChecklistField({ label, options }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <div>
                {options.map(o => {
                    return <OptionItem key={o} name={o} group={label} type="checkbox" />
                })}
            </div>
        </div>
    );
}

export default ChecklistField;
