import "./Header.css";
import MealCartContext from "../store/MealCartContext";
import CartFunctionContext from "../store/CartFuncionalityContext";
import { useContext } from "react";

const Header = () => {
  const mealCtx = useContext(MealCartContext);
  const cartCtx = useContext(CartFunctionContext);

  const showCartHandle = () => {
    cartCtx.showCart();
  };

  const numberOfItemInCart = mealCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const scrollToOrder = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-navigation">
          <h2 className="header-logo">Meal Token</h2>

          <i
            onClick={showCartHandle}
            className="fa fa-shopping-cart fa-shopping-cart-header"
          >
            <span className="cart-quantity">{numberOfItemInCart}</span>
          </i>
        </div>
        <div className="header-content">
          <h1>Fast food restaurant</h1>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, <br /> temporibus
            sapiente ad mollitia laborum quam quisquam esse <br /> error unde.
            Tempora ex doloremque, labore, sunt repellat <br /> dolore, iste
            magni quos nihil ducimus libero ipsam.
          </p>
          <button onClick={scrollToOrder}>Order now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

/*<ul className="header-list">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>*/
