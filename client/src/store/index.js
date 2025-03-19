import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slice/userSlice"
import { gameSlice } from "./slice/gameSlice"
import { crudSlice } from "./slice/crudSlice"

import formReducer from "./slice/formSlice"

const store = configureStore({
    reducer: {
        form: formReducer,
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