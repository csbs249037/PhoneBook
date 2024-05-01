import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db'
import Link from 'next/link';






export const Contacts =  async() => {
    const profile = await currentProfile();
    const contacts = await db.contact.findMany({
        where:{
            profileId:profile.id,
        }
    });
    if(!contacts || contacts.length === 0){
        return(
            <div className='Text-center text-black flex justify-center items-center'>there is No contact yet!</div>
        )
    }    
    
    return (
        <>
            {contacts.map((contact)=>(
            <div className='flex items-center gap-x-4 mb-4'>
            <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center capitalize font-bold text-white text-xl'>
                {contact.name.charAt(0)}
            </div>
            <div>
                <Link href={`/contact/${contact.id}`} className='text-black font-semibold text-lg hover:underline cursor-pointer'>{contact.name}</Link>
                <p className='text-slate-500'>{contact.phone}</p>
            </div>
        </div>
        ))}
        </>
    )
}    
