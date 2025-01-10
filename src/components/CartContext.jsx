import { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.price === item.price
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        updatedCart[existingItemIndex].totalPrice =
          updatedCart[existingItemIndex].quantity * updatedCart[existingItemIndex].price;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: 1,
            totalPrice: item.price,
          },
        ];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id, price) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => !(cartItem.id === id && cartItem.price === price))
    );
  };

  // Update an item's quantity and total price
  const updateCartItem = (id, price, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.price === price
          ? {
              ...item,
              quantity,
              totalPrice: quantity * item.price,
            }
          : item
      )
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
