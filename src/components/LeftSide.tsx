"use client"
import React from 'react'
import { Input } from './ui/input'
import {Star,Clock,User} from "lucide-react"


export const LeftSide = () => {
  return (
    <div className="p-4">
        <Input/>
        <div className="mt-4">
            <div className="flex gap-x-2 items-center mb-2">
               <Star className="w-5 h-5 text-slate-800"/>
               <p className="text-xl font-medium">Favorite</p>
            </div>
            <div className="flex gap-x-2 items-center mb-2">
               <Clock className="w-5 h-5 text-slate-800"/>
               <p className="text-xl font-medium">Recent</p>
            </div>
            <div className="flex gap-x-2 items-center mb-2">
               <User className="w-5 h-5 text-slate-800"/>
               <p className="text-xl font-medium">All Contacts</p>
            </div>
        </div>
    </div>
  )
}
