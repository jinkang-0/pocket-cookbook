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

const filterOptions = [
    {
        group: "Meal",
        options: ["Breakfast", "Lunch", "Dinner", "Beverage", "Snack", "Dessert", "Sauce/Dip", "Soup", "Pastry"],
        type: "checkbox"
    },
    {
        group: "Allergens",
        options: ["Shellfish", "Nuts", "Wheat", "Fish", "Milk", "Egg", "Soy", "Sesame"],
        type: "checkbox"
    },
    {
        group: "Heat",
        options: ["Any", "None", "Low", "Medium", "High", "Very High"],
        type: "radio"
    },
    {
        group: "Diet",
        options: ["All", "Vegetarian", "Vegan"],
        type: "radio"
    }
];

function App() {

    const [selected, setSelected] = useState([]);

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" exact element={<MenuPage />} />
                <Route path="/planning" exact element={<PlanningPage selected={selected} setSelected={setSelected} filterOptions={filterOptions} />} />
                <Route path="/planning/batch" exact element={<BatchSelectPage selected={selected} setSelected={setSelected} />} />
                <Route path="/recipes" exact element={<RecipesPage filterOptions={filterOptions} />} />
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
