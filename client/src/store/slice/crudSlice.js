import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const crudSlice = createApi({
    reducerPath: "pastry",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api",
        credentials: "include"
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

        // GET : pastry by word
        getWordPastry: build.query({
            query: (word) => `/pastries-search/${word}`,
        }),

        //GET : total pastry
        getTotalPastry: build.query({
            query: () => "/pastries-count",
        }),

        // POST : add pastry
        addPastry: build.mutation({
            query: (pastry) => ({
                url: "/pastrie",
                method: "POST",
                body: pastry
            }),
        }),

        //PUT : update pastry
        updatePastry: build.mutation({
            query: ({ id, ...pastry }) => ({
                url: `/pastrie/${id}`,
                method: "PUT",
                body: pastry
            }),
        }),

        // DELETE : delete pastry
        deletePastry: build.mutation({
            query: (id) => ({
                url: `/pastrie/${id}`,
                method: "DELETE",
                body: id
            }),
        })

    })
})

export const {
    useGetWordPastryQuery,
    useGetAllPastryQuery,
    useGetPastryQuery,
    useAddPastryMutation,
    useDeletePastryMutation,
    useUpdatePastryMutation
} = crudSlice
