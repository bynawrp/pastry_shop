import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
// import { pastrySlice } from "./slice/pastrySlice";
import { gameSlice } from "./slice/gameSlice";
import { crudSlice } from "./slice/crudSlice";

const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer,
        [gameSlice.reducerPath]: gameSlice.reducer,
        [crudSlice.reducerPath]: crudSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                userSlice.middleware,
                gameSlice.middleware,
                crudSlice.middleware
            ])
})

export default store