import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameSlice = createApi({
    reducerPath: "game",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/game",
    }),
    tagTypes: ["Game"],
    endpoints: (build) => ({

        // GET : all pastry
        getAllPastry: build.query({
            query: () => "/pastries",
            providesTags: ["Pastry"]
        }),

        // GET : pastry by id
        getPastry: build.query({
            query: (id) => `/pastrie/${id}`,
            providesTags: ["Pastry"]
        }),

        // GET : pastry win
        getPastryWin: build.query({
            query: (quantity) => `/win-pastries/${quantity}`,
            providesTags: ["Pastry"]
        }),

    })
});

export const {
    useGetAllPastryQuery,
    useGetPastryQuery,
    useGetPastryWinQuery
} = gameSlice;
