/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { SidebarLayout, ProtectedRoute, Button } from '../components'
import { createQuestions } from '../api'
import { useSelector } from 'react-redux'

// Now it is only limited to json file component.

const TestConfigComp = () => {
  const router = useRouter()
  const query: any = router.query

  const token = useSelector((state: any) => state.auth.token)
  const [file, setFile] = useState<any>() // cuz I dont know about the filetype
  const [fileData, setFileData] = useState<any[]>()

  const handleFileInput = async() => {
    try{
      if (file.type === 'application/json') {
        let fileReader = new FileReader()
        fileReader.readAsText(file)
        fileReader.onload = (e: any) => {
          console.log(JSON.parse(e.target.result))
          setFileData(JSON.parse(e.target.result).questions)
        }
        console.log(query.objectId)
      } else {
        alert('No file is submitted.')
      }
      console.log(file)
    }catch(e) {
      alert('please upload the questions file first.')
    }
  }

  const submitQuestionsToDB = async() => {
    if(fileData){
      try {
        const res = await createQuestions({
          testId: query.objectId,
          questions: fileData
        }, token)
        const data = await res.data
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }else{
      alert("You did'nt upload any file to submit.")
    }
  }


  return (
    <SidebarLayout>
      <div className='p-4'>
        <div className='flex gap-4'>
          <Button
            className='rounded-md bg-purple-700 text-white font-semibold text-center p-4 trasition-linear mr-4'
          >
            <label htmlFor="file">Upload questionset : </label>
            <input
              onChange={(e: any) => setFile(e.target.files[0])}
              type="file"
              name='file'
              className='overflow-hidden w-[15rem]'
              accept='.json' />
          </Button>
          <Button onClick={handleFileInput} className='rounded-md bg-yellow-500 text-white font-semibold text-center p-4 trasition-linear transition-linear duration-150 active:scale-95' >Check</Button>
          <Button onClick={() => submitQuestionsToDB()}  className='rounded-md bg-green-500 text-white font-semibold text-center p-4 trasition-linear transition-linear duration-150 active:scale-95' >Submit</Button>
          
        </div>
        <div className='p-4 w-full h-[80vh] overflow-auto bg-slate-200 mt-4 rounded-md'>
          <p className='text-slate-400'> // Your data will be shown here</p>
          {
            fileData && <pre>{JSON.stringify(fileData, null, 3)}</pre>
          }
        </div>
      </div>
    </SidebarLayout>
  )
}

const testConfig = () => {
  return (
    // <ProtectedRoute>
    //     <TestConfigComp>

    //     </TestConfigComp>
    // </ProtectedRoute>
    <TestConfigComp></TestConfigComp>
  )
}

export default testConfig
