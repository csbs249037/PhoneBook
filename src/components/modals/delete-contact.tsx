"use client"
import React, { useState } from 'react'
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogTitle,DialogHeader} from '../ui/dialog'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/use-modal-store'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const DeleteContact = () => {
    const {type,isOpen,onClose,data} = useModal();
    const {contact} = data;
    const ModalOpen = isOpen && type === "deleteContact"
    const router = useRouter();
    const [isLoading,setLoading] = useState(false);
    const handleClick = async()=>{
        try {
            setLoading(true);
            await axios.delete(`/api/contacts/${contact?.id}`)
            onClose();
            router.refresh();
            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false);
        }
        
    }

    return (
        <Dialog open={ModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-xl font-bold text-center'>Delete Contact</DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>Are you sure you want to Delete  <span className='text-indigo-500 font-semibold'>{contact?.name}</span>?</DialogDescription>
                </DialogHeader>
                <DialogFooter className='bg-gray-100 px-6 py-4'>
                    <div className='flex items-center justify-between w-full'>
                        <Button disabled={isLoading} variant='ghost' onClick={onClose}>Cancel</Button>
                        <Button disabled={isLoading} className="bg-rose-500 hover:bg-rose-400" onClick={handleClick}>Confirm</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteContact