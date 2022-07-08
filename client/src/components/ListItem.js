import React from "react";

function ListItem({ id, onkeydown, onChange }) {

    // by Martin Prestone on StackOverflow
    function adjustSize(e) {
        e.target.style.height = "";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    return (
        <li>
            <textarea id={id} onChange={onChange} onKeyDown={onkeydown} onInput={adjustSize} spellCheck={false} />
        </li>
    );
}

export default ListItem;
