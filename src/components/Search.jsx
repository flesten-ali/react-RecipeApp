import React, { useEffect, useState } from "react";
import styles from "../cssModules/search.module.css";
// const URL = "https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "68412beafbe444d4b3a126ece8496bdf";
const URL = "https://api.edamam.com/api/recipes/v2";
const API_KEY = "771cbb49b7171e5bb97f353ffe169bed";
const API_ID = "a4739b98";
export default function Search({
  foodData,
  setFoodData,
  setFoodId,
  setLoaded,
}) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function FetchFood() {
      // const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await fetch(
        `${URL}?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );

      const fetched = await data.json();
      // console.log(await fetched.results);
      // setFoodData(fetched.results);
      console.log(await fetched.hits);
      setFoodData(fetched.hits);
      setFoodId(fetched.hits[0].recipe);
      setLoaded(true);
    }
    FetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
    </div>
  );
}
