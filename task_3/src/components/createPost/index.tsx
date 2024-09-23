import React from "react";
import { Modal, Button, TextInput, Textarea, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";



export type CreatePostProps = {
    modal: boolean
    setModal: (value: boolean) => void
    callback?: (value: NewPostType) => void
};

const CreatePost: React.FC<CreatePostProps> = (props) => {
    const form = useForm<NewPostType>({
        initialValues: {
            userId: 0,
            title: "",
            body: "",
        },
        validate: {
            userId: (value) => value <= 0 ? "id must be greater than 0" : null,
            title: (value) => value.length < 5 ? "title must have at least 5 characters" : null,
            body: (value) => value.length < 10 ? "title must have at least 10 characters" : null,
        }
    })

    const handleSubmit = (values: NewPostType) => {
        props.callback && props.callback(values);
        props.setModal(false);
    };

    return (
        <>
            <Modal opened={props.modal} onClose={() => props.setModal(false)} title="Add New Post">
                <form id="create-post" onSubmit={form.onSubmit(handleSubmit)}></form>
                <NumberInput
                    label="User ID"
                    name="userId"
                    {...form.getInputProps("userId")}
                    required
                />
                <TextInput
                    label="Title"
                    name="title"
                    {...form.getInputProps("title")}
                    required
                />
                <Textarea
                    label="Body"
                    name="body"
                    {...form.getInputProps("body")}
                    required
                />
                <Button fullWidth mt="md" type="submit" form="create-post">
                    Submit
                </Button>
            </Modal>
        </>
    );
};

export default CreatePost;

export type NewPostType = {
    userId: number
    title: string
    body: string
}