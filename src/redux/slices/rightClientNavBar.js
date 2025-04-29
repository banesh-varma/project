import { createSlice } from '@reduxjs/toolkit';

const rightClientNavBar = createSlice({
  name: 'rightChildNav',
  initialState: {
    childActiveBtn: "",
    childOPenClose: true
  },
  reducers :{
    setChildActiveBtn (state, action) {
      state.childActiveBtn = action.payload
    },
    setChildOPenClose (state, action) {
      state.childOPenClose = action.payload
    }

  }
  
});

export const { setChildActiveBtn, setChildOPenClose} = rightClientNavBar.actions;

export default rightClientNavBar.reducer;