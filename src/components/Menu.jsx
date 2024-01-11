import React, { useEffect, useState } from "react";
import "./Menu.css";
import Meal from "./Meal";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch(
          "https://meal-e0f8a-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMeals(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getMeals();
  }, []);

  return (
    <section id="menu">
      <h2>Our menu</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {meals.map((meal) => (
          <Meal key={meal.name} meal={meal} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
