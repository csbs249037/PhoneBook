   "use client"
   import React, { useState } from 'react'

   import {Star,Clock,User, Search} from "lucide-react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { Contact } from '@prisma/client';
import Link from 'next/link';

interface leftSideProps{
   contactNames:Contact[];
}

   export const LeftSide = ({contactNames}:leftSideProps) => {
      const [open,setOpen] = useState(false);

   return (
      <div className="p-4">
         <button onClick={()=>setOpen(true)} className='group p-2 rounded-md flex items-center w-full gap-x-2 hover:bg-zinc-700/10 transition'>
            <Search className='w-4 h-4 text-zinc-500'/>
            <p className='font-semibold text-md text-zinc-500 transition'>Search</p>
         </button>
         <CommandDialog open={open} onOpenChange={()=>setOpen(false)}>
            <CommandInput placeholder="Search Contacts..."/>
            <CommandList>
               <CommandEmpty>No results Found</CommandEmpty>
               <CommandGroup heading="Names">
                  {contactNames.map((c:Contact)=>(
                     <Link href={`/contact/${c.id}`}><CommandItem>{c.name}</CommandItem></Link>
                  ))}
               </CommandGroup>
            </CommandList>
         </CommandDialog>
         <div className="mt-4 cursor-pointer">
               <div className="flex gap-x-2 items-center mb-2 hover:bg-zinc-700/10 p-1 rounded-md">
                  <Star className="w-5 h-5 text-slate-800"/>
                  <p className="text-xl font-medium">Favorite</p>
               </div>
               <div className="flex gap-x-2 items-center mb-2 hover:bg-zinc-700/10 p-1 rounded-md">
                  <Clock className="w-5 h-5 text-slate-800"/>
                  <p className="text-xl font-medium">Recent</p>
               </div>
               <div className="flex gap-x-2 items-center mb-2 hover:bg-zinc-700/10 p-1 rounded-md">
                  <User className="w-5 h-5 text-slate-800"/>
                  <p className="text-xl font-medium">All Contacts</p>
               </div>
         </div>
      </div>
   )
   }
