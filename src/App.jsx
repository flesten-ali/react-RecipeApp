import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import styles from "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Recipe from "./components/Recipe";
import InnerContainer from "./components/InnerContainer";
function App() {
  //  We want to display the Food data in the page not inside the Search component so we will creat the state varible here
  // and get the data from the Search comp
  const [foodData, setFoodData] = useState([]);
  // I will pass the recipe as id and it is an object becauese I donot have to fetch data to get any id in this new API (EDMAM)
  const [foodId, setFoodId] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  return (
    <div className="App">
      <Header />
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        setFoodId={setFoodId}
        setLoaded={setLoaded}
      />
      {/* <Container>
        // <FoodList foodData={foodData} />
      </Container> */}
      <Container>
        {" "}
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <Recipe foodId={foodId} isLoaded={isLoaded} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
