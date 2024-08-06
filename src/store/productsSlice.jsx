import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  products: [
  
    ],
  };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = productsSlice.actions;
export default productsSlice.reducer;
