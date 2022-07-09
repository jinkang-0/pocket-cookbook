import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import ChecklistField from "../components/ChecklistField";
import ListField from "../components/ListField";
import IngredientField from "../components/IngredientField";
import MultiSelectField from "../components/MultiSelectField";
import TextboxField from "../components/TextboxField";
import NumberSelectField from "../components/NumberSelectField";
import styles from "../styles/addrecipe.module.css";

/**
 * Errors:
 * 0 - ok
 * 1 - missing name
 * 2 - missing source
 * 3 - missing image
 * 4 - missing tags
 * 5 - missing description
 * 6 - missing ingredients
 * 7 - missing directions
 */

function AddRecipePage() {

    const [form, setForm] = useState({diet: "All", heat: 0});
    const [error, setError] = useState({name: false});
    const navigate = useNavigate();

    function updateForm(value) {
        setForm({...form, ...value});

        const erroneous = Object.values(error).find(v => v);
        if (erroneous)
            checkErrors({...form, ...value});
    }

    function checkErrors(form, sendToTop) {
        var err = {
            name: !form.name,
            source: !form.source,
            img: !form.img,
            tags: !form.tags,
            description: !form.description,
            ingredients: !form.ingredients,
            directions: !form.directions
        };
        
        const erroneous = !Object.values(err).every(v => !v);
        if (erroneous) {
            setError(err);
            if (sendToTop)
                window.scrollTo(0, 0);
            return true;
        }

        return false;
    }

    async function submitForm(e) {
        e.preventDefault();

        if (checkErrors(form, true))
            return;

        const recipe = {
            name: form.name,
            source: form.source,
            img: form.img,
            diet: form.diet,
            allergens: form.allergens,
            heat: form.heat,
            tags: form.tags,
            description: form.description,
            ingredients: form.ingredients,
            optionalIngredients: form.optionalIngredients,
            time: form.time,
            yield: form.yield,
            directions: form.directions,
            prepDirections: form.prepDirections,
            note: form.note
        };

        await fetch("http://localhost:5000/recipes/add", {
            method: "POST",
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/JSON'
            }
        });

        navigate("/");
    }

    return (
        <div className={styles.container}>
            <h1>Add Recipe</h1>
            <form className={styles.form} >
                <div className={styles.errors}>
                    {error.name && (<p>Missing recipe name</p>)}
                    {error.source && (<p>Missing recipe source/author</p>)}
                    {error.img && (<p>Missing image URL</p>)}
                    {error.tags && (<p>Missing meal type</p>)}
                    {error.description && (<p>Missing recipe description</p>)}
                    {error.ingredients && (<p>Missing ingredients</p>)}
                    {error.directions && (<p>Missing directions</p>)}
                </div>
                <TextField label="Recipe Name" required={true} onChange={e => {updateForm({ name: e.target.value })}} />
                <TextField label="Source/Author" required={true} onChange={e => {updateForm({ source: e.target.value })}} />
                <TextboxField label="Description" required={true} onChange={e => {updateForm({ description: e.target.value })}} />
                <NumberSelectField label="Estimated Time" options={["min", "sec", "hr", "day"]} onChange={v => {updateForm({ time: v })}} />
                <NumberSelectField label="Yield" options={["serving", "cup", "tsp", "tbs", "kg", "g", "lb", "oz", "pt", "qt", "gal", "mL", "L"]} onChange={v => {updateForm({ yield: v })}} />
                <SelectField label="Diet" required={true} options={["All", "Vegetarian", "Vegan"]} onChange={v => {updateForm({ diet: v })}} />
                <SelectField label="Spice Level" required={true} options={["None", "Low", "Medium", "High", "Very High"]} onChange={v => {updateForm({ heat: v })}} />
                <MultiSelectField label="Meal Type" required={true} options={["Breakfast", "Lunch", "Dinner", "Beverage", "Snack", "Dessert", "Sauce/Dip", "Soup"]} onChange={v => {updateForm({ tags: v })}} />
                <ChecklistField label="Contains These Allergens" options={["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soy", "Sesame"]} onChange={v => {updateForm({ allergens: v })}} />
                <TextField label="Image URL" required={true} onChange={e => {updateForm({ img: e.target.value })}} />
                <IngredientField label="Ingredients" required={true} onChange={v => {updateForm({ ingredients: v })}} />
                <IngredientField label="Optional Ingredients" onChange={v => {updateForm({ optionalIngredients: v })}} />
                <ListField label="Directions" ordered={true} required={true} onChange={v => {updateForm({ directions: v })}} />
                <ListField label="Prep Directions" ordered={true} onChange={v => {updateForm({ prepDirections: v })}} />
                <TextboxField label="Notes" onChange={e => {updateForm({ note: e.target.value })}} />
                <button onClick={submitForm}>Add</button>
            </form>
        </div>
    );
}

export default AddRecipePage;
