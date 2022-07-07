import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItem from './ListItem'

function ListField({ label, required, ordered }) {

    const [ items, setItems ] = useState([]);
    const initialItemId = uuidv4();

    useEffect(() => {
        if (items.length > 0)
            document.getElementById(items[items.length-1]).focus();
    }, [items])

    function handleKeyDown(e) {
        if (e.key === 'Backspace' && e.target.value === "") {
            e.preventDefault();
            
            // filter out the current focus item
            const filteredItems = items.filter(i => i !== e.target.id);

            // focus on initial item if all other items are removed
            document.getElementById(initialItemId).focus();

            // update
            setItems(filteredItems);
        } else if (e.key === 'Enter') {
            e.preventDefault();

            // insert new item
            setItems([...items, uuidv4()]);
        }
    }

    const listContent = (
        <>
            <ListItem id={initialItemId} name={label} onkeydown={handleKeyDown} required={required} />
            {items.map(i => {
                return <ListItem id={i} key={i} name={label} onkeydown={handleKeyDown} />
            })}
        </>
    )

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            {(ordered)?
                <ol>{listContent}</ol> :
                <ul>{listContent}</ul>
            }
        </div>
    );
}

export default ListField;
