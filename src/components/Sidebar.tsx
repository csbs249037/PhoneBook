
import React from 'react'
import { db } from "@/lib/db";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export const Sidebar = async() => {
  const contactNames = await db.contact.findMany();
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
