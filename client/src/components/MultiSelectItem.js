import React from "react";
import CheckIcon from "../icons/CheckIcon";
import styles from "../styles/addrecipe.module.css";

function MultiSelectItem({ selected, onClick, option }) {

    const classname = (selected) ? styles.selected : "";

    return (
        <button className={classname} onClick={onClick} value={option}>
            {option}
            {(selected) && <CheckIcon />}
        </button>
    );
}

export default MultiSelectItem;
