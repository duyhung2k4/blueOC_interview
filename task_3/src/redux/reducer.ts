import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "./api/post";



export const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
})