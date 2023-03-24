import React, { useEffect,  useState } from 'react'
import { SidebarLayout, Button, StudentForm, ProtectedRoute } from '../components'
import { useSelector } from 'react-redux'
import { getAllStudentsByUniversity, deleteStudent } from '../api'

const students = () => {

  const university = useSelector((state: any) => state.auth.university)
  const [addUserWindow, setAddUserWindow] = useState<Boolean>(false)
  const [students, setStudents] = useState<[any]>([])
  const [deleted, setDeleted] = useState<Boolean>(false) // only to force update the component on delete item

  useEffect(() => { // this should be global
    const getAllStudnts = async () => {
      try {
        const res = await getAllStudentsByUniversity(university)
        const data = await res.data
        console.log(data.allStudents)
        setStudents(data.allStudents)
        // setDeleted(!deleted)
      } catch (e) {
        console.log(e)
      }
    }
    getAllStudnts() //this is causing infinite loop
  }, [deleted])

  const deleteThisStudent = async (userId: any) => {
    try {
      const res = await deleteStudent({ userId })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ProtectedRoute>
      <SidebarLayout>
        <div className={`p-4 w-full h-full relative`}>
          {
            addUserWindow && <StudentForm triggerRerender={setDeleted} university={university} setAddUserWindow={setAddUserWindow} ></StudentForm>
          }
          <div className='flex gap-4'>
            <Button onClick={() => setAddUserWindow(true)} className='bg-blue-600 text-white font-semibold px-8 rounded-md transition-all ease-linear active:scale-95 py-3'>Add Student</Button>
            <Button className='bg-blue-600 text-white font-semibold px-8 rounded-md transition-all ease-linear active:scale-95 py-3'>Upload a file</Button>
          </div>
          <div className='bg-slate-100 w-full h-full mt-4 rounded-lg overflow-auto relative pt-12'>
            <div className='flex p-3 bg-blue-500 absolute top-0 w-full' >
              <div className='flex-1 text-white text-center font-bold' >Students Name</div>
              <div className='flex-1 text-white text-center font-bold' >Roll Number</div>
              <div className='flex-1 text-white text-center font-bold' >Student ID</div>
              <div className='flex-1 text-white text-center font-bold' ></div>
            </div>
            {
              students.map((curr: any, index: number) => {
                return (
                  <div key={curr.rollNumber + index} className='flex p-3' >
                    <div className='flex-1 text-center font-bold' >{curr.name}</div>
                    <div className='flex-1  text-center font-bold' >{curr.rollNumber}</div>
                    <div className='flex-1  text-center font-bold' >{curr.userId}</div>
                    <div className='flex-1  text-center font-bold' ><p onClick={async() => {
                       deleteThisStudent(curr.userId).then(() => setDeleted(!deleted))
                       
                    }} className='cursor-pointer w-[4rem] text-center text-sm rounded-md text-white bg-red-500'>delete</p></div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </SidebarLayout>
    </ProtectedRoute>
  )
}



export default students