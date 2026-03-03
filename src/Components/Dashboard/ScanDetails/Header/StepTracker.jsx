import React from 'react'

import { FiSearch, FiGrid, FiActivity, FiCheckSquare, FiFileText } from "react-icons/fi";

const steps = [
  { name: "Spidering", icon: FiSearch },
  { name: "Mapping", icon: FiGrid },
  { name: "Testing", icon: FiActivity },
  { name: "Validating", icon: FiCheckSquare },
  { name: "Reporting", icon: FiFileText },
];

const StepTracker = () => {
      const activeIndex = 0;

    return (
        <div className="relative flex border-b border-gray-400 pb-4 items-center justify-between w-full">

      {/* CONNECTING LINE */}
      <div className="absolute top-6 left-1 right-1 h-[2px] bg-gray-300"></div>

      {steps.map((step, index) => {
        const Icon = step.icon;
        const active = index === activeIndex;

        return (
          <div key={step.name} className="flex flex-col items-center z-10">

            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition
              ${
                active
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-500/40 border-teal-600"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              <Icon size={18} />
            </div>

            <span className="text-xs mt-2 text-gray-500">
              {step.name}
            </span>
          </div>
        );
      })}
    </div>

    )
}

export default StepTracker