"use client"
import { useState,useEffect } from "react"
import CreateContact from "../modals/create-contact";



export const ModalProvider = () => {
    const [isMounted,setisMounted] = useState(false);
    useEffect(()=>{
        setisMounted(true);
    },[])
    if(!isMounted){
        return null;
    }
    return (
        <>
            <CreateContact />
        </>
    )
}
