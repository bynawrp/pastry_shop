import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const gameSlice = createApi({
    reducerPath: "pastry",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/game",
    }),
    endpoints: (build) => ({

        // GET : all pastry
        getAllPastry: build.query({
            query: () => "/pastries",
        }),

        // GET : pastry by id
        getPastry: build.query({
            query: (id) => `/pastrie/${id}`,
        }),

        // GET : pastry win
        getPastryWin: build.query({
            query: (quantity) => `/win-pastries/${quantity}`,
        }),

    })
})

export const {
    useGetAllPastryQuery,
    useGetPastryQuery,
    useGetPastryWinQuery
} = gameSlice
