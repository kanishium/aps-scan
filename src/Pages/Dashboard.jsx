import React from 'react'
import DashboardLayout from '../Components/Dashboard/Layout/DashboardLayout'
import StatsSection from '../Components/Dashboard/Stats/StatsSection'
import ProjectInfoBar from '../Components/Dashboard/ProjectInfo/ProjectInfobar'
import ScanTable from '../Components/Dashboard/Table/ScanTable'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <ProjectInfoBar/>
      <StatsSection />
      <ScanTable />
    </DashboardLayout>
  )
}

export default Dashboard