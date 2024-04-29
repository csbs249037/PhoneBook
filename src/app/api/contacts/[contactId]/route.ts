import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
export async function PATCH(req:Request,{params}:{params:{contactId:string}}){
    try {
        const profile = await currentProfile();
    const {name,number,address,email} = await req.json();
    if(!profile){
        return new NextResponse("unAuthorized Access",{status:401})
    }
    if(!params.contactId){
        return new NextResponse("ContactId is missing",{status:400})
    }

    const contact = await db.contact.update({
        where:{
            id:params.contactId,
            profileId:profile.id,
        },
        data:{
            name,
            phone:number,
            address,
            email,
        }
    })
    return NextResponse.json(contact);
    } catch (error) {
        console.log("Internal Server Error",error);
        return new NextResponse("Internal Server Error",{status:500})
    }
}



export async function DELETE(req:Request,{params}:{params:{contactId:string}}){
    try {
        const profile = await currentProfile();
    if(!profile){
        return new NextResponse("unAuthorized Access",{status:401})
    }
    if(!params.contactId){
        return new NextResponse("ContactId is missing",{status:400})
    }

    const contact = await db.contact.delete({
        where:{
            id:params.contactId,
            profileId:profile.id,
        }
    })
    return NextResponse.json(contact);
    } catch (error) {
        console.log("Internal Server Error",error);
        return new NextResponse("Internal Server Error",{status:500})
    }
}

