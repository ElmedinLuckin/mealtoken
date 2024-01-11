import React, { useContext } from "react";
import Modal from "./Modal";
import "./Cart.css";
import MealCartContext from "../store/MealCartContext";
import CartFunctionContext from "../store/CartFuncionalityContext";
import CartItem from "./CartItem";

const Cart = () => {
  const mealCtx = useContext(MealCartContext);
  const cartCtx = useContext(CartFunctionContext);

  const totalPrice = mealCtx.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const hideCartHandler = () => {
    cartCtx.hideCart();
  };

  const handleOpenForm = () => {
    cartCtx.showForm();
  };

  return (
    <Modal
      open={cartCtx.progress === "cart"}
      className="cart"
      onClose={cartCtx.progress === "cart" ? hideCartHandler : null}
    >
      <div className="cart-container">
        <h2>Your cart</h2>
        <ul>
          {mealCtx.items.map((item) => {
            return <CartItem key={item.name} item={item} />;
          })}
        </ul>
        <div>
          <p className="total-price">Total price: ${totalPrice}</p>
          <p>
            <button className="button-close" onClick={hideCartHandler}>
              Close
            </button>

            {mealCtx.items.length > 0 && (
              <button className="button-checkout" onClick={handleOpenForm}>
                Checkout
              </button>
            )}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
