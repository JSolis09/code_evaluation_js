import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
