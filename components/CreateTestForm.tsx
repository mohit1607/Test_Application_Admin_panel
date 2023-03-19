import React, { useEffect } from 'react'
import { Button } from './Button'
import { addTest } from '../api'
import { useSelector } from 'react-redux'

interface propTypes {
    displayPage: boolean,
    setDisplayPage: Function
}
export const CreateTestForm = ({ displayPage, setDisplayPage }: propTypes) => {
    // the parent is set to relative

    // on submit form there should be new added test and rerender the box component 
    // api call using test.
    const university = useSelector((state: any) => state.auth.university)
    const token = useSelector((state:any) => state.auth.token)

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        const data = new FormData(e.target)
        // important: validate the credentials according to the model
        const newTest: any = {
            name: data.get('name'),
            id: (Math.floor(Math.random() * 90000) + 100000).toString(),
            date: data.get('date'),
            duration: data.get('duration'),
            university: university
        }
        try {
            const res = await addTest(newTest,token) 
            console.log(res)
            alert('New Test created')
            setDisplayPage(!displayPage)
        } catch (e) {
            console.log('something went wrong')
        }
    }

    


    return (
        <div className='flex flex-col gap-4 absolute justify-center items-center h-[80%] w-[80%] z-20 bg-transparent backdrop-blur-sm'>
            <h1 className='text-2xl font-bold tracking-wider'>Add Test</h1>
            <div className='bg-slate-100 border shadow-lg h-[30rem] w-[26rem]'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className='p-4 flex flex-col justify-between items-center w-full gap-3'>
                        <input name='name' className='w-full p-4 border-2 border-green-700 focus:outl' placeholder='Test Name' type="text" />
                        <label className='mt-2' htmlFor="date">Select Date</label>
                        <input name='date' className='w-full p-4 border-2 border-green-700 focus:outl' type="date" />
                        <label htmlFor="duration">Set Duration (hours)</label>
                        <input defaultValue={1} step={0.5} name='duration' className='border w-full rounded-md p-2' placeholder='Set Hours' type="number" min={0} max={24} />
                    </div>
                    <div className='flex justify-between p-4'>
                        <Button onClick={() => setDisplayPage(!displayPage)} className='transition-all active:scale-95 hover:opacity-80 bg-red-500 text-white font-bold rounded-md w-[6rem] h-[3.5rem]'>Cancel</Button>
                        <Button type='submit' className='transition-all active:scale-95 hover:opacity-80 bg-green-500 rounded-md text-white font-bold w-[6rem] h-[3.5rem]' >Add Test</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
