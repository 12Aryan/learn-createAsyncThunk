import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGithubUsers = createAsyncThunk(
  "/fetchgithubusers",
  async (searchQuery) => {
    try {
      console.log("helo-", searchQuery);
      if (searchQuery === null || searchQuery === "") {
        const response = await fetch(" https://api.github.com/users");
        const result = await response.json();
        return result;
      } else {
        const response = await fetch(
          `https://api.github.com/users/${searchQuery}`
        );
        const result = await response.json();
        // initialState.searchByName = true;
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  searchByName: false,
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
