import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IngredientItem from "./IngredientItem";
import styles from "../styles/addrecipe.module.css";

function IngredientField({ label, required, onChange }) {

    const [ ingredients, setIngredients ] = useState([]);
    const componentId = uuidv4();

    function addIngredient(e) {
        e.preventDefault();

        const quantity = document.getElementById(`${componentId}quantity`);
        const units = document.getElementById(`${componentId}units`);
        const name = document.getElementById(`${componentId}name`);
        const optionalUnits = document.getElementById(`${componentId}optionalUnits`);
        const optionalQuantity = document.getElementById(`${componentId}optionalQuantity`);
        
        if (!name.value)
            return;

        // update ingredients
        const newIngredient = {name: name.value, id: uuidv4()};
        if (quantity.value && units.value)
            newIngredient.units = units.value;
        if (quantity.value)
            newIngredient.quantity = quantity.value;

        if (optionalQuantity.value) {
            newIngredient.optionalQuantity = {quantity: optionalQuantity.value};
            if (optionalUnits.value)
                newIngredient.optionalQuantity.units = optionalUnits.value;
        }

        const newIngredients = [...ingredients, newIngredient];
        setIngredients(newIngredients);

        // update form
        const uploadableIngredients = newIngredients.map(i => {
            const ing = {name: i.name};
            if (i.quantity) {
                if (i.units)
                    ing.units = i.units;
                ing.quantity = i.quantity;
            }
            if (i.optionalQuantity)
                ing.optionalQuantity = i.optionalQuantity;
            return ing;
        });
        onChange(uploadableIngredients);

        // clear values
        name.value = '';
        optionalQuantity.value = '';
        optionalUnits.value = '';
    }

    function removeIngredient(e) {
        const filteredIngredients = ingredients.filter(i => i.id !== e.target.id);
        setIngredients(filteredIngredients);
    }

    const classname = (required) ? styles.required : "";

    return (
        <div className={styles.addIngredient}>
            <label htmlFor={`${componentId}quantity`} className={classname}>{label}</label>
            {(ingredients.length > 0) && (
                <ul>
                    {ingredients.map(i => {
                        return <IngredientItem key={i.id} ingredient={i} handleClick={removeIngredient} />
                    })}
                </ul>
            )}
            <div>
                <input type="number" id={`${componentId}quantity`} placeholder="1" />
                <div className={styles.selectBox}>
                    <select id={`${componentId}units`}>
                        <option value="">  </option>
                        <option value="cup">cup</option>
                        <option value="tsp">tsp</option>
                        <option value="tbs">tbs</option>
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="lb">lb</option>
                        <option value="oz">oz</option>
                        <option value="pt">pint</option>
                        <option value="qt">quart</option>
                        <option value="gal">gallon</option>
                        <option value="mL">mL</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <input type="text" id={`${componentId}name`} onKeyDown={e => {(e.key === 'Enter') && addIngredient(e)}} placeholder="minced garlic"/>
            </div>
            <div>
                <input type="number" id={`${componentId}optionalQuantity`} placeholder="(1)" />
                <div className={styles.selectBox}>
                    <select id={`${componentId}optionalUnits`}>
                        <option value="">  </option>
                        <option value="cup">cup</option>
                        <option value="tsp">tsp</option>
                        <option value="tbs">tbs</option>
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                        <option value="lb">lb</option>
                        <option value="oz">oz</option>
                        <option value="pt">pint</option>
                        <option value="qt">quart</option>
                        <option value="gal">gallon</option>
                        <option value="mL">mL</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <div className={styles.buttons}>
                    <button onClick={addIngredient}>Add Item</button>
                </div>
            </div>
        </div>
    );
}

export default IngredientField;
