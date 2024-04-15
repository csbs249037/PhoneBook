
import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export const Sidebar = () => {
  return (
      <div className="h-screen">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                  <LeftSide/>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                  <RightSide/>
                </ResizablePanel>
            </ResizablePanelGroup>
      </div>
  )
}
