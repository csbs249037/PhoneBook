"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {Plus} from "lucide-react";
import { useModal } from '@/hooks/use-modal-store';

export const RightSide = () => {
    const {onOpen} = useModal();
return (
    <div className='p-4'>
        <div className='flex items-center gap-x-4 mb-4'>
            <div className='w-12 h-12 bg-blue-500 rounded-full'/>
            <div>
                <p className='text-black font-semibold text-lg'>ALice</p>
                <p className='text-slate-500'>123231232</p>
            </div>
            <div className="ml-auto">
                <Button onClick={()=>onOpen("createContact")} className="rounded-full text-sm p-2" ><Plus className=""/></Button>
            </div>
        </div>
        <div className='flex items-center gap-x-4 mb-4'>
            <div className='w-12 h-12 bg-indigo-100 rounded-full'/>
            <div>
                <p className='text-black font-semibold text-lg'>ALice</p>
                <p className='text-slate-500'>123231232</p>
            </div>
        </div>
        <div className='flex items-center gap-x-4 mb-4'>
            <div className='w-12 h-12 bg-green-500 rounded-full'/>
            <div>
                <p className='text-black font-semibold text-lg'>ALice</p>
                <p className='text-slate-500'>123231232</p>
            </div>
        </div>
    </div>
)
}
