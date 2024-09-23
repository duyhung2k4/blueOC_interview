import React from 'react';

import classes from "./style.module.css";
import { Avatar, Group } from '@mantine/core';

export type PostBox = {
    userId: number
    id: number
    title: string
    body: string
}

const PostBox: React.FC<PostBox> = (props) => {
    return (
        <div className={classes.box}>
            <Group>
                <Avatar color="blue" radius="xl">{props.userId}</Avatar>
                <p>UserId: {props.userId}</p>
            </Group>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
};

export default PostBox;
