import React, { useState } from "react";
import styles from "../cssModules/recipe.module.css";
import ListIngredients from "./ListIngredients";

export default function Recipe({ foodId, isLoaded }) {
  return (
    <div className={styles.recipeCard}>
      <div>
        <div className={styles.content}>
          <h1>{foodId.label}</h1>
          <img className={styles.recipeImage} src={foodId.image}></img>
        </div>

        <div className={styles.info}>
          {isLoaded ? <p>Meal Type: {foodId.mealType[0]}</p> : ""}
          <p>calories :{foodId.calories} </p>

          <p>cuisineType :{foodId.cuisineType} Food</p>
          {isLoaded ? (
            <p>
              {foodId.healthLabels[0] === "Vegetarian"
                ? "Vegetarian🍏"
                : "Vegan🍗"}
            </p>
          ) : (
            ""
          )}
          <p>Prepration time: {foodId.totalTime + 1 * 4} minutes</p>
        </div>

        {/* Ingrediants */}

        {<ListIngredients foodId={foodId} isLoaded={isLoaded} />}
        {/* instructions  */}
        <div className={styles.instructions}>
          <h3>instructions</h3>
          {isLoaded ? (
            <ul>
              {foodId.ingredientLines.map((ing, index) => {
                return <li key={index}>{ing}</li>;
              })}
            </ul>
          ) : (
            <p> loading ... </p>
          )}
        </div>
      </div>
    </div>
  );
}
