import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import DropdownArrowIcon from "../icons/DropdownArrowIcon";
import styles from "../styles/summary.module.css";

function SummaryPage({ selected }) {

    const navigate = useNavigate();
    const [expanded, setExpanded] = useState([]);

    useEffect(() => {
        if (!selected || selected.length === 0)
            navigate('/planning');
        else if (selected.some(s => !s.multiplier))
            navigate('/planning');
    }, [selected, navigate]);

    const sumAllergens = (selected) ? selected.reduce((prev, current) => {
        return (current.allergens) ? [...prev, ...current.allergens] : prev;
    }, []) : [];

    const multSelected = selected.map(s => {
        const ing = s.ingredients.map(i => {
            return {
                name: i.name,
                quantity: i.quantity * parseFloat(s.multiplier),
                units: i.units
            };
        });
        return {
            _id: s._id,
            name: s.name,
            diet: s.diet,
            ingredients: ing,
            multiplier: s.multiplier
        };
    })


    function evaluateHeat(heatStr) {
        const heatLevels = ['None', 'Low', 'Medium', 'High', 'Very High'];
        const heatIndex = heatLevels.findIndex(h => h === heatStr);
        const jsx = (heatIndex > 0) && (
            <>
                <FireIcon />
                {(heatIndex > 1) && <FireIcon />}
                {(heatIndex > 2) && <FireIcon />}
                {(heatIndex > 3) && <FireIcon />}
            </>
        );
        return jsx;
    }

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

    function collapseExpand(id) {
        if (expanded.includes(id))
            setExpanded(expanded.filter(e => e !== id));
        else
            setExpanded([...expanded, id]);
    }

    return (
        <div className={styles.container}>
            {(sumAllergens.length > 0) && (
                <div className={styles.allergens}>
                    <span>Allergens:</span>
                    {sumAllergens.includes("Shellfish") && <ShellfishIcon />}
                    {sumAllergens.includes("Nuts") && <NutIcon />}
                    {sumAllergens.includes("Wheat") && <WheatIcon />}
                    {sumAllergens.includes("Fish") && <FishIcon />}
                    {sumAllergens.includes("Milk") && <MilkIcon />}
                    {sumAllergens.includes("Egg") && <EggIcon />}
                    {sumAllergens.includes("Soy") && <SoyIcon />}
                    {sumAllergens.includes("Sesame") && <SesameIcon />}
                </div>
            )}
            <div className={styles.ingredients}>
                <h2>Ingredients</h2>
                <div>
                    {multSelected.map(s => {
                        return (
                            <div key={uuidv4()}>
                                <b>
                                    {s.name} {(s.multiplier !== "1") && <>({s.multiplier})</>}
                                    {s.diet === "All" && <MeatIcon />}
                                    {s.diet === "Vegetarian" && <LeafIcon />}
                                    {s.diet === "Vegan" && <TreeIcon />}
                                </b>
                                <ul>
                                    {s.ingredients.map(i => {
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
                                {(multSelected.findIndex(x => x._id === s._id) !== multSelected.length-1) && <hr />}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.recipes}>
                <h1>Recipes</h1>
                <div className={styles.recipeBox}>
                    {selected.map(s => {
                        return (
                            <div className={(expanded.includes(s._id) ? styles.expanded : "")} key={uuidv4()}>
                                <header onClick={() => {collapseExpand(s._id)}}>
                                    <h4>{s.name}</h4>
                                    <div className={styles.heat}>
                                        {s.heat && evaluateHeat(s.heat)}
                                    </div>
                                    <DropdownArrowIcon />
                                </header>
                                <section>
                                    <ol>
                                        {s.directions.map(d => {
                                            return <li key={uuidv4()}>{d}</li>
                                        })}
                                    </ol>
                                </section>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SummaryPage;
