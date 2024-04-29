"use client"
import React from 'react'
import { Button } from './ui/button'
import {Plus} from "lucide-react";
import { useModal } from '@/hooks/use-modal-store';

export const CreateContactButton = () => {
    const {onOpen} = useModal();
    return (
        <div className='ml-auto p-2 mr-2'>
                <Button onClick={()=>onOpen("createContact")} className="rounded-full text-sm p-2" ><Plus className=""/></Button>
        </div>
    )
}
