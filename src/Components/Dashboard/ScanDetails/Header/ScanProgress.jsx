import React from 'react'

const ScanProgress = () => {
    return (
        <div className="flex items-center sm:gap-3">

            {/* CIRCLE */}
            <div className="relative sm:flex items-center ml-5 justify-center">

                {/* glow */}
                <div className="absolute w-32 h-32 rounded-full bg-teal-500/10 blur-xl"></div>

                <div className="w-28 h-28 rounded-full bg-[#0B1220] flex flex-col items-center justify-center text-center">
                    <p className="text-3xl font-semibold text-teal-400">0%</p>
                    <span className="text-[10px] text-gray-400">
                        In Progress
                    </span>
                </div>

            </div>

            {/* VERTICAL DIVIDER */}
            <div className="h-34 w-px hidden sm:inline bg-gray-400"></div>

        </div>
    )
}

export default ScanProgress