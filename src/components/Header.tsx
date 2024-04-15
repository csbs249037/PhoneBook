import React from 'react'
import {UserButton} from "@clerk/nextjs"

export const Header = () => {
  return (
    <div className="Header flex justify-between items-center py-8 border px-10">
            <div className="text-3xl font-bold">PhoneBook</div>
            <div className="">
              <UserButton afterSignOutUrl="/" appearance={{
                elements:{
                  avatarBox: "h-[42px] w-[42px]"
                }
              }}/>
            </div>
    </div>
  )
}
