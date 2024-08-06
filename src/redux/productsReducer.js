
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [], 
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
    },
   
  },
});

export const { addProductToCart, removeProductFromCart } = productsSlice.actions;
export default productsSlice.reducer;
