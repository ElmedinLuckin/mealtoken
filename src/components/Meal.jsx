import React, { useContext } from "react";
import "./Meal.css";
import MealCartContext from "../store/MealCartContext";

const Meal = ({ meal }) => {
  const mealCtx = useContext(MealCartContext);

  const addMealsHandler = (meal) => {
    mealCtx.addMealToCart(meal);
  };

  return (
    <div className="meal-item">
      <div className="meal-img">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-content">
        <h4>{meal.name}</h4>
        <p>{meal.description}</p>
        <div className="meal-price__content">
          <p className="meal-price">${meal.price}</p>
          <button onClick={() => addMealsHandler(meal)} className="meal-button">
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
