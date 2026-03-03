import React from 'react'
import { FiHome } from 'react-icons/fi'

const TopNavbar = () => {
  return (
     <header className="bg-white  px-6 py-2 flex items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 text-sm">

        {/* Page Title */}
        <h2 className="font-semibold text-gray-800 text-base">
          Scan
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-400">

          <FiHome size={14} />

          <span>/</span>
          <span>Private Assets</span>

          <span>/</span>

          <span className="text-teal-600 font-medium">
            New Scan
          </span>

        </div>
      </div>

      {/* RIGHT ACTION BUTTONS */}
      <div className="flex items-center gap-3">

        <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50 transition">
          Export Report
        </button>

        <button className="px-4 py-2 rounded-lg text-sm font-medium border border-red-300 text-red-500 bg-red-50 hover:bg-red-100 transition">
          Stop Scan
        </button>
      </div>

    </header>
  )
}

export default TopNavbar