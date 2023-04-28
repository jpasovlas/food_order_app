import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartFlag, setCartFlag] = useState(false);
  const cartHandler = (bFlag) => {
    setCartFlag(bFlag);
  };

  return (
    <CartProvider>
      { cartFlag && <Cart onCloseCart={() => cartHandler(false)} />}
      <Header onShowCart={() => cartHandler(true)}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
