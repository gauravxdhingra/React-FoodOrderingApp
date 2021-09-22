import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider'

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  }

  const hideCardHandler = () => {
    setCartVisibility(false);
  }

  return (
    <CartProvider>
      {cartVisibility && <Cart onHideCart={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
