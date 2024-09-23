export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
}

export const endPoint = {
    posts: {
        getAllPosts: () => ({
            url: "posts",
            method: "GET",
            headers: HEADER.defaultHeader(),
        }),
    },
}