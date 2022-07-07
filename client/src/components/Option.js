import React from "react";
import OptionItem from "./OptionItem";

function Option({ group, options, type }) {
    const opts = options.map(opt => {
        const newOpt = { name: opt };
        newOpt.checked = (type === "checkbox");
        return newOpt;
    });

    if (type === "radio")
        opts[0].checked = true;

    return (
        <div>
            <h3>{group}</h3>
            {opts.map(opt => {
                return <OptionItem key={opt.name} group={group} name={opt.name} type={type} checked={opt.checked} />
            })}
        </div>
    );
}

export default Option;
