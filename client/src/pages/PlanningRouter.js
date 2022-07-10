import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PlanningPage from "./PlanningPage";
import BatchSelectPage from "./BatchSelectPage";
import SummaryPage from "./SummaryPage";

function PlanningRouter({ filterOptions }) {
    
    const [selected, setSelected] = useState([]);

    return (
        <Routes>
            <Route path="/" exact element={<PlanningPage selected={selected} setSelected={setSelected} filterOptions={filterOptions} />} />
            <Route path="/batch" exact element={<BatchSelectPage selected={selected} setSelected={setSelected} />} />
            <Route path="/summary" exact element={<SummaryPage selected={selected} />} />
        </Routes>
    );
}

export default PlanningRouter;
