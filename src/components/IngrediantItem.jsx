import React from "react";
import styles from "../cssModules/ingrediantsItem.module.css";
export default function IngrediantItem({ item }) {
  return (
    <div className={styles.ingContainer}>
      <div>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      <div className={styles.ingInfo}>
        <h3>{item.food}</h3>
        <p>
          {item.quantity} {item.measure}
        </p>
      </div>
    </div>
  );
}
