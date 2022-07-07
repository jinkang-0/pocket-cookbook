import React from "react";

function IngredientItem({ ingredient, handleClick }) {
    return (
        <>
            {(ingredient.units === "null") ?
                <li id={ingredient.id} onClick={handleClick}>{ingredient.name}</li> :
                <li id={ingredient.id} onClick={handleClick}>{ingredient.quantity} {ingredient.units} {ingredient.name} </li>
            }
        </>
    );
}

export default IngredientItem;
