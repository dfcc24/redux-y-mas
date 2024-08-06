import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: 'Xbox 360',
      description: 'Desde su lanzamiento en 2005, existieron múltiples versiones...',
      price: 150,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Xbox Slim',
      description: 'Su principal diferencia con la Xbox 360 era el tamaño...',
      price: 200,
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Xbox Live',
      description: 'Con un diseño completamente nuevo y un hardware más potente...',
      price: 250,
      rating: 4.7,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.id !== productId);
    },
   
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
