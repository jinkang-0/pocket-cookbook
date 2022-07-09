import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/planning.module.css";
import Option from "../components/Option";
import SearchBar from '../components/SearchBar.js';
import SelectableRecipe from '../components/SelectableRecipe.js';

const options = [
    {
        group: "Meal",
        options: ["Breakfast", "Lunch", "Dinner", "Beverage", "Dessert", "Snack"],
        type: "checkbox"
    },
    {
        group: "Allergens",
        options: ["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soy", "Sesame"],
        type: "checkbox"
    },
    {
        group: "Heat",
        options: ["Any", "Low", "Medium", "High"],
        type: "radio"
    },
    {
        group: "Diet",
        options: ["All", "Vegetarian", "Vegan"],
        type: "radio"
    }
];

function PlanningPage() {

    const [selected, setSelected] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:5000/recipes');
            const data = await res.json();
            setRecipes(data);
        }

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {(selected.length > 0) && (
                <div className={styles.banner}>
                    <p>When you're ready, click the Ready button on the right to continue.</p>
                    <Link to="/planning/batch">Ready</Link>
                </div>
            )}
            <h1>Select Your Course</h1>
            <div className={styles.options}>
                {options.map(opt => {
                    return <Option key={opt.group} group={opt.group} options={opt.options} type={opt.type} />
                })}
            </div>
            <div className={styles.filter}>
                <SearchBar />
                <button>Search</button>
            </div>
            <div className={styles.recipes}>
                {recipes.map(r => {
                    return <SelectableRecipe key={uuidv4()} recipe={r} selected={selected} setSelected={setSelected} />
                })}
            </div>
        </div>
    );
}

export default PlanningPage;
