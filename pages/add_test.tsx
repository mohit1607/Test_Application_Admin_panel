import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import {
  SidebarLayout,
  TestCard,
  Button,
  ProtectedRoute,
  CreateTestForm
} from '../components'
import { useSelector } from 'react-redux'
import { getAllTests } from '../api'
// protected route is working good but there is a problem in refreshing page 


const addTest: NextPage = () => {

  // add Test as TestCard
  const token = useSelector((state: any) => state.auth.token)

  const [createTest, setCreateTest] = useState<boolean>(false)
  const [tests, setTests] = useState<any[]>()

  useEffect(() => {
    const getAllTestsHere = async() => {
      try{
        const res = await getAllTests(token)
        const data = await res.data
        // console.log(data.allTests)
        setTests(data.allTests)
      } catch(e) {
        console.log('something went wrong')
      }
    }
    getAllTestsHere()
  })

  return (
    <ProtectedRoute>
      <SidebarLayout>
        <div className='w-full h-full p-8 flex flex-col gap-4'>
          {
            createTest ? <CreateTestForm displayPage={createTest} setDisplayPage={setCreateTest} /> : ''
          }
          <Button onClick={() => { setCreateTest(!createTest) }} className='p-4 rounded-xl bg-blue-600 font-semibold tracking-wider text-white active:scale-90 transition-all w-40 items-center' >Add Test</Button>
          <div className='w-full h-full bg-slate-100 shadow-lg rounded-lg px-[4.5rem] py-4 flex gap-8 overflow-auto flex-wrap'>
            {
              tests?.map((curr, index) => {
                return(
                  <TestCard key={index + 291} name={curr.name} duration={curr.duration} date={curr.date}></TestCard>
                )
              })
            }
          </div>
        </div>
      </SidebarLayout>
    </ProtectedRoute>
  )
}

export default addTest
