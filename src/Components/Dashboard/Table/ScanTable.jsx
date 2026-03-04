import React from 'react'
import TableRow from './TableRow'
import {scans} from '../../../Data/scan'
import ScanToolbar from '../ToolBar.jsx/ScanToolBar'
import { useState } from "react";
const ScanTable = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [query, setQuery] = useState("");


  const filteredScans = scans.filter((scan) => {
  const matchesSearch =
    scan.name.toLowerCase().includes(query.toLowerCase()) ||
    scan.type.toLowerCase().includes(query.toLowerCase());

  const matchesStatus =
    statusFilter === "All" || scan.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  return (
    <div className="w-screen sm:w-auto overflow-scroll sm:overflow-visible bg-white m-2 p-2 rounded-xl overflow-hidden dark:bg-[#161A21]">
      <ScanToolbar setQuery={setQuery}  setStatusFilter={setStatusFilter}/>

      <table className="w-full text-xs">
        <thead className=" text-gray-500 border-b border-gray-400 dark:text-[#9E9E9E]">
          <tr>
            <th className="text-left py-4">Scan Name</th>
            <th className="text-left">Type</th>
            <th className="text-left">Status</th>
            <th className="text-left">Progress</th>
            <th className="text-left">Vulnerability</th>
            <th className="text-left">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {filteredScans.map((scan) => (
            <TableRow key={scan.id} scan={scan} />
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ScanTable