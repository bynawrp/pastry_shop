import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const connectSlice = createApi({
    reducerPath: "authUser",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        credentials: "include", // Inclut les cookies si ton API gère la session avec des cookies
    }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        login: build.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["User"]
        }),
        logout: build.query({
            query: () => "/logout",
            providesTags: ["User"]
        }),
        getUser: build.query({
            query: () => "/me", // Endpoint pour récupérer l'utilisateur connecté
            providesTags: ["User"]
        })
    })
});

export const {
    useLoginMutation,
    useLogoutQuery,
    useGetUserQuery
} = connectSlice;
