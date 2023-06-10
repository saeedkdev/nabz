"use client"
import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // if in server side, return null
        return null;
    }
    
    return (
        <>
           <AuthModal /> 
           <UploadModal />
        </>
    );
}

export default ModalProvider;
