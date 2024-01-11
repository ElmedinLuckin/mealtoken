import { createContext, useState } from "react";

const CartFunctionContext = createContext({
  progress: "",
  showCart: () => {},
  closeCart: () => {},
  showForm: () => {},
  closeForm: () => {},
  showGratitude: () => {},
  hideGratitude: () => {},
});

export function CartFunctionContextProvider({ children }) {
  const [funcionality, setFunctionality] = useState("");

  const showCart = () => {
    setFunctionality("cart");
  };

  const hideCart = () => {
    setFunctionality("");
  };

  const showForm = () => {
    setFunctionality("form");
  };

  const hideForm = () => {
    setFunctionality("");
  };

  const showGratitude = () => {
    setFunctionality("gratitude");
  };

  const hideGratitude = () => {
    setFunctionality("");
  };

  const cartValue = {
    progress: funcionality,
    showCart,
    hideCart,
    showForm,
    hideForm,
    showGratitude,
    hideGratitude,
  };

  return (
    <CartFunctionContext.Provider value={cartValue}>
      {children}
    </CartFunctionContext.Provider>
  );
}

export default CartFunctionContext;
