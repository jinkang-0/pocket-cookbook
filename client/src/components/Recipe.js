import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/planning.module.css";
import LeafIcon from "../icons/LeafIcon";
import MeatIcon from "../icons/MeatIcon";
import MilkIcon from "../icons/MilkIcon";
import EggIcon from "../icons/EggIcon";
import WheatIcon from "../icons/WheatIcon";
import FireIcon from "../icons/FireIcon";
import CheckIcon from "../icons/CheckIcon";

function Recipe({ recipe, selected, setSelected }) {
    // set array for heat values
    let heatArr = [];
    for (let i = 0; i < recipe.heat; i++)
        heatArr.push("");

    // select recipe when clicked
    function handleClick() {
        if (selected.includes(recipe.name))
            setSelected(selected.filter(s => s !== recipe.name));
        else
            setSelected([...selected, recipe.name]);
    }

    // determine class list
    const containerClasses = (selected.includes(recipe.name)) ? `${styles.recipe} ${styles.selected}` : styles.recipe;

    return (
        <div className={containerClasses} onClick={handleClick}>
            <h4>{recipe.name}</h4>
            <div>
                <div className={styles.diet}>
                    {(recipe.diet === "Vegetarian") && <LeafIcon />}
                    {(recipe.diet === "All") && <MeatIcon />}
                </div>
                <div className={styles.imgContainer}>
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div></div>
                <div className={styles.allergens}>
                    {recipe.allergens.map(a => {
                        if (a === "Milk")
                            return <MilkIcon key={uuidv4()} />
                        else if (a === "Egg")
                            return <EggIcon key={uuidv4()} />
                        else if (a === "Wheat")
                            return <WheatIcon key={uuidv4()} />
                        return null;
                    })}
                </div>
                <div className={styles.heat}>
                    {heatArr.map(h => {
                        return <FireIcon key={uuidv4()} />
                    })}
                </div>
            </div>
            <div className={styles.tags}>
                {recipe.tags.map(t => {
                    return <span key={uuidv4()}>{t}</span>
                })}
            </div>
            <p>
                {recipe.description}
            </p>
            {(selected.includes(recipe.name)) && <CheckIcon className={styles.check} />}
        </div>
    );
}

export default Recipe;
