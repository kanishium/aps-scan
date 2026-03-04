import React from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'

const DashboardLayout = ({children}) => {
  return (
    <div className="flex overflow-hidden sm:min-h-screen bg-gray-100 dark:bg-[#0A0F13]">

      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopNavbar />

        <main className="py-2 space-y-2">
          {children}
        </main>
      </div>

    </div>
  )
}

export default DashboardLayout