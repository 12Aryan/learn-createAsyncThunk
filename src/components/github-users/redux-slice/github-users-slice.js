import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGithubUsers = createAsyncThunk(
  "/fetchgithubusers",
  async (payload) => {

     try {
      console.log("helo-", payload);
      const response = await fetch(" https://api.github.com/users");
      const result = await response.json();
      return result;
      
     } catch (error) {
      console.log(error)
     }
  
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const githubUserSlice = createSlice({
  name: "githubUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGithubUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGithubUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchGithubUsers.rejected]: (state, action) => {
      state.error = "error";
    },
  },
});
export default githubUserSlice.reducer;
