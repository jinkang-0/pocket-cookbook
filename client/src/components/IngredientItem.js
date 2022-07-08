import React from "react";

function IngredientItem({ ingredient, handleClick }) {

    var content = `${ingredient.quantity} ${ingredient.units} ${ingredient.name}`;
    if (!ingredient.units)
        content = (ingredient.quantity) ? `${ingredient.quantity} ${ingredient.name}` : `${ingredient.name}`;

    return (
        <>
            <li id={ingredient.id} onClick={handleClick}>{content}</li>
        </>
    );
}

export default IngredientItem;
