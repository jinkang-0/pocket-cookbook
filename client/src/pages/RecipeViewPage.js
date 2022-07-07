import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/recipeview.module.css";

function RecipeViewPage({ recipe }) {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.imgContainer}>
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className={styles.textIntro}>
                    <h1>{recipe.name}</h1>
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
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((i) => {
                            return (
                                <li key={uuidv4()}>
                                    {i.amount} {i.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Directions</h2>
                    <ol>
                        {recipe.directions.map((d) => {
                            return <li key={uuidv4()}>{d}</li>;
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeViewPage;
