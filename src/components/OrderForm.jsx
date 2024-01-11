import React, { useContext } from "react";
import Modal from "./Modal";
import MealCartContext from "../store/MealCartContext";
import "./OrderForm.css";
import CartFunctionContext from "../store/CartFuncionalityContext";

const OrderForm = () => {
  const mealCtx = useContext(MealCartContext);
  const cartCtx = useContext(CartFunctionContext);

  const totalPrice = mealCtx.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const hideFormHandle = () => {
    cartCtx.hideForm();
  };

  const submitFormHandle = (event) => {
    event.preventDefault();

    const orderDetails = new FormData(event.target);
    const customerDetails = Object.fromEntries(orderDetails.entries());
    console.log(customerDetails);

    fetch("https://meal-e0f8a-default-rtdb.firebaseio.com/orders.json", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orders: mealCtx.items,
        customer: customerDetails,
      }),
    });
    cartCtx.hideForm();
    mealCtx.clearCart();
    cartCtx.showGratitude();
  };

  return (
    <Modal
      className="cart"
      open={cartCtx.progress === "form"}
      /*onClose={handleCloseForm}*/
      onClose={cartCtx.progress === "from" ? hideFormHandle : null}
    >
      <form className="order-form" onSubmit={submitFormHandle}>
        <h2>Order Form:</h2>
        <p>Total amount: {totalPrice}</p>
        <label htmlFor="full-name">Full name:</label>
        <input type="text" id="full-name" name="full-name" required />
        <label htmlFor="city-name">City name:</label>
        <input type="text" id="city-name" name="city-name" required />
        <label htmlFor="postal">Postal code:</label>
        <input type="text" id="postal" name="postal" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <div className="order-form-actions">
          <button type="button" className="button-close">
            Close
          </button>
          <button className="button-checkout">Order</button>
        </div>
      </form>
    </Modal>
  );
};

export default OrderForm;
