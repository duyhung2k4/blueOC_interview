import React, { useEffect, useState } from "react";
import PostBox from "@/components/post";
import CreatePost, { NewPostType } from "@/components/createPost";

import { useGetAllPostsQuery } from "@/redux/api/post";
import { Button, Group, Loader, Stack } from "@mantine/core";
import { PostModel } from "@/model/post";



const Posts: React.FC = () => {
    const [modalCreatePost, setModalCreatePost] = useState<boolean>(false);
    const [posts, setPosts] = useState<PostModel[]>([]);

    const {
        data,
        refetch,
        isFetching
    } = useGetAllPostsQuery(null);

    const handleReload = () => refetch();
    const handleNew = () => setModalCreatePost(true);
    const handleCreatePost = (value: NewPostType) => {
        if (posts.length === 0) return;

        const newPost: PostModel = {
            id: posts.length === 100 ? posts[99].id + 1 : posts[0].id + 1,
            ...value,
        }
        setPosts([newPost, ...posts]);
    }

    useEffect(() => {
        setPosts(data || []);
    }, [data]);

    useEffect(() => {
        refetch();
    }, []);

    console.log(posts)

    return (
        <>
            <Stack p={16} pos="relative">
                <Group justify="end">
                    <Button onClick={handleReload}>Reload</Button>
                    <Button onClick={handleNew} color="green">New</Button>
                </Group>
                <Stack align="center">

                    {
                        isFetching ?
                            <Loader color="blue" /> :
                            posts.map(p => <PostBox key={p.id} {...p} />)
                    }
                </Stack>
            </Stack>
            <CreatePost
                modal={modalCreatePost}
                setModal={setModalCreatePost}
                callback={handleCreatePost}
            />
        </>
    )
}

export default Posts;