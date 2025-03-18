import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crudSlice = createApi({
    reducerPath: "crud",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api",
        credentials: "include"
    }),
    tagTypes: ["Crud"],
    endpoints: (build) => ({

        // GET : all pastry
        getAllPastry: build.query({
            query: () => "/pastries",
            providesTags: ["Crud"]
        }),

        // GET : pastry by id
        getPastry: build.query({
            query: (id) => `/pastrie/${id}`,
            providesTags: (id) => [{ type: "Crud", id }],
        }),

        //GET : total pastry
        getTotalPastry: build.query({
            query: () => "/pastries-count",
            providesTags: ["Crud"]
        }),

        // POST : add pastry
        addPastry: build.mutation({
            query: (pastry) => ({
                url: "/pastrie",
                method: "POST",
                body: pastry
            }),
            invalidatesTags: ["Crud"]
        }),

        //PUT : update pastry
        updatePastry: build.mutation({
            query: (pastry) => ({
                url: `/pastrie/${id}`,
                method: "PUT",
                body: pastry
            }),
            invalidatesTags: ["Crud"]
        }),

        // DELETE : delete pastry
        deletePastry: build.mutation({
            query: (id) => ({
                url: `/pastrie/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Crud"],
        })

    })
});

export const {
    useGetAllPastryQuery,
    useGetPastryQuery,
    useAddPastryMutation,
    useDeletePastryMutation,
    useUpdatePastryMutation
} = crudSlice;
