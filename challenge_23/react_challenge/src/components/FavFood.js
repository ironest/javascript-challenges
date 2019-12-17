import React from "react";
import FavFoodItem from "./FavFoodItem"

const FavFood = () => {

    return (
        <section id="fav-foods">
            <h2>Favourite Foods</h2>
            <FavFoodItem 
                title = "Pizza"
                src = "https://bit.ly/2ryI6bZ"
                bestTime = "All the time"
                bestPlace = "Queen Margharitas"
            />
            <FavFoodItem 
                title = "Quesadillas"
                src = "https://bit.ly/2ryI6bZ"
                bestTime = "Afternoon Siesta"
                bestPlace = "Mejico"
            />
            <FavFoodItem 
                title = "Icecream Pancakes"
                src = "https://bit.ly/2zUznp2"
                bestTime = "Breaky"
                bestPlace = "Pancakes on the Rocks"
            />
            <FavFoodItem 
                title = "Loaded Fries"
                src = "https://bit.ly/2GdfYVK"
                bestTime = "During the game"
                bestPlace = "My House"
            />
        </section>
    )
}

export default FavFood