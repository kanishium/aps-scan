import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { FiHome, FiMoon, FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../../Context/ThemeContext';
const TopNavbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="bg-white dark:bg-[#0A0F13] text-gray-800 dark:text-white px-6 py-2 flex items-center justify-between border-b dark:border-gray-800 transition-colors">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 text-sm">

        {/* Page Title */}
        <h2 className="font-semibold  text-gray-800 text-base dark:text-white">
          Scan
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400">

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

        <button
          onClick={() => toast("Exporting report...")}
          className="border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          Export Report
        </button>
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium border border-red-300 text-red-500 bg-red-50 dark:bg-[#201417] dark:border-[#814f5c]  hover:bg-red-100 transition"
        >
          Stop Scan
        </button>
        <button
  onClick={toggleTheme}
  className="p-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  {dark ? <FiSun size={18}/> : <FiMoon size={18}/>}
</button>
      </div>

    </header>
  )
}

export default TopNavbar