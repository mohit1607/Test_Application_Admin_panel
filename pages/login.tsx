import React, { useState } from 'react'
import { Button } from '../components'
import { adminLogin } from '../api'
import {  useDispatch } from 'react-redux'
import { setUserAndToken } from '../features/authSlice'
import { useRouter } from 'next/router'

const Login = () => {

    //redux method
    let dispatch = useDispatch()
    const router = useRouter()

    const [signUp, setSignUp] = useState<Boolean>(false)
    // hardcoding volatile values will change to form in future.
    const [loginEmail, setLoginEmail] = useState<string>('')
    const [loginPassword, setLoginPassword] = useState<string>('')

    const Login = async() => {
        const newObj ={
            email: loginEmail,
            password: loginPassword
        }
        try{
            const res = await adminLogin(newObj)
            //name in response is not enough you should also bring admin id and university.
            //so that you can create test based on that university and admin.
            const {data} = await res // have to change it. very  vulnerable.
            // console.log(res)
            const {user}: any = await data
            const {name, token} =  user 
            // alert(token)
            dispatch(setUserAndToken({name,token}))
            router.push('/dashboard')
        } catch(e) {
            alert('Login Error')
            // console.log(e)
        }
    }

    const SignUp = () => {

    }

    return (
        <div className='h-[100vh] w-full flex justify-center'>
            {
                signUp ?
                    <div className='w-[22rem] bg-white flex justify-center flex-col text-center gap-4'>
                        <h1 className='font-bold text-2xl'>Test Admin Registration</h1>
                        <div className='border-4 p-4 border-green-800'>
                            <input type="text" placeholder='UserId' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <div className='border-4 p-4 border-green-800'>
                            <input type="text" placeholder='University' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <div className='border-4 p-4 border-green-800 bg-white'>
                            <input type="password" placeholder='Password' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <div className='border-4 p-4 border-green-800'>
                            <input type="password" placeholder='Confirm Password' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <Button onClick={() => SignUp()} className='text-xl p-4 active:scale-95 transition-all bg-green-500 text-white font-semibold' >Register User</Button>
                        <a onClick={() => setSignUp(!signUp)} className='cursor-pointer text-blue-600'>already have an account? Login </a>
                    </div>
                    :
                    <div className='w-[22rem] bg-white flex justify-center flex-col text-center gap-4'>
                        <h1 className='font-bold text-2xl'>Test Admin Login</h1>
                        <div className='border-4 p-4 border-green-800'>
                            <input
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                type="email" placeholder='UserId' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <div className='border-4 p-4 border-green-800 bg-white'>
                            <input
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            onKeyUp={(e) => {
                                if(e.key === 'Enter') {
                                    Login()
                                }
                            }}
                             type="password" placeholder='Password' className='w-full h-[100%] text-lg focus:outline-none bg-transparent' />
                        </div>
                        <Button onClick={() => Login()}
                         className='text-xl p-4 active:scale-95 transition-all bg-green-500 text-white font-semibold' >Login</Button>
                        <a onClick={() => setSignUp(!signUp)} className='cursor-pointer text-blue-600'> Don't have account? Register </a>
                    </div>
            }
        </div>
    )
}

export default Login