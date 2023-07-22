import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {
    companyId: "123",
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export default appSlice.reducer;
