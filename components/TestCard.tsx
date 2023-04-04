import React from 'react'
import { Button } from './Button'
import { deleteTest, deleteAllQuestionsById } from '../api'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


interface propTypes {
    name: string,
    startTime: string,
    endTime: string,
    date: string,
    id: string,
    objectId: string
}

export const TestCard = ({ name = 'dummyTest', id = '112235', startTime, endTime , date = '12/04/2023', objectId }: propTypes) => {

    const token = useSelector((state: any) => state.auth.token)
    const router = useRouter()

    const deleteFun = async(id: string) => {
      try{
          const res = await deleteTest(id, token)
          const data = await res.data
        //   console.log(data)
        deleteAllQuestionsOfTest()
      }catch(e) {
        // console.log(e)
        alert('Delete operation failed due to some unknown reason.')
      }
    }

    const updateFun = async() => {

    }

    const deleteAllQuestionsOfTest = async() => {
        const res = await deleteAllQuestionsById({testId: objectId}, token)
        const data = await res.data
        console.log(data)
    }

    const headToTestConfigPage = () => {
        router.push({
            pathname: '/test_config',
            query: {
                name, id, startTime, endTime, date, objectId
            }
        })
    }

    return (
        <div onClick={() => headToTestConfigPage()} className='p-4  cursor-pointer rounded shadow-lg w-[16rem] h-[12rem] bg-yellow-200 flex flex-col justify-between'>
            <h1 className='text-xl hover:underline'>{name}</h1>
            <hr className='h-[1px] bg-black border-none mb-2' />
            <div className='flex justify-between'>
                <p className='font-semibold'>Start Time:</p>
                <p className='font-semibold'>Date:</p>
            </div>
            <div className='flex justify-between'>
                <p>{startTime}</p>
                <p>{date}</p>
            </div>
            <div className='mt-2 flex justify-between'>
                <Button className='py-2 px-4 text-white rounded bg-red-400 ' onClick={() => deleteFun(id)}>D</Button>            </div>
        </div>
    )
}
