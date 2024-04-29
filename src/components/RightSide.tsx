
import React from 'react'
import { Button } from "@/components/ui/button"

import { CreateContactButton } from './CreateContactButton'
import { Contacts } from './Contact'



export const RightSide = () => {
    
return (
    <div className='flex'>
        <div className='p-4'>
        <Contacts />
    </div>
    <CreateContactButton />
    </div>
    
)
}
