import React, { useContext } from "react";
import Modal from "./Modal";
import CartFunctionContext from "../store/CartFuncionalityContext";
import "./Gratitude.css";

const Gratitude = () => {
  const cartCtx = useContext(CartFunctionContext);

  const handleCloseGratitude = () => {
    cartCtx.hideGratitude();
  };

  return (
    <Modal open={cartCtx.progress === "gratitude"} className="gratitude">
      <h2>Thank you for your order!</h2>
      <p>
        Your order has been received. We thank you once again for your trust.
        Your Meal Token.
      </p>
      <button onClick={handleCloseGratitude}>Close</button>
    </Modal>
  );
};

export default Gratitude;
