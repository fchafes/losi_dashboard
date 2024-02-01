import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const tokenPersistConfig = {
    key: 'tokens',
    storage,
  };

const tokenSlice = createSlice({
  name: "tokens",
  initialState: {
    tokens: null,
    email: null,
    userId: null,
  },
  reducers: {
    createData: (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        // Si hay datos disponibles (usuario autenticado)
        state.tokens = action.payload.token;
        state.email = action.payload.email;
        
      } else {
        // Si no hay datos (cerrar sesión)
        state.tokens = null;
        state.email = null;
      
      }
    },
  },
});

const persistedTokenReducer = persistReducer(tokenPersistConfig, tokenSlice.reducer);

export const { createData } = tokenSlice.actions;

export default persistedTokenReducer;