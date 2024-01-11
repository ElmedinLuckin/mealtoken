import React, { useContext } from "react";
import "./CartItem.css";
import MealCartContext from "../store/MealCartContext";

const CartItem = ({ item, increase, decrease }) => {
  const mealCtx = useContext(MealCartContext);

  const addMoreItemInCartHandle = () => {
    mealCtx.addMealToCart(item);
  };

  const removeItemFromCartHandle = () => {
    mealCtx.removeMealFromCart(item.id);
  };

  return (
    <li className="cart-item">
      <img src={item.image} alt="" />
      <h4>{item.name}</h4>

      <p>x{item.quantity}</p>
      <div className="cart-item__actions">
        <button
          onClick={removeItemFromCartHandle}
          className="cart-item__decrease"
        >
          -
        </button>
        <button onClick={addMoreItemInCartHandle}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
