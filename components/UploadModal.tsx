"use client"

import useUploadModal from "@/hooks/useUploadModel"
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";

const UploadModal = () => {

    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    });

    const onChange = (open: boolean) => {
        if(!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);

            const imageFile = values.image?.[0];
            const songFile = values.song?.[0];

            if(!imageFile || !songFile || !user) {
                toast.error('Missing fields');
                return;
            }


        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Modal
            title="Upload new music"
            description="Upload content to the platform"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <Input 
                    id="title"
                    disabled={isLoading}
                    {...register('title', { required: true })}
                    placeholder="Song Title"
                />
                <Input 
                    id="author"
                    disabled={isLoading}
                    {...register('author', { required: true })}
                    placeholder="Song Author"
                />
                <div>
                    <div className="pb-2">
                        Select mp3 file
                    </div>
                    <Input
                        id="song"
                        type="file"
                        disabled={isLoading}
                        accept=".mp3"
                        {...register('song', { required: true })}
                    />
                </div>
                <div>
                    <div className="pb-2">
                        Select a Cover
                    </div>
                    <Input
                        id="image"
                        type="file"
                        disabled={isLoading}
                        accept=".jpg"
                        {...register('image', { required: true })}
                    />
                </div>
                <Button className="text-white" disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
    )

}

export default UploadModal
