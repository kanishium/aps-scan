import React, { useState } from "react";
import { FiSearch, FiFilter, FiColumns, FiPlus } from "react-icons/fi";

const ScanToolbar = ({ setQuery, setStatusFilter }) => {

  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex items-center justify-between gap-1 mb-4">

      {/* SEARCH BOX */}
      <div className="flex items-center flex-1 border border-gray-400 rounded-sm px-3 py-2 bg-white dark:bg-[#161A21] dark:text-[#9E9E9E]">
        <FiSearch className="text-gray-400 mr-2 dark:text-[#9E9E9E]" />

        <input
          type="text"
          placeholder="Search scans by name or type..."
          className="w-full outline-none text-sm"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>



      {/* ACTION BUTTONS */}
      <div className="flex gap-1">

        <div className="relative">

          {/* FILTER BUTTON */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-sm text-sm text-gray-500 hover:bg-gray-50"
          >
            <FiFilter size={16} />
            Filter
          </button>
           {showFilter && (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50">

      {["All", "Completed", "Scheduled", "Failed"].map((status) => (
        <button
          key={status}
          onClick={() => {
            setStatusFilter(status);
            setShowFilter(false);
          }}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          {status}
        </button>
      ))}

    </div>
  )}
        </div>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-sm text-sm text-gray-500 hover:bg-gray-50">
          <FiColumns size={16} />
          Column
        </button>

        <button className="flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded-sm text-sm hover:bg-teal-700">
          <FiPlus size={16} />
          New scan
        </button>

      </div>
    </div>
  );
};

export default ScanToolbar;