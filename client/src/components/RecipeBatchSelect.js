import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/batchselect.module.css";

function RecipeBatchSelect({ recipe }) {

    const [ batches, setBatches ] = useState(recipe.ingredients);

    function updateBatches(e) {
        const newAmounts = recipe.ingredients.map(i => {
            return {
                name: i.name,
                amount: i.amount * e.target.value
            }
        });

        setBatches(newAmounts);
    }

    return (
        <div className={styles.recipe}>
            <h3>{recipe.name}</h3>
            <ul>
                {batches.map(i => {
                    return <li key={uuidv4()}>{i.amount} {i.name}</li>
                })}
            </ul>
            {(recipe.optionalIngredients) && (
                <>
                    <hr />
                    <span>Optional</span>
                    <ul>
                        {recipe.optionalIngredients.map(oi => {
                            return <li key={uuidv4()}>{oi}</li>
                        })}
                    </ul>
                </>
            )}
            <p>Batches</p>
            <input type="number" name="batch" onChange={updateBatches} defaultValue={1} />
        </div>
    );
}

export default RecipeBatchSelect;
