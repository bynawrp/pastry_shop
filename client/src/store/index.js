import { configureStore } from "@reduxjs/toolkit";
import { connectSlice } from "./slice/loginSlice";

const store = configureStore({
    reducer: {
        [connectSlice.reducerPath]: connectSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                connectSlice.middleware
            ])
})

export default store