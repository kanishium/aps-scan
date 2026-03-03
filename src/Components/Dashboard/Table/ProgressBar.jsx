import React from 'react'

const ProgressBar = ({value}) => {
  return (
     <div className="flex items-center gap-3 w-full">
      <div className="w-30 h-2 bg-gray-200 rounded-full overflow-hidden ">
        <div
          className={`h-full rounded-full ${
            value === 100 ? "bg-teal-600" : "bg-red-400"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-sm text-gray-800 font-medium dark:text-white">{value}%</span>
    </div>
  )
}

export default ProgressBar