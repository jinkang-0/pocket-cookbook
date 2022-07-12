import React from "react";

function IngredientItem({ ingredient, handleClick }) {

    var content = ingredient.name;
    var optionalContent = "";
    
    if (ingredient.quantity) {
        if (ingredient.optionalQuantity) {
            optionalContent = (ingredient.optionalQuantity.units) ? `(${ingredient.optionalQuantity.quantity} ${ingredient.optionalQuantity.units})` : `(${ingredient.optionalQuantity.quantity})`;
            content = (ingredient.units) ? `${ingredient.quantity} ${ingredient.units} ${optionalContent} ${ingredient.name}` : `${ingredient.quantity} ${optionalContent} ${ingredient.name}`;
        } else
            content = (ingredient.units) ? `${ingredient.quantity} ${ingredient.units} ${ingredient.name}` : `${ingredient.quantity} ${ingredient.name}`;
    }

    return (
        <>
            <li id={ingredient.id} onClick={handleClick}>{content}</li>
        </>
    );
}

export default IngredientItem;
