import React from 'react'
import TableRow from './TableRow'
import {scans} from '../../../Data/scan'
import ScanToolbar from '../ToolBar.jsx/ScanToolBar'
const ScanTable = () => {
  return (
    <div className="bg-white m-2 p-2 rounded-xl overflow-hidden">
      <ScanToolbar/>

      <table className="w-full text-xs">
        <thead className=" text-gray-500 border-b border-gray-400">
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
          {scans.map((scan) => (
            <TableRow key={scan.id} scan={scan} />
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ScanTable