import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // Evitar duplicados
      const existingProduct = state.find((item) => item.id === product.id);
      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    // Otras acciones...
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
