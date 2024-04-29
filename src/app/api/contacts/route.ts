import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const {name,number} = await req.json();
        const profile = await currentProfile();
        if(!profile){
            return new NextResponse("UnAuthorized access!",{status:401});
        }
        const contact = await db.contact.create({
            data:{
                profileId:profile.id,
                name,
                phone:number,
            }
        })
        return NextResponse.json(contact);
    } catch (error) {
        console.log("Contact",error);
        return new NextResponse("Internal Server Error",{status:500})
    }
}