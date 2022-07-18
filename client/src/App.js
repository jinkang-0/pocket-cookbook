import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanningRouter from "./pages/PlanningRouter";
import MenuPage from "./pages/MenuPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeViewPage from "./pages/RecipeViewPage";
import AboutPage from "./pages/AboutPage";
import AddRecipePage from "./pages/AddRecipePage";
import ErrorPage from "./pages/ErrorPage";
import VerificationPage from "./pages/VerificationPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext } from './ThemeContext';
import './styles/global.module.css';

const filterOptions = [
    {
        group: "Meal",
        options: ["Breakfast", "Lunch", "Dinner", "Beverage", "Snack", "Dessert", "Sauce/Dip", "Soup", "Pastry", "Bread"],
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

    var localTheme = localStorage.getItem('ptck-theme');
    if (!localTheme)
        localTheme = 'light';

    const [theme, setTheme] = useState(localTheme);

    function switchTheme() {
        if (theme === "dark") {
            setTheme('light');
            localStorage.setItem('ptck-theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('ptck-theme', 'dark');
        }
    }

    return (
        <Router>
            <ThemeContext.Provider value={theme}>
                <Navbar />

                <Routes>
                    <Route path="/" exact element={<MenuPage switchTheme={switchTheme} />} />
                    <Route path="/planning/*" element={<PlanningRouter filterOptions={filterOptions} />} />
                    <Route path="/recipes" exact element={<RecipesPage filterOptions={filterOptions} />} />
                    <Route path="/recipes/add" exact element={<AddRecipePage />} />
                    <Route path="/recipes/view/:id" element={<RecipeViewPage />} />
                    <Route path="/about" exact element={<AboutPage />} />
                    <Route path="/error" exact element={<ErrorPage />} />
                    <Route path="/verify" exact element={<VerificationPage />} />
                </Routes>

                <Footer switchTheme={switchTheme} />
            </ThemeContext.Provider>
        </Router>
    );
}

export default App;
