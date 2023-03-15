import { NextPage } from 'next'
import React from 'react'
import { SidebarLayout, DummyComponent, ProtectedRoute } from '../components'
import { useSelector } from 'react-redux'


const DashboardComp = () => {
  const user = useSelector((state: any) => state.auth.name)
  console.log(user)
  return (
    <SidebarLayout>
      Hello
    </SidebarLayout>
  )
}

const Dashboard: NextPage = () => {
  const user = useSelector((state: any) => state.auth.name)
  console.log(user)
  return (
   <ProtectedRoute>
    <DashboardComp></DashboardComp>
   </ProtectedRoute>
  )
}

export default Dashboard
