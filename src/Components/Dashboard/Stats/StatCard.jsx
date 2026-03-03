import React from 'react'

const StatCard = ({ title, value, change, color }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-2xl font-semibold mt-2">{value}</h3>

      <p className={`text-xs mt-1 ${color}`}>
        {change}
      </p>
    </div>
  )
}

export default StatCard