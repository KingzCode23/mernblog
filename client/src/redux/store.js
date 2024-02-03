import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSclice'
export default configureStore({
  reducer: {
    user: userReducer,
  }
})