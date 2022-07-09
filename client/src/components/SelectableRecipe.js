import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/planning.module.css";
import ShellfishIcon from "../icons/ShellfishIcon";
import NutIcon from "../icons/NutIcon";
import WheatIcon from "../icons/WheatIcon";
import FishIcon from "../icons/FishIcon";
import MilkIcon from "../icons/MilkIcon";
import EggIcon from "../icons/EggIcon";
import SoyIcon from "../icons/SoyIcon";
import SesameIcon from "../icons/SesameIcon";
import LeafIcon from "../icons/LeafIcon";
import MeatIcon from "../icons/MeatIcon";
import TreeIcon from "../icons/TreeIcon";
import FireIcon from "../icons/FireIcon";
import CheckIcon from "../icons/CheckIcon";

function SelectableRecipe({ recipe, selected, setSelected }) {

    // get heat index
    const heatLevels = ['None', 'Low', 'Medium', 'High', 'Very High'];
    const heatIndex = heatLevels.findIndex(h => h === recipe.heat);

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
            <div className={styles.details}>
                <div className={styles.diet}>
                    {(recipe.diet === "All") && <MeatIcon />}
                    {(recipe.diet === "Vegetarian") && <LeafIcon />}
                    {(recipe.diet === "Vegan") && <TreeIcon />}
                </div>
                <div className={styles.imgContainer}>
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className={styles.allergens}>
                    {recipe.allergens.includes("Shellfish") && <ShellfishIcon />}
                    {recipe.allergens.includes("Nuts") && <NutIcon />}
                    {recipe.allergens.includes("Wheat") && <WheatIcon />}
                    {recipe.allergens.includes("Fish") && <FishIcon />}
                    {recipe.allergens.includes("Milk") && <MilkIcon />}
                    {recipe.allergens.includes("Egg") && <EggIcon />}
                    {recipe.allergens.includes("Soy") && <SoyIcon />}
                    {recipe.allergens.includes("Sesame") && <SesameIcon />}
                </div>
                <div className={styles.heat}>
                    {heatIndex > 0 && (
                        <>
                            <FireIcon />
                            <FireIcon />
                            {heatIndex > 1 && <FireIcon />}
                            {heatIndex > 2 && <FireIcon />}
                            {heatIndex > 3 && <FireIcon />}
                        </>
                    )}
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

export default SelectableRecipe;
