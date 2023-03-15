import { NextPage } from 'next'
import React from 'react'
import { Button } from '../components'
import { useRouter } from 'next/router'

const LandingPage: NextPage = () => {

  const router = useRouter()

  return (
    <div className='flex'>
      <Button onClick={() => {router.push('/login')}} >Login Page</Button>
    </div>
  )
}

export default LandingPage

