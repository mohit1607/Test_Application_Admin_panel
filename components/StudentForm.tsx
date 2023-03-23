import React from 'react'
import { Button } from './Button'
import { createStudent } from '../api'

interface propType{
setAddUserWindow: Function,
university: string,
triggerRerender: Function,
}


export const StudentForm = ({setAddUserWindow, university, triggerRerender}: propType) => {

  const handleOnSubmit = async (e:any) => {
    e.preventDefault()
    try{
      const data = new FormData(e.target)
      // validation required for the confirm password
      // dnager for the following fields can be null
      const name : any = data.get('name')
      const rollNumber : any = data.get('rollNumber')
      const password : any = data.get('password')
      if (data.get('password') === data.get('confirmPassword')) {
        if(name && password && rollNumber) {
          const res = await createStudent({
            name, rollNumber, password, university,
            userId:( Math.floor(Math.random()* 90000)*100000-1).toString()
          })
          const thisData = await res.data
          console.log(thisData)
        }
        // console.log(data)
        setAddUserWindow((prev:Boolean) => !prev)
        triggerRerender((prev: Boolean) => !prev)
      } else {
        alert('Password should match')
      }
    }catch(e) {
      console.log(e)
    }
  }
  
  return(
    <div className='w-[100%] h-full absolute flex justify-center backdrop-blur-sm z-30'>
      <div className='w-[25rem] h-[30rem] bg-white z-10 p-3 rounded-md mt-8 border'>
        <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
          <h1 className='text-xl text-center'>Add a Student</h1>
          <input className='focus:outline-none border-4 border-green-700 p-4' placeholder='Name' name='name' type="text" />
          <input className='focus:outline-none border-4 border-green-700 p-4' placeholder='Roll Number' name='rollNumber' type="number" />
          <input className='focus:outline-none border-4 border-green-700 p-4' placeholder='Password' name='password' type="password" />
          <input className='focus:outline-none border-4 border-green-700 p-4' placeholder='Confirm Password' name='confirmPassword' type="password" />
          <div className='w-full flex justify-between' >
            <Button onClick={() => setAddUserWindow((prev: Boolean) => !prev)} className='rounded-md p-4 bg-red-500 text-white font-semibold' >Cancel</Button>
            <Button type='submit' className='rounded-md p-4 bg-green-500 text-white font-semibold' >Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
