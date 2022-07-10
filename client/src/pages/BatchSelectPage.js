import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RecipeBatchSelect from "../components/RecipeBatchSelect";
import styles from "../styles/batchselect.module.css";

function BatchSelectPage({ selected, setSelected }) {

    const multipliers = useRef(selected.map(s => {return {id: s._id, multiplier: "1"}}));
    const navigate = useNavigate();

    useEffect(() => {
        if (selected.length === 0)
            navigate('/planning');
    }, [selected, navigate]);

    function updateQuantities(id, value) {
        const newMults = multipliers.current.map(m => {
            if (m.id === id)
                m.multiplier = value;
            return m;
        });
        multipliers.current = newMults;
    }

    function proceed() {
        const newSelected = selected.map(s => {
            const mult = multipliers.current.find(m => m.id === s._id).multiplier;
            s.multiplier = mult;
            return s;
        });
        setSelected(newSelected);
        navigate('/planning/summary');
    }

    return (
        <div className={styles.container}>
            <h1>Select Batches</h1>
            <div className={styles.ingredientsGrid}>
                {selected.map(s => {
                    return <RecipeBatchSelect key={uuidv4()} recipe={s} updateBatches={(v) => {updateQuantities(s._id, v)}} />
                })}
            </div>
            <button onClick={proceed}>Proceed</button>
        </div>
    );
}

export default BatchSelectPage;
