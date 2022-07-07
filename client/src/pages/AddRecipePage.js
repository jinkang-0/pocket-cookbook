import React from "react";
import styles from "../styles/addrecipe.module.css";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import ChecklistField from "../components/ChecklistField";
import ListField from "../components/ListField";
import IngredientField from "../components/IngredientField";

function AddRecipePage() {
    return (
        <div className={styles.container}>
            <h1>Add Recipe</h1>
            <form className={styles.form} action="">
                <TextField label="Recipe Name" required={true} />
                <TextField label="Source/Author" required={true} />
                <TextField label="Description" required={true} />
                <TextField label="Estimated Time" required={true} />
                <TextField label="Yield" required={true} />
                <SelectField label="Diet" options={["All", "Vegetarian", "Vegan"]} required={true} />
                <SelectField label="Heat" options={["Any", "Low", "Medium", "High"]} required={true} />
                <ChecklistField label="Allergens" options={["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soybeans", "Sesame"]}/>
                <TextField label="Image URL" required={true} />
                <IngredientField label="Ingredients" required={true} />
                <IngredientField label="Optional Ingredients" />
                <ListField label="Prep Instructions" ordered={true} />
                <ListField label="Instructions" ordered={true} required={true} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddRecipePage;
