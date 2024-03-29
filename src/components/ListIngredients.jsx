import React from "react";
import IngrediantItem from "./IngrediantItem";

export default function ListIngredients({ foodId, isLoaded }) {
  return (
    <div>
      {isLoaded
        ? foodId.ingredients.map((item, index) => {
            return <IngrediantItem item={item} key={index} />;
          })
        : ""}
    </div>
  );
}
