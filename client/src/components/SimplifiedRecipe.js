import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
import styles from "../styles/recipes.module.css";

function SimplifiedRecipe({ recipe }) {

    const heatLevels = ["None", "Low", "Medium", "High", "Very High"];
    const heatIndex = heatLevels.findIndex(h => h === recipe.heat);

    return (
        <div className={styles.recipe}>
            <div className={styles.imgContainer}>
                <img src={recipe.img} alt={recipe.name} />
            </div>
            <div className={styles.details}>
                <h3>
                    {recipe.name}
                    {recipe.diet === "All" && <MeatIcon />}
                    {recipe.diet === "Vegetarian" && <LeafIcon />}
                    {recipe.diet === "Vegan" && <TreeIcon />}
                </h3>
                <div>
                    {recipe.tags.map(t => {
                        return <span key={uuidv4()} className={styles.tag}>{t}</span>
                    })}
                </div>
                <p>{recipe.description}</p>
                <div>
                    <Link to={`/recipes/view/${recipe._id.toString()}`}>View Recipe</Link>
                    <div className={styles.icons}>
                        {recipe.allergens.length > 0 && (
                            <div>
                                {recipe.allergens.includes("Shellfish") && <ShellfishIcon />}
                                {recipe.allergens.includes("Nuts") && <NutIcon />}
                                {recipe.allergens.includes("Wheat") && <WheatIcon />}
                                {recipe.allergens.includes("Fish") && <FishIcon />}
                                {recipe.allergens.includes("Milk") && <MilkIcon />}
                                {recipe.allergens.includes("Egg") && <EggIcon />}
                                {recipe.allergens.includes("Soy") && <SoyIcon />}
                                {recipe.allergens.includes("Sesame") && <SesameIcon />}
                            </div>
                        )}
                        {heatIndex > 0 && (
                            <div>
                                <FireIcon />
                                {heatIndex > 1 && <FireIcon />}
                                {heatIndex > 2 && <FireIcon />}
                                {heatIndex > 3 && <FireIcon />}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimplifiedRecipe;
