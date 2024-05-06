import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./Features/PostSlice.js";

export default configureStore({
      reducer: {
            app: PostSlice
      }
});