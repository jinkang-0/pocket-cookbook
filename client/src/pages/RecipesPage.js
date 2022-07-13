import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/recipes.module.css";
import Option from "../components/Option";
import SearchBar from "../components/SearchBar";
import IconButton from "../components/IconButton";
import SearchIcon from "../icons/SearchIcon";
import SimplifiedRecipe from "../components/SimplifiedRecipe";

function RecipesPage({ filterOptions }) {

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
                setDisplayed(r);
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }, []);

    useEffect(() => {
        const filteredRecipes = recipes.filter(r => {
            if (!filters.Meal.some(m => r.tags.includes(m)))
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

    function handleChange(e) {
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

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                {filterOptions.map((opt) => {
                    return (
                        <Option
                            key={opt.group}
                            group={opt.group}
                            options={opt.options}
                            type={opt.type}
                            onChange={handleChange}
                        />
                    );
                })}
            </div>
            <div>
                <div className={styles.search}>
                    <SearchBar onChange={(e) => {setFilters({...filters, ...{Search: e.target.value}})}} />
                    <IconButton icon={<SearchIcon />} />
                </div>
                <div className={styles.recipes}>
                    {displayed.map((r) => {
                        return <SimplifiedRecipe key={uuidv4()} recipe={r} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default RecipesPage;
