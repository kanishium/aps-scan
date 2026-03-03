import React from "react";
import { FiSearch, FiFilter, FiColumns, FiPlus } from "react-icons/fi";

const ScanToolbar = () => {
  return (
    <div className="flex items-center justify-between gap-1 mb-4">

      {/* SEARCH BOX */}
      <div className="flex items-center flex-1 border border-gray-400 rounded-sm px-3 py-2 bg-white">
        <FiSearch className="text-gray-400 mr-2" />

        <input
          type="text"
          placeholder="Search scans by name or type..."
          className="w-full outline-none text-sm"
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-1">

        <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-sm text-sm text-gray-500 hover:bg-gray-50">
          <FiFilter size={16} />
          Filter
        </button>

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