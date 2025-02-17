import { configureStore } from '@reduxjs/toolkit';
 import authReducer from '../features/auth/authSlice'
 import adminReducer from '../features/adminAuth/adminAuthSlice'
 import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminAuth:adminReducer,
    goals:goalReducer,
  },
});