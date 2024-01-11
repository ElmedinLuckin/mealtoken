import { createContext, useReducer } from "react";

const MealCartContext = createContext({
  items: [],
  addItemsToCart: (item) => {},
  removeMealFromCart: (id) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_MEAL") {
    const existingMealIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedCartState = [...state.items];

    if (existingMealIndex > -1) {
      const newMeal = {
        ...state.items[existingMealIndex],
        quantity: +state.items[existingMealIndex].quantity + 1,
      };

      updatedCartState[existingMealIndex] = newMeal;
    } else {
      updatedCartState.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedCartState };
  }

  if (action.type === "REMOVE_MEAL") {
    const existingMealIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingMeal = state.items[existingMealIndex];

    const newItems = [...state.items];

    if (existingMeal.quantity === 1) {
      newItems.splice(existingMealIndex, 1);
    } else {
      const newItem = {
        ...existingMeal,
        quantity: existingMeal.quantity - 1,
      };
      newItems[existingMealIndex] = newItem;
    }
    return { ...state, items: newItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
};

export function MealCartContextProvider({ children }) {
  const [cartState, dispatchFn] = useReducer(cartReducer, { items: [] });

  const addMealToCart = (item) => {
    dispatchFn({ type: "ADD_MEAL", item });
  };

  const removeMealFromCart = (id) => {
    dispatchFn({ type: "REMOVE_MEAL", id });
  };

  const clearCart = () => {
    dispatchFn({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    addMealToCart,
    removeMealFromCart,
    clearCart,
  };

  return (
    <MealCartContext.Provider value={cartContext}>
      {children}
    </MealCartContext.Provider>
  );
}

export default MealCartContext;
