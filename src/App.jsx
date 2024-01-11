import "./App.css";

import { CartFunctionContextProvider } from "./store/CartFuncionalityContext";
import { MealCartContextProvider } from "./store/MealCartContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import OrderForm from "./components/OrderForm";
import Gratitude from "./components/Gratitude";

function App() {
  return (
    <CartFunctionContextProvider>
      <MealCartContextProvider>
        <main>
          <Header />
          <Menu />
          <Cart />
          <Footer />
          <OrderForm />
          <Gratitude />
        </main>
      </MealCartContextProvider>
    </CartFunctionContextProvider>
  );
}

export default App;

/**/
