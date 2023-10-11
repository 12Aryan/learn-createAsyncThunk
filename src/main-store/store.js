import { configureStore } from "@reduxjs/toolkit";
import githubReducer from '../components/github-users/redux-slice/github-users-slice.js'

export const store = configureStore({
    reducer:{
        github: githubReducer
    }
})