import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Button } from './Button'


interface propTypes {
  children: JSX.Element | string
}

export const SidebarLayout = ({ children }: propTypes) => {
  // I just have to made different pages with sidebar layout that's it.
  //  for sidebar we will be using useMemo so that it should not rerender everytime.

  const [fullWidth, setFullWidth] = useState<Boolean>(false)

  return (
    <div className="w-full h-[100vh] flex">
      <Sidebar fullWidth={fullWidth} setFullWidth={setFullWidth}></Sidebar>
      <div className={`${fullWidth ? 'w-[95%]' : 'w-[80%]'}`}>
        {children}
      </div>
    </div>
  )
}
