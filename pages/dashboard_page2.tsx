import { NextPage } from 'next'
import React from 'react'
import { SidebarLayout, ProtectedRoute } from '../components'

const DashboardPage2: NextPage = () => {
    return (
        <ProtectedRoute>
            <SidebarLayout>
                Page2
            </SidebarLayout>
        </ProtectedRoute>
    )
}

export default DashboardPage2
