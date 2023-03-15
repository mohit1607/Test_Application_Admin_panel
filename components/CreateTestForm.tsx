import React from 'react'
import { Button } from './Button'

interface propTypes{
    displayPage: boolean,
    setDisplayPage: Function
}
export const CreateTestForm = ({displayPage, setDisplayPage}: propTypes) => {
    // the parent is set to relative
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen w-screen relative -top-32 -left-[20rem] z-20 bg-transparent backdrop-blur-sm'>
        <h1 className='text-2xl font-bold tracking-wider'>Add Test</h1>
        <div className='bg-slate-100 border shadow-lg h-[30rem] w-[26rem]'>
            <form>
                <div className='flex justify-between p-4'>
                    <Button onClick={() => setDisplayPage(!displayPage)} className='transition-all active:scale-95 hover:opacity-80 bg-red-500 text-white font-bold rounded-md w-[6rem] h-[3.5rem]'>Cancel</Button>
                    <Button className='transition-all active:scale-95 hover:opacity-80 bg-green-500 rounded-md text-white font-bold w-[6rem] h-[3.5rem]' >Add Test</Button>
                </div>
            </form>
        </div>
    </div>
  )
}
