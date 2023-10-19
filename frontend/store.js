import { configureStore } from '@reduxjs/toolkit'
import authReducer from './utils/auth.slice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});