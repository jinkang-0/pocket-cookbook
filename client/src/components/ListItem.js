import React from "react";

function ListItem({ id, name, onkeydown, required }) {
    return (
        <li>
            <input id={id} className="listItem" type="text" name={name} onKeyDown={onkeydown} required={required} />
        </li>
    );
}

export default ListItem;
