import React from 'react'
import DashboardLayout from '../Components/Dashboard/Layout/DashboardLayout'
import StatusBar from '../Components/Dashboard/ScanDetails/StatusBar'
import FindingList from '../Components/Dashboard/ScanDetails/Findings/FindingList'
import LiveConsole from '../Components/Dashboard/ScanDetails/Console/LiveConsole'
import ScanMeta from '../Components/Dashboard/ScanDetails/Header/ScanMeta'
import StepTracker from '../Components/Dashboard/ScanDetails/Header/StepTracker'
import ScanProgress from '../Components/Dashboard/ScanDetails/Header/ScanProgress'


const ScanDets = () => {
  return (

    <DashboardLayout>
      <div className=" space-y-1">

        {/* TOP SECTION */}
        <div className=" sm:flex items-center justify-center ">
          <div className="flex sm:w-auto w-screen gap-4 sm:justify-baseline justify-center items-center py-8">
            <ScanProgress />
          </div>

          <div className=" flex flex-col pl-5 gap-5 items-center justify-center">
            <StepTracker />
            <ScanMeta />
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="flex flex-col sm:grid grid-cols-3">

          <div className=" sm:col-span-2">
            <LiveConsole />
          </div>

          <FindingList />

        </div>

        {/* STATUS BAR */}
        <StatusBar />

      </div>
    </DashboardLayout>
  )
}

export default ScanDets