import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import ChecklistField from "../components/ChecklistField";
import ListField from "../components/ListField";
import IngredientField from "../components/IngredientField";
import MultiSelectField from "../components/MultiSelectField";
import TextboxField from "../components/TextboxField";
import styles from "../styles/addrecipe.module.css";

function AddRecipePage() {

    const [form, setForm] = useState({diet: "All", heat: "None"});
    const [error, setError] = useState({name: false});
    const navigate = useNavigate();

    useEffect(() => {
        const cookies = new Cookies();
        if (!cookies.get('verified') || cookies.get('verified') === 'false')
            navigate('/verify');
    }, [navigate]);

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

    function submitForm(e) {
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

        axios
            .post('/db/recipes/add', recipe)
            .then(res => {
                navigate('/recipes');
            })
            .catch(err => {
                console.log("Error:", err);
            });
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
                <TextField label="Estimated Time" onChange={e => {updateForm({ time: e.target.value })}} />
                <TextField label="Yield" onChange={e => {updateForm({ yield: e.target.value })}} />
                <SelectField label="Diet" required={true} options={["All", "Vegetarian", "Vegan"]} onChange={v => {updateForm({ diet: v })}} />
                <SelectField label="Spice Level" required={true} options={["None", "Low", "Medium", "High", "Very High"]} onChange={v => {updateForm({ heat: v })}} />
                <MultiSelectField label="Meal Type" required={true} options={["Breakfast", "Lunch", "Dinner", "Beverage", "Snack", "Dessert", "Sauce/Dip", "Soup", "Pastry", "Bread"]} onChange={v => {updateForm({ tags: v })}} />
                <ChecklistField label="Contains These Allergens" options={["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soy", "Sesame"]} onChange={v => {updateForm({ allergens: v })}} />
                <TextField label="Image URL" required={true} onChange={e => {updateForm({ img: e.target.value })}} />
                <IngredientField label="Ingredients" required={true} onChange={v => {updateForm({ ingredients: v })}} />
                <IngredientField label="Optional Ingredients" onChange={v => {updateForm({ optionalIngredients: v })}} />
                <ListField label="Directions" ordered={true} required={true} onChange={v => {updateForm({ directions: v })}} />
                <ListField label="Prep Directions" onChange={v => {updateForm({ prepDirections: v })}} />
                <TextboxField label="Notes" onChange={e => {updateForm({ note: e.target.value })}} />
                <button onClick={submitForm}>Add</button>
            </form>
        </div>
    );
}

export default AddRecipePage;
