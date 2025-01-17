import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Option from "../components/Option";
import SearchBar from '../components/SearchBar.js';
import SelectableRecipe from '../components/SelectableRecipe.js';
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/planning.module.css";
import globalStyles from "../styles/global.module.css";

function PlanningPage({ selected, setSelected, filterOptions }) {

    const navigate = useNavigate();
    const theme = useContext(ThemeContext);

    const [recipes, setRecipes] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [filters, setFilters] = useState({
        "Meal": ["Breakfast", "Lunch", "Dinner", "Beverage", "Snack", "Dessert", "Sauce/Dip", "Soup", "Pastry", "Bread"],
        "Allergens": ["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soy", "Sesame"],
        "Heat": "Any",
        "Diet": "All",
        "Search": ""
    });

    useEffect(() => {
        axios
            .get('/api/recipes')
            .then(res => {
                const r = res.data;
                setRecipes(r);
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }, []);

    useEffect(() => {
        const filteredRecipes = recipes.filter(r => {
            if (r.tags.some(t => !filters.Meal.includes(t)))
                return false;
            if (r.allergens && r.allergens.some(a => !filters.Allergens.includes(a)))
                return false;
            if (filters.Heat !== "Any" && filters.Heat !== r.heat)
                return false;
            if (filters.Diet !== "All" && filters.Diet !== r.diet)
                return false;
            if (!(new RegExp(filters.Search.toLowerCase())).test(r.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
                return false;
            return true;
        });
        setDisplayed(filteredRecipes);
    }, [filters, recipes]);

    function updateFilters(e) {
        const grp = e.target.name;
        const type = e.target.id;
        var newObj;
        if (grp === "Meal") {
            const newVal = (filters.Meal.includes(type)) ? filters.Meal.filter(f => f !== type) : [...filters.Meal, type];
            newObj = { Meal: newVal };
        } else if (grp === "Allergens") {
            const newVal = (filters.Allergens.includes(type)) ? filters.Allergens.filter(f => f !== type) : [...filters.Allergens, type];
            newObj = { Allergens: newVal };
        } else if (grp === "Heat") {
            newObj = { Heat: type };
        } else if (grp === "Diet") {
            newObj = { Diet: type };
        } else {
            return;
        }
        setFilters({...filters, ...newObj});
    }

    function handleClick(id) {
        const recipe = recipes.find(r => r._id === id);
        if (selected.some(s => s._id === id))
            setSelected(selected.filter(s => s._id !== recipe._id))
        else
            setSelected([...selected, recipe]);
    }

    return (
        <div className={`${styles.container} ${globalStyles[theme]}`}>
            {(selected.length > 0) && (
                <div className={styles.banner}>
                    <p>When you're ready, click the Ready button on the right to continue.</p>
                    <button onClick={() => {navigate('/planning/batch')}}>Ready</button>
                </div>
            )}
            <h1>Select Your Course</h1>
            <div>
                <div className={styles.options}>
                    {filterOptions.map(opt => {
                        return <Option key={opt.group} group={opt.group} options={opt.options} type={opt.type} onChange={updateFilters} />
                    })}
                </div>
                {selected.length > 0 && (
                    <div className={styles.selectedList}>
                        <h4>Selected Recipes</h4>
                        <ul>
                            {selected.map(s => {
                                return <li key={uuidv4()}>{s.name}</li>
                            })}
                        </ul>
                    </div>
                )}
                <div className={styles.filter}>
                    <SearchBar onChange={(e) => {setFilters({...filters, ...{Search: e.target.value}})}} />
                    <button>Search</button>
                </div>
                <div className={styles.recipes}>
                    {displayed.map(r => {
                        return <SelectableRecipe key={uuidv4()} recipe={r} onClick={(id) => {handleClick(id)}} selected={selected.some(s => s._id === r._id)} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default PlanningPage;
