import React from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

const DashboardLayout = ({children}) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopNavbar />

        <main className="p-6 space-y-6">
          {children}
        </main>
      </div>

    </div>
  )
}

export default DashboardLayout