import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ListItem from './ListItem'
import styles from "../styles/addrecipe.module.css";

function ListField({ label, required, ordered, onChange }) {

    const [ items, setItems ] = useState([{id: uuidv4()}]);
    const focusIndex = useRef(0);

    useEffect(() => {
        if (items.length > 1)
            document.getElementById(items[focusIndex.current].id).focus();
    }, [items]);

    function handleKeyDown(e) {
        if (e.key === 'Backspace' && e.target.value === "") {
            e.preventDefault();
            
            // filter out the current focus item
            const filteredItems = (items.length > 1) ? items.filter(i => i.id !== e.target.id) : [items[0]];

            // update focus
            const indexOfFocus = items.findIndex(i => i.id === e.target.id);
            focusIndex.current = Math.max(0, indexOfFocus - 1);

            if (focusIndex.current === 0)
                document.getElementById(items[0].id).focus();

            // remove item
            setItems(filteredItems);
        } else if (e.key === 'Enter') {
            e.preventDefault();

            // update focus
            focusIndex.current += 1;

            // insert new item
            setItems([...items, {id: uuidv4()}]);
        }
    }

    function handleChange(e) {
        // persist focus
        focusIndex.current = items.findIndex(i => i.id === e.target.id);

        // update states
        const text = e.target.value;
        const newItems = items.map(i => {
            if (i.id === e.target.id)
                i.text = text;
            return i;
        });
        setItems(newItems);

        // update form value
        const itemTexts = items.filter(i => i.text).map(i => i.text);
        onChange(itemTexts);
    }

    const listContent = (
        <>
            {items.map(i => {
                return <ListItem id={i.id} key={i.id} onkeydown={handleKeyDown} onChange={handleChange} />
            })}
        </>
    )

    const classname = (required) ? styles.required : "";

    return (
        <div>
            <label htmlFor={label} className={classname}>{label}</label>
            {(ordered)?
                <ol>{listContent}</ol> :
                <ul>{listContent}</ul>
            }
        </div>
    );
}

export default ListField;
