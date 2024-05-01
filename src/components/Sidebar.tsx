
import React from 'react'
import { db } from "@/lib/db";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import { currentProfile } from '@/lib/current-profile';

export const Sidebar = async() => {
  const profile = await currentProfile();
  const contactNames = await db.contact.findMany({
    where:{
      profileId:profile?.id,
    }
  });
  return (
      <div className="h-screen">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                  <LeftSide contactNames={contactNames}/>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                  <RightSide/>
                </ResizablePanel>
            </ResizablePanelGroup>
      </div>
  )
}
