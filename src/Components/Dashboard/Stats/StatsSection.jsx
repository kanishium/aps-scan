import React from 'react'
import { dashboardStats } from '../../../Data/dashboardStats'
import StatCard from './StatCard'

const StatsSection = () => {
  return (
    <div className=" sm:flex ">
      {dashboardStats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  )
}

export default StatsSection