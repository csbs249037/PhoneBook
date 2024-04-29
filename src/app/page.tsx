import React from 'react'
import { Button } from "@/components/ui/button"
import Home from '../components/ui/Home'
import { InitialProfile } from '@/lib/initial-profile'




const page = async () => {
  const profile = await InitialProfile();
  
  
  return (
    <div className="">
    <Home/>
  </div>
  )
}

export default page