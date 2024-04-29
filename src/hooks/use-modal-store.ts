import { Contact } from "@prisma/client";
import {create} from "zustand";

export type ModalType ="createContact" | "editContact" | "deleteContact";


interface ModalData{
    contact?:Contact;
}

interface ModalStore{
    type:ModalType | null;
    data:ModalData;
    isOpen:boolean;
    onOpen:(type:ModalType)=>void;
    onClose:()=>void
}


export const useModal = create<ModalStore>((set)=>({
    type:null,
    data:{},
    isOpen:false,
    onOpen:(type,data={})=>set({isOpen:true,type,data}),
    onClose:()=>set({isOpen:false,type:null})
}))