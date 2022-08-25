import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((entry) => entry.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price,
          quantity: 1
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((entry) => entry.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== id);
      }else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
