import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, quantity } = action.payload; // Include quantity
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.price === price
      );

      if (existingItemIndex !== -1) {
        // Update the quantity and totalPrice of the existing item
        const updatedCart = [...state.items];
        updatedCart[existingItemIndex].quantity += quantity; // Add the passed quantity
        updatedCart[existingItemIndex].totalPrice =
          updatedCart[existingItemIndex].quantity * updatedCart[existingItemIndex].price;
        state.items = updatedCart;
      } else {
        // Add the new item with the provided quantity
        state.items.push({
          id,
          name,
          price,
          image,
          quantity,
          totalPrice: price * quantity, // Multiply price by quantity for the initial total price
        });
      }

      // Update totalItems (sum of quantities)
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id && item.price === price);
      
      if (itemToRemove) {
        // Subtract the quantity of the item from the total items
        state.totalItems -= itemToRemove.quantity;
        // Filter out the item from the cart
        state.items = state.items.filter((item) => !(item.id === id && item.price === price));
      }
    },

    updateQuantity: (state, action) => {
      const { id, price, quantityChange } = action.payload;
      const item = state.items.find((item) => item.id === id && item.price === price);
      
      if (item) {
        // If updating quantity would set it to 0 or below, remove the item
        if (item.quantity + quantityChange <= 0) {
          state.totalItems -= item.quantity; // Subtract the total quantity of this item
          state.items = state.items.filter((item) => item.id !== id || item.price !== price);
        } else {
          // Otherwise, update the quantity and totalPrice
          item.quantity += quantityChange;
          item.totalPrice = item.quantity * price;
          state.totalItems += quantityChange; // Adjust totalItems accordingly
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
