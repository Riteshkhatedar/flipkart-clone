import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const data = action.payload;
      const existingItems = state.cart.find((item) => item.id === data.id);

      if (existingItems) {
        existingItems.totalPrice += data.price;
        existingItems.quantity++;
      } else {
        state.cart.push({
          id: data.id,
          type: data.type,
          name: data.name,
          price: data.price,
          quantity: 1,
          totalPrice: data.price,
        });
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.totalQuantity--;
    },
  },
});
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
