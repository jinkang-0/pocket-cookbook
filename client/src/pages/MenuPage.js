import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/menu.module.css'

function MenuPage() {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <h1 className={styles.title}>Pocket Cookbook</h1>

            <div className={styles.options}>
                <div className={styles.option} id="planning">
                    <Link className={styles.optionLink} to="/planning">Planning</Link>
                    <div></div>
                </div>
                <div className={styles.option} id="recipes">
                    <Link className={styles.optionLink} to="/recipes">Recipes</Link>
                    <div></div>
                </div>
                <div className={styles.option} id="about">
                    <Link className={styles.optionLink} to="/about">About</Link>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuPage