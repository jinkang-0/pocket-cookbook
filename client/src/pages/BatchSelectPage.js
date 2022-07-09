import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RecipeBatchSelect from "../components/RecipeBatchSelect";
import styles from "../styles/batchselect.module.css";

function BatchSelectPage({ selected, setSelected }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (selected.length === 0)
            navigate('/planning');
    }, [selected, navigate]);

    return (
        <div className={styles.container}>
            <h1>Select Batches</h1>
            <div className={styles.ingredientsGrid}>
                {selected.map(s => {
                    return <RecipeBatchSelect key={uuidv4()} recipe={s} />
                })}
            </div>
            <button onClick={() => {navigate('/planning/summary')}}>Proceed</button>
        </div>
    );
}

export default BatchSelectPage;
