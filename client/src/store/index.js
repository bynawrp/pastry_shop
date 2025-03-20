import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slice/userSlice"
import { pastrySlice } from "./slice/pastrySlice"

import formReducer from "./slice/formSlice"
import yamsReducer from "./slice/yamsSlice"
import searchbarReducer from "./slice/searchbarSlice"

const store = configureStore({
    reducer: {
        form: formReducer,
        yams: yamsReducer,
        searchbar: searchbarReducer,
        [userSlice.reducerPath]: userSlice.reducer,
        [pastrySlice.reducerPath]: pastrySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat([
                userSlice.middleware,
                pastrySlice.middleware
            ])
})

export default store