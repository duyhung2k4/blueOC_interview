import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { PostModel } from "@/model/post";



export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getAllPosts: builder.query<PostModel[], null>({
            query: (payload) => ({
                ...endPoint.posts.getAllPosts(),
                data: payload,
            }),
        }),
    })
});

export const {
    useGetAllPostsQuery,
} = postsApi;