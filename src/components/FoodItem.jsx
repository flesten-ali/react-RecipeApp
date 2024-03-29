import React from "react";
import styles from "../cssModules/foodItem.module.css";
export default function FoodItem({ foodItem, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      {/* <img src={foodItem.image} alt="" />
      <h1>{foodItem.title}</h1>
      <button>View Recipe</button> */}
      <img src={foodItem.recipe.image} alt="" />
      <div className={styles.content}>
        <p>{foodItem.recipe.label}</p>
        <button
          onClick={() => {
            setFoodId(foodItem.recipe);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
