import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/base";



export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getAllPosts: builder.query<QueryReturnType<null>, null>({
            query: (payload) => ({
                ...endPoint.auth.register(),
                data: payload,
            }),
        }),
    })
});

export const {
    useGetAllPostsQuery,
} = postsApi;