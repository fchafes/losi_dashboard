import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const productSlice = createSlice({
  name: "product",
  initialState: {
    id: null,
    name:null,
    description:null,
    photo:null,
    price:null,
    featured:null,
    slug:null,
  },
  reducers: {
    createProduct: (state, action) => {
      state.tweet = action.payload;
    },
  },
});

export const { createProduct } = productSlice.actions;

export default productSlice.reducer;