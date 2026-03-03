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
        <div className=" flex items-center justify-center ">
          <div className="flex gap-4 items-center py-8">
            <ScanProgress />
          </div>

          <div className=" flex flex-col pl-5 gap-5 items-center justify-center">
            <StepTracker />
            <ScanMeta />
          </div>
        </div>

        {/* LOWER SECTION */}
        <div className="grid grid-cols-3">

          {/* LEFT CONSOLE */}
          <div className="col-span-2">
            <LiveConsole />
          </div>

          {/* RIGHT FINDINGS */}
          <FindingList />

        </div>

        {/* STATUS BAR */}
        <StatusBar />

      </div>
    </DashboardLayout>
  )
}

export default ScanDets