// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rightNav from './slices/rightClientNavBar';

const store = configureStore({
  reducer: {
    rightCLientsNavbar : rightNav
  }
});

export default store;
