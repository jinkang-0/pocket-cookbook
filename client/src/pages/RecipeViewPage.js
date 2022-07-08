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

            setRecipe(recipe);
        }

        fetchData();
    }, [params.id, navigate]);

    // by Martin R on StackOverflow
    function getlowestfraction(x0) {
        var eps = 1.0E-15;
        var h, h1, h2, k, k1, k2, a, x;
    
        x = x0;
        a = Math.floor(x);
        h1 = 1;
        k1 = 0;
        h = a;
        k = 1;
    
        while (x-a > eps*k*k) {
            x = 1/(x-a);
            a = Math.floor(x);
            h2 = h1; h1 = h;
            k2 = k1; k1 = k;
            h = h2 + a*h1;
            k = k2 + a*k1;
        }
    
        return h + "/" + k;
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
                    <span>Source: {recipe.source}</span>
                    <p>{recipe.description}</p>
                    <span className={styles.misc}>
                        ETA: {recipe.time}
                        <br />
                        Yield: {recipe.yield}
                    </span>
                </div>
            </div>
            <div className={styles.body}>
                {recipe.allergens.length > 0 && (
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
                        <h4>Spice Level:</h4>
                        <FireIcon />
                        {recipe.heat > 1 && <FireIcon />}
                        {recipe.heat > 2 && <FireIcon />}
                        {recipe.heat > 3 && <FireIcon />}
                    </div>
                )}
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((i) => {
                            return (
                                <li key={uuidv4()}>
                                    {(i.quantity) ?
                                        <>
                                            {(Number.isInteger(parseFloat(i.quantity))) ? i.quantity : getlowestfraction(i.quantity)} {i.units} {i.name}
                                        </> :
                                        <>
                                            {i.units} {i.name}
                                        </>
                                    }
                                </li>
                            );
                        })}
                    </ul>
                </div>
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
                        <p>{recipe.note}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecipeViewPage;
