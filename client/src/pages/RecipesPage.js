import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/recipes.module.css";
import Option from "../components/Option";
import SearchBar from "../components/SearchBar";
import IconButton from "../components/IconButton";
import SearchIcon from "../icons/SearchIcon";
import SimplifiedRecipe from "../components/SimplifiedRecipe";

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

function RecipesPage({ recipes }) {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                {options.map(opt => {
                  return <Option key={opt.group} group={opt.group} options={opt.options} type={opt.type} />
                })}
            </div>
            <div>
                <div className={styles.search}>
                  <SearchBar />
                  <IconButton icon={<SearchIcon />} />
                </div>
                <div className={styles.recipes}>
                  {recipes.map(r => {
                    return <SimplifiedRecipe key={uuidv4()} recipe={r} />
                  })}
                </div>
            </div>
        </div>
    );
}

export default RecipesPage;
