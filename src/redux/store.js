import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import modalReducer from "./modal/slice";
import { combineReducers } from "redux";

// Ваш slice для модального вікна
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    currentContact: null,
  },
  reducers: {
    setOpenModal(state, action) {
      state.isOpen = action.payload;
    },
    setCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
  },
});

// Експортуємо дію
export const { setOpenModal, setCurrentContact } = modalSlice.actions;

// Все інше вашого store.js залишимо без змін
const persistedAuthReducer = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistedAuthReducer, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);