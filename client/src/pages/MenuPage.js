import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/menu.module.css'

function MenuPage() {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <h1 className={styles.title}>Pocket Cookbook</h1>

            <div className={styles.options}>
                <Link to="/planning" className={styles.option} id="planning">
                    <p className={styles.optionLink}>Planning</p>
                    <div></div>
                </Link>
                <Link to="/recipes" className={styles.option} id="recipes">
                    <p className={styles.optionLink}>Recipes</p>
                    <div></div>
                </Link>
                <Link to="/about" className={styles.option} id="about">
                    <p className={styles.optionLink}>About</p>
                    <div></div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MenuPage