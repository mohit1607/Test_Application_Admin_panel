import React from 'react'

interface propTypes {
    name: string,
    duration: string,
    date: string,
}

export const TestCard = ({ name = 'dummyTest', duration = '02:45:00', date = '12/04/2023' }: propTypes) => {
    return (
        <div className='p-4 rounded shadow-lg w-[12rem] bg-yellow-200'>
            <h1 className='text-xl'>{name}</h1>
            <hr className='h-[1px] bg-black border-none mb-2' />
            <div className='flex justify-between'>
                <p className='font-semibold'>Duration:</p>
                <p className='font-semibold'>Date:</p>
            </div>
            <div className='flex justify-between'>
                <p>{duration}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}
