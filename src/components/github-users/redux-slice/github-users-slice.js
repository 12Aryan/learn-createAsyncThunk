import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};


export const githubUsersSLice = createSlice({
  name: "githubUsers",
  initialState,
  reducers: {},
});
export default githubUsersSLice.reducer;
