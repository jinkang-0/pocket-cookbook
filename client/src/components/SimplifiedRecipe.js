import React from 'react'
import styles from '../styles/recipes.module.css'

function SimplifiedRecipe({ recipe }) {
  return (
    <div className={styles.recipe}>
        <div className={styles.imgContainer}>
            <img src={recipe.img} alt={recipe.name} />
        </div>
        <div className={styles.details}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button>View Recipe</button>
        </div>
    </div>
  )
}

export default SimplifiedRecipe