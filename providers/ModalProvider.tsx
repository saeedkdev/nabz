"use client"
import Modal from "@/components/Modal";
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
            <Modal title="Test Modal"
            description="Testing modals now"
            open
            onChange={() => {}}
            children={<div>Test</div>}
            />
        </>
    );
}

export default ModalProvider;
