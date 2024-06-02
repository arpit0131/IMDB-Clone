import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from './paginationSlice';
import userSlice from './User/userSlice';

const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    user: userSlice.reducer,
  },
});
export default store;
