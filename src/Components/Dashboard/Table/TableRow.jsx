import React from 'react'
import ProgressBar from './ProgressBar';

const TableRow = ({ scan }) => {

    const statusStyles = {
        Completed: "bg-[#E9F9EF] text-[#21C45D] dark:bg-[#172A26] ",
        Scheduled: "bg-gray-100 text-gray-600 dark:bg-[#161A21]",
        Failed: "bg-red-100 text-red-500 dark:bg-[#2B1E24]",
    };
    return (
        <tr className=" hover:bg-gray-100 dark:hover:bg-[#364051] dark:text-white">

            <td className="py-5 font-medium ">{scan.name}</td>

            <td>{scan.type}</td>

            <td>
                <span
                    className={`px-3 py-1 rounded-md text-xs font-medium border dark: ${statusStyles[scan.status]}`}
                >
                    {scan.status}
                </span>
            </td>

            <td>
                <ProgressBar value={scan.progress} />
            </td>

            {/* Vulnerability badges */}
            <td>
                <div className="flex gap-2">

                    {scan.vulnerabilities.critical > 0 && (
                        <span className="w-7 h-7 flex items-center justify-center bg-red-500 text-white text-xs font-medium rounded-md">
                            {scan.vulnerabilities.critical}
                        </span>
                    )}

                    {scan.vulnerabilities.high > 0 && (
                        <span className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white text-xs font-medium rounded-md">
                            {scan.vulnerabilities.high}
                        </span>
                    )}

                    {scan.vulnerabilities.medium > 0 && (
                        <span className="w-7 h-7 flex items-center justify-center bg-yellow-400 text-white text-xs font-medium rounded-md">
                            {scan.vulnerabilities.medium}
                        </span>
                    )}

                    {scan.vulnerabilities.low > 0 && (
                        <span className="w-7 h-7 flex items-center justify-center bg-green-500 text-white text-xs font-medium rounded-md">
                            {scan.vulnerabilities.low}
                        </span>
                    )}

                </div>
            </td>

            <td className="text-gray-400 font-medium">{scan.lastScan}</td>
        </tr>
    )
}

export default TableRow