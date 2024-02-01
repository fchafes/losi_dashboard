import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for the web

const persistConfig = {
  key: 'root', // la clave raíz para el almacenamiento local
  storage,
};

export default persistConfig;