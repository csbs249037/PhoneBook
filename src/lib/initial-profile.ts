import { db } from "./db";
import {currentUser,redirectToSignIn} from "@clerk/nextjs";

export async function InitialProfile() {
    const user = await currentUser();
    if(!user){
        return redirectToSignIn();
    }
    const profile = await db.profile.findUnique({
        where:{
            userId:user.id,
        }
    })
    if(profile){
        return profile;
    }

    if(!profile){
        const newProfile = await db.profile.create({
            data:{
                userId:user.id,
                name:`${user.firstName} ${user.lastName}`,
                imageUrl:user.imageUrl,
                email:user.emailAddresses[0].emailAddress
            }
        })
        return newProfile;
    }
}