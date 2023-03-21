import React from 'react'
import { useRouter } from 'next/router'
import { SidebarLayout, ProtectedRoute } from '../components'

const TestConfigComp = () => {
    const router = useRouter()
    const query: any = router.query
  return (
    <SidebarLayout>
    <div>{query.name}</div>
    </SidebarLayout>
  )
}

const testConfig = () => {
    return (
        <ProtectedRoute>
            <TestConfigComp></TestConfigComp>
        </ProtectedRoute>
    )
}

export default testConfig
