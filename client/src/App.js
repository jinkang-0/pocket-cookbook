import React from "react";
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
    const recipes = [
        {
            name: "French Toast",
            img: "https://recipetineats.com/wp-content/uploads/2014/06/French-Toast_3.jpg",
            diet: "Vegetarian",
            allergens: ["Milk", "Egg", "Wheat"],
            heat: 2,
            tags: ["Breakfast"],
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo, eius inventore iure neque esse at facilis quasi distinctio repellat."
        },
        {
            name: "Cheeseburger",
            source: "Jinkang",
            img: "https://www.aspicyperspective.com/wp-content/uploads/2020/07/best-hamburger-patties-1-500x375.jpg",
            diet: "All",
            allergens: ["Milk", "Wheat"],
            heat: 2,
            tags: ["Lunch"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium expedita vero similique distinctio ex cumque consectetur sunt sint accusantium.",
            ingredients: [
                {name: "bread buns", amount: 2},
                {name: "steak patty", amount: 1},
                {name: "square cheese", amount :1}
            ],
            optionalIngredients: ["Montreal steak seasoning", "Onions", "Tomatoes", "Pickles"],
            time: "5 min",
            yield: "1 serving",
            directions: [
                "Place the patty on a grill or a pan",
                "Add seasoning",
                "After about 1 minute, or when the bottom is done, flip the patty",
                "Place the cheese on the patty",
                "After about 30 seconds, or when the patty is done, take it off the grill",
                "Sandwich the patty with the buns, adding any toppings on the patty before closing the top bun"
            ]
        },
        {
            name: "Spaghetti",
            img: "https://recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg",
            diet: "All",
            allergens: ["Milk", "Wheat"],
            heat: 1,
            tags: ["Lunch", "Dinner"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti dicta velit quis maiores ad quas voluptate nesciunt debitis exercitationem."
        }
    ];

    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" exact element={<MenuPage />} />
                <Route path="/planning" exact element={<PlanningPage recipes={recipes} />} />
                <Route path="/recipes" exact element={<RecipesPage recipes={recipes} />} />
                <Route path="/recipes/add" exact element={<AddRecipePage />} />
                <Route path="/recipes/view/:id" element={<RecipeViewPage recipe={recipes[1]} />} />
                <Route path="/planning/batch" exact element={<BatchSelectPage recipes={recipes} />} />
                <Route path="/about" exact element={<AboutPage />} />
                <Route path="/error" exact element={<ErrorPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
