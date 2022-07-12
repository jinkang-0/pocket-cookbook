import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PalmIcon from "../icons/PalmIcon";
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
import styles from "../styles/recipeview.module.css";

function RecipeViewPage() {

    const [recipe, setRecipe] = useState({
        name: "N/A",
        source: "N/A",
        img: "/assets/placeholder.png",
        diet: "",
        allergens: [],
        heat: 0,
        tags: [],
        description: "",
        ingredients: [],
        optionalIngredients: [],
        time: "",
        yield: "",
        directions: []
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            if (!params.id)
                return navigate('/error');

            const id = params.id.toString();
            const res = await fetch(`http://localhost:5000/recipes/${id}`);

            if (!res.ok) {
                navigate('/error');
                return;
            }

            const recipe = await res.json();
            if (!recipe) {
                return navigate('/error');
            }
            
            const heatLevels = ['None', 'Low', 'Medium', 'High', 'Very High'];
            recipe.heat = heatLevels.findIndex(h => h === recipe.heat);
            setRecipe(recipe);
        }

        fetchData();
    }, [params.id, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // adapted from Martin R's answer on StackOverflow
    function getlowestfraction(x0) {
        if (Math.abs(Math.round(x0) - x0) < 1.0E-3)
            return Math.round(x0);
        else if (x0 > 1) {
            const integer = Math.floor(x0);
            const frac = getlowestfraction(x0 - integer);
            return `${integer} ${frac}`;
        }

        var eps = 1.0E-3;
        var x = x0,
            a = Math.floor(x),
            h1 = 1,
            k1 = 0,
            h = a,
            k = 1,
            h2, k2;
    
        while (x-a > eps*k*k) {
            x = 1/(x-a);
            a = Math.floor(x);
            h2 = h1;
            h1 = h;
            k2 = k1;
            k1 = k;
            h = h2 + a*h1;
            k = k2 + a*k1;
        }
    
        return h + "/" + k;
    }

    function mapIngredientContent(ingredient) {

        var optionalContent = "";
        if (ingredient.optionalQuantity) {
            const parsedOptionalQuantity = (Number.isInteger(parseFloat(ingredient.optionalQuantity.quantity))) ? ingredient.optionalQuantity.quantity : getlowestfraction(ingredient.optionalQuantity.quantity);
            optionalContent = (ingredient.optionalQuantity.units) ? `(${parsedOptionalQuantity} ${ingredient.optionalQuantity.units})` : `(${parsedOptionalQuantity})`;
        }

        if (ingredient.quantity) {
            const parsedQuantity = (Number.isInteger(parseFloat(ingredient.quantity))) ? ingredient.quantity : getlowestfraction(ingredient.quantity);
            if (ingredient.optionalQuantity)
                return (ingredient.units) ? `${parsedQuantity} ${ingredient.units} ${optionalContent} ${ingredient.name}` : `${parsedQuantity} ${optionalContent} ${ingredient.name}`;
            else
                return (ingredient.units) ? `${parsedQuantity} ${ingredient.units} ${ingredient.name}` : `${parsedQuantity} ${ingredient.name}`;
        }
    
        return ingredient.name;
    }

    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.imgContainer}>
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className={styles.textIntro}>
                    <h1>
                        {recipe.name}
                        {recipe.diet === "All" && <MeatIcon />}
                        {recipe.diet === "Vegetarian" && <LeafIcon />}
                        {recipe.diet === "Vegan" && <TreeIcon />}
                    </h1>
                    <span className={styles.source}>Source: {recipe.source}</span>
                    <p>{recipe.description}</p>
                    <span className={styles.misc}>
                        {recipe.time && (
                            <>
                                ETA: {recipe.time}
                            </>
                        )}
                        <br />
                        {recipe.yield && (
                            <>
                                Yield: {recipe.yield}
                            </>
                        )}
                    </span>
                </div>
            </div>
            {(recipe.allergens || recipe.heat > 0) && (
                <div className={styles.extra}>
                    {(recipe.allergens && recipe.allergens.length > 0) && (
                        <div className={styles.allergens}>
                            <h4>Allergens:</h4>
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
                    {recipe.heat > 0 && (
                        <div className={styles.heat}>
                            <h4>Spiciness:</h4>
                            <FireIcon />
                            {recipe.heat > 1 && <FireIcon />}
                            {recipe.heat > 2 && <FireIcon />}
                            {recipe.heat > 3 && <FireIcon />}
                        </div>
                    )}
                </div>
            )}
            <div className={styles.body}>
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((i) => {
                            return (
                                <li key={uuidv4()}>{mapIngredientContent(i)}</li>
                            );
                        })}
                    </ul>
                </div>
                {recipe.optionalIngredients && (
                    <div>
                        <h2>Optional Ingredients</h2>
                        <ul>
                            {recipe.optionalIngredients.map(i => {
                                return (
                                    <li key={uuidv4()}>{mapIngredientContent(i)}</li>
                                )
                            })}
                        </ul>
                    </div>
                )}
                {recipe.prepDirections && (
                    <div className={styles.prep}>
                        <h2>Before You Start</h2>
                        <ul>
                            {recipe.prepDirections.map(d => {
                                return <li key={uuidv4()}>{d}</li>
                            })}
                        </ul>
                        <PalmIcon />
                    </div>
                )}
                <div>
                    <h2>Directions</h2>
                    <ol>
                        {recipe.directions.map((d) => {
                            return <li key={uuidv4()}>{d}</li>;
                        })}
                    </ol>
                </div>
                {recipe.note && (
                    <div>
                        <h2>Note</h2>
                        <p className={styles.note}>{recipe.note}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeViewPage;
