import React from "react";

const FavFoodItem = (props) => {

    return (
        <div>
            <h4>{props.title}</h4>
            <img src={props.src} />
            <p>Best time to eat: <span>{props.bestTime}</span></p>
            <p>Best place: <span>{props.bestPlace}</span></p>
        </div>
    )
}

export default FavFoodItem
