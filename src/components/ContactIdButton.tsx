"use client"
import React from 'react'
import { Button } from './ui/button'
import { useModal } from '@/hooks/use-modal-store'
import { Contact } from '@prisma/client'

interface ContactIdButtonProps{
    contact:Contact
}

    export const ContactIdButton = ({contact}:ContactIdButtonProps) => {

    const {onOpen} = useModal();

    return (
            <div className='flex gap-x-3 mt-3 justify-center'>
                <Button className='bg-rose-500 hover:bg-rose-400' onClick={()=>onOpen("deleteContact",{contact})}>Delete</Button>
                <Button className='px-6 bg-emerald-500 hover:bg-emerald-400' onClick={()=>onOpen("editContact",{contact})}>Edit</Button>
            </div>
        
    )
}
