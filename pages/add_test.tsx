import { NextPage } from 'next'
import React,{useState} from 'react'
import { SidebarLayout,
   TestCard,
    Button,
    ProtectedRoute,
    CreateTestForm
     } from '../components'
// protected route is working good but there is a problem in refreshing page 

const addTest: NextPage = () => {

  // add Test as TestCard
 
   const [createTest, setCreateTest] = useState<boolean>(false)


  return (
    <ProtectedRoute>
      <SidebarLayout>
        <div className='w-full h-full p-8 flex flex-col gap-4'>
          <Button onClick={() => {setCreateTest(!createTest) }} className='p-4 rounded-xl bg-blue-600 font-semibold tracking-wider text-white active:scale-90 transition-all w-40 items-center' >Add Test</Button>
          <div className='w-full h-full bg-slate-100 shadow-lg rounded-lg p-4'>
            {/* <TestCard></TestCard> */}
            {
              createTest ? <CreateTestForm displayPage={createTest} setDisplayPage={setCreateTest} /> : ''
            }
          </div>
        </div>
      </SidebarLayout>
    </ProtectedRoute>
  )
}

export default addTest
