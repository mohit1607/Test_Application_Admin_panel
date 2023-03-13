import { NextPage } from 'next'
import React from 'react'
import { SidebarLayout, TestCard, Button } from '../components'

const addTest: NextPage = () => {

  // add Test as TestCard

  return (
    <SidebarLayout>
        <div className='w-full h-full p-8 flex flex-col gap-4'>
          <Button onClick={() => {}} className='p-4 rounded-xl bg-blue-600 font-semibold tracking-wider text-white active:scale-90 transition-all w-40 items-center' >Add Test</Button>
          <div className='w-full h-full bg-slate-100 shadow-lg rounded-lg p-4'>
           <TestCard></TestCard>
          </div>
        </div>
    </SidebarLayout>
  )
}

export default addTest
