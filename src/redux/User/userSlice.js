import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: false,
    loading: true,
  },
  reducers: {
    userLoading: (state, action) => {
      state.error = false;
      state.loading = action.payload;
    },
    userError: (state) => {
      state.error = true;
      state.loading = false;
    },
    userData: (state, action) => {
      state.user = action.payload;
      state.error = false;
      state.loading = false;
    },
  },
});
export default userSlice;