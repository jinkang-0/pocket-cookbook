import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientItem from "./IngredientItem";
import styles from "../styles/addrecipe.module.css";

function IngredientField({ label }) {

    const [ ingredients, setIngredients ] = useState([]);
    const componentId = uuidv4();

    function addIngredient(e) {
        e.preventDefault();

        const quantity = document.getElementById(`${componentId}quantity`);
        const units = document.getElementById(`${componentId}units`);
        const name = document.getElementById(`${componentId}name`);
        
        if (!name.value)
            return;

        if (!quantity.value)
            setIngredients([...ingredients, {
                name: name.value,
                quantity: 0,
                units: 'null',
                id: uuidv4()
            }]);
        else if (quantity.value && units.value)
            setIngredients([...ingredients, {
                name: name.value,
                quantity: quantity.value,
                units: units.value,
                id: uuidv4()
            }]);

        // clear values
        name.value = '';
    }

    function removeIngredient(e) {
        const filteredIngredients = ingredients.filter(i => i.id !== e.target.id);
        setIngredients(filteredIngredients);
    }

    return (
        <div className={styles.addIngredient}>
            <label htmlFor={`${componentId}quantity`}>{label}</label>
            {(ingredients.length > 0) && (
                <ul>
                    {ingredients.map(i => {
                        return <IngredientItem key={i.id} ingredient={i} handleClick={removeIngredient} />
                    })}
                </ul>
            )}
            <div>
                <input type="number" id={`${componentId}quantity`} />
                <div className={styles.selectBox}>
                    <select id={`${componentId}units`}>
                        <option value="cup">cup</option>
                        <option value="tsp">tsp</option>
                        <option value="tbs">tbs</option>
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="lb">lb</option>
                        <option value="oz">oz</option>
                        <option value="pint">pint</option>
                        <option value="quart">quart</option>
                        <option value="gallon">gallon</option>
                        <option value="mL">mL</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <input type="text" id={`${componentId}name`} />
            </div>
            <div>
                <button onClick={addIngredient}>Add Item</button>
            </div>
        </div>
    );
}

export default IngredientField;
