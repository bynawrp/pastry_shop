import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pastrySlice = createApi({
    reducerPath: "pastry",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    tagTypes: ["Pastry"],
    endpoints: (build) => ({

        // ---------- CRUD ROUTES (/api) ---------- //
        getAllPastry: build.query({
            query: () => ({
                url: "/api/pastries",
                credentials: "include"
            }),
            providesTags: ["Pastry"]
        }),

        getPastryById: build.query({
            query: (id) => ({
                url: `/api/pastries/${id}`,
                credentials: "include"
            }),
            providesTags: ["Pastry"]
        }),

        searchPastryByWord: build.query({
            query: (word) => ({
                url: `/api/pastries-search/${word}`,
                credentials: "include"
            }),
            providesTags: ["Pastry"]
        }),

        getTotalPastryCount: build.query({
            query: () => ({
                url: "/api/pastries-count",
                credentials: "include"
            }),
        }),

        addPastry: build.mutation({
            query: (pastry) => ({
                url: "/api/pastrie",
                method: "POST",
                body: pastry,
                credentials: "include"
            }),
            invalidatesTags: ["Pastry"]
        }),

        updatePastry: build.mutation({
            query: ({ id, ...pastry }) => ({
                url: `/api/pastrie/${id}`,
                method: "PUT",
                body: pastry,
                credentials: "include"
            }),
            invalidatesTags: ["Pastry"]
        }),

        deletePastry: build.mutation({
            query: (id) => ({
                url: `/api/pastrie/${id}`,
                method: "DELETE",
                body: id,
                credentials: "include"
            }),
            invalidatesTags: ["Pastry"]
        }),

        // ---------- GAME ROUTES (/game) ---------- //
        getAllGamePastry: build.query({
            query: () => ({
                url: "/game/pastries",
            }),
            providesTags: ["Pastry"]
        }),

        getGamePastryById: build.query({
            query: (id) => ({
                url: `/game/pastries/${id}`,
            }),
            providesTags: ["Pastry"]
        }),

        getWonPastry: build.query({
            query: (quantity) => ({
                url: `/game/win-pastries/${quantity}`,
            }),
            providesTags: ["Pastry"]
        }),
    })
})

export const {
    useSearchPastryByWordQuery,
    useGetAllPastryQuery,
    useGetPastryByIdQuery,
    useAddPastryMutation,
    useDeletePastryMutation,
    useUpdatePastryMutation,

    useGetAllGamePastryQuery,
    useGetGamePastryByIdQuery,
    useGetWonPastryQuery
} = pastrySlice
