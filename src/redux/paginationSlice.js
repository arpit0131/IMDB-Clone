import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageNo: 1,
  },
  reducers: {
    nextPageHandler: (state) => {
      state.pageNo += 1;
    },

    prevPageHandler: (state) => {
      if (state.pageNo === 1) {
        return;
      }
      state.pageNo -= 1;
    },
  },
});
export default paginationSlice;
