"use client"
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import useUploadModal from "@/hooks/useUploadModel"

const Library = () => {

    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user, userDetails } = useUser();

    const onClick = () => {
        if(!user) {
            return authModal.onOpen();
        }

        uploadModal.onOpen();

    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={20} className="text-neutral-400"/>
                    <p className="text-neutral-400 font-md text-md">Your Library</p>
                </div>
                {userDetails?.is_admin && (
                <AiOutlinePlus size={20} 
                    onClick={onClick}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"/>
                )}
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Songs
            </div>
        </div>
    )
}

export default Library;
