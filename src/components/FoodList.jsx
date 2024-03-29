import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {/* {foodData.map((food) => {
        return <FoodItem key={food.id} foodItem={food} />;
      })} */}
      {foodData.map((food) => {
        return (
          <FoodItem
            key={food.recipe.label}
            foodItem={food}
            setFoodId={setFoodId}
          />
        );
      })}
    </div>
  );
}
