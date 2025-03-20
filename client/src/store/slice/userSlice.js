import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userSlice = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        credentials: "include",
    }),
    tagTypes: ["User"],

    endpoints: (build) => ({
        login: build.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"],
        }),

        logout: build.mutation({
            query: () => ({
                url: "/logout",
                method: "GET",
            }),
            invalidatesTags: ["User"],
        }),
        getUser: build.query({
            query: () => "/me",
            providesTags: ["User"]
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useGetUserQuery
} = userSlice
