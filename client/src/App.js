import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import PlanningPage from "./pages/PlanningPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeViewPage from "./pages/RecipeViewPage";
import AboutPage from "./pages/AboutPage";
import AddRecipePage from "./pages/AddRecipePage";
import BatchSelectPage from "./pages/BatchSelectPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/global.module.css';

function App() {

    const [selected, setSelected] = useState([]);

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" exact element={<MenuPage />} />
                <Route path="/planning" exact element={<PlanningPage selected={selected} setSelected={setSelected} />} />
                <Route path="/planning/batch" exact element={<BatchSelectPage selected={selected} setSelected={setSelected} />} />
                <Route path="/recipes" exact element={<RecipesPage />} />
                <Route path="/recipes/add" exact element={<AddRecipePage />} />
                <Route path="/recipes/view/:id" element={<RecipeViewPage />} />
                <Route path="/about" exact element={<AboutPage />} />
                <Route path="/error" exact element={<ErrorPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
