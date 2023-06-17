"use client"

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
    songId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
    songId
}) => {

    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModal();

    const { user } = useUser();

    const [isLiked, setIsLiked] = useState(false);
    
    useEffect(() => {
        if(!user?.id) return;
        const fetchData = async () => {
            const { data, error } = await supabaseClient
                .from("liked_songs")
                .select("*")
                .eq("user_id", user.id)
                .eq("song_id", songId)
                .single();
            if(error) {
                console.log(error);
                return;
            }
            if(data) {
                console.log(data);
                setIsLiked(true);
            }
        }
        fetchData();
    }, [songId, supabaseClient, user?.id]);

    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

    const handleLike = async () => {
        if(!user?.id) {
            return authModal.onOpen();
        }

        if(isLiked) {
            const { error } = await supabaseClient
                .from("liked_songs")
                .delete()
                .eq("user_id", user.id)
                .eq("song_id", songId);
            if(error) {
                toast.error(error.message);
                return;
            }
            setIsLiked(false);
        }

        if(!isLiked) {
            const { error } = await supabaseClient
                .from("liked_songs")
                .insert({
                    user_id: user.id,
                    song_id: songId
                });
            if(error) {
                toast.error(error.message);
                return;
            }
            setIsLiked(true);
            toast.success("Liked!");
        }

        // router.refresh();
    }

    return (
        <button
            className="hover:opacity-75 transition" onClick={handleLike}>
            <Icon color={isLiked ? "#009688" : "white"} size={25} />
        </button>
    )

}

export default LikeButton;
