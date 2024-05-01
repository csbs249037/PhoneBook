import { ContactIdButton } from '@/components/ContactIdButton';
import { FavButton } from '@/components/FavButton';
import { Button } from '@/components/ui/button';
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { redirectToSignUp } from '@clerk/nextjs';
import { BookUser, Mail, Phone } from 'lucide-react'
import React from 'react'

const page = async({params}:{params:{contactId:string}}) => {




    const profile = await currentProfile();
    if(!profile){
        return redirectToSignUp();
    }
    const contact = await db.contact.findUnique({
        where:{
            id:params.contactId,
        }
    })
    return (
        <div>
            <div>
            <div className='bg-slate-100 h-72 flex items-center justify-center'>
                    <div>
                        <div className='w-52 h-52 flex justify-center items-center capitalize bg-blue-500 rounded-full text-white font-bold text-8xl mb-2 ml-32'>
                            {contact?.name.charAt(0)}
                        </div>
                        <div className='flex gap-x-5 items-center'>
                            <p className='text-black text-5xl font-semibold text-center capitalize flex justify-center ml-40'>{contact?.name}</p>
                        </div>
                    </div>
            </div>
            <div className='flex justify-center mt-20'>
                    <div>
                    <div className='flex items-center gap-x-5 mb-5'>
                            <Phone className='w-10 h-10'/>
                            <div>
                                <p className='font-bold text-xl'>Phone</p>
                                <p>{contact?.phone}</p>
                            </div>
                    </div>
                    <div className='flex items-center gap-x-5 my-5'>
                            <BookUser className='w-10 h-10'/>
                            <div>
                                <p className='font-bold text-xl'>Address</p>
                                {!contact?.address || contact?.address?.length === 0 ? (<p className='text-slate-500 text-xs'>Not registered yet!</p>) : <p>{contact?.address}</p>}
                            </div>
                    </div>
                    <div className='flex items-center gap-x-5 my-5'>
                            <Mail className='w-10 h-10'/>
                            <div>
                                <p className='font-bold text-xl'>Email</p>
                                {!contact?.email || contact?.email?.length === 0 ? (<p className='text-slate-500 text-xs'>Not registered yet!</p>) : <p>{contact?.email}</p>}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactIdButton contact={contact} />
        </div>
    )
}

export default page