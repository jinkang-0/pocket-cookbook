import React from "react";
import styles from "../styles/batchselect.module.css";
import RecipeBatchSelect from "../components/RecipeBatchSelect";

function BatchSelectPage({ recipes }) {
    return (
        <div className={styles.container}>
            <h1>Select Batches</h1>
            <div className={styles.ingredientsGrid}>
                <RecipeBatchSelect recipe={recipes[1]} />
            </div>
            <button>Proceed</button>
        </div>
    );
}

export default BatchSelectPage;
