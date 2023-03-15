import React, { Component, FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

interface propType{
    children: JSX.Element
}
export const ProtectedRoute = ({children}: propType) => {
    const router = useRouter()
    const user = useSelector((state: any) => state.auth.name) // any.

useEffect(() => {
    if (user === 'no name') {
        router.push('/login')
    }
})
   

  return (
    children
  )
}
