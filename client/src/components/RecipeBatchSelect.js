import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/batchselect.module.css";

function RecipeBatchSelect({ recipe }) {

    const [ batches, setBatches ] = useState(recipe.ingredients);

    function updateBatches(e) {
        const newAmounts = recipe.ingredients.map(i => {
            return {
                name: i.name,
                quantity: parseFloat(i.quantity) * e.target.value,
                units: i.units
            }
        });

        setBatches(newAmounts);
    }

    // adapted from Martin R's answer on StackOverflow
    function getlowestfraction(x0) {
        if (Math.abs(Math.round(x0) - x0) < 1.0E-3)
            return Math.round(x0);
        else if (x0 > 1) {
            const integer = Math.floor(x0);
            const frac = getlowestfraction(x0 - integer);
            return `${integer} ${frac}`;
        }

        var eps = 1.0E-3;
        var x = x0,
            a = Math.floor(x),
            h1 = 1,
            k1 = 0,
            h = a,
            k = 1,
            h2, k2;
    
        while (x-a > eps*k*k) {
            x = 1/(x-a);
            a = Math.floor(x);
            h2 = h1;
            h1 = h;
            k2 = k1;
            k1 = k;
            h = h2 + a*h1;
            k = k2 + a*k1;
        }
    
        return h + "/" + k;
    }

    return (
        <div className={styles.recipe}>
            <h3>{recipe.name}</h3>
            <ul>
                {batches.map((i) => {
                    return (
                        <li key={uuidv4()}>
                            {(i.quantity) ?
                                <>
                                    {(Number.isInteger(parseFloat(i.quantity))) ? i.quantity : getlowestfraction(i.quantity)} {i.units} {i.name}
                                </> :
                                <>
                                    {i.units} {i.name}
                                </>
                            }
                        </li>
                    );
                })}
            </ul>
            {(recipe.optionalIngredients) && (
                <>
                    <hr />
                    <span>Optional</span>
                    <ul>
                        {recipe.optionalIngredients.map(oi => {
                            return <li key={uuidv4()}>{oi.name}</li>
                        })}
                    </ul>
                </>
            )}
            <div className={styles.batchSelect}>
                <p>Batches</p>
                <input type="number" name="batch" onChange={updateBatches} defaultValue={1} />
            </div>
        </div>
    );
}

export default RecipeBatchSelect;
