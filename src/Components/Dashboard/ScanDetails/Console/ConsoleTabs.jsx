import React from 'react'


const ConsoleTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-8 px-6 py-2 border-b border-gray-400 dark:bg-[#0A0F13]">

      {["Activity Log", "Verification Loops"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 text-sm font-medium relative
          ${
            activeTab === tab
              ? "text-teal-600"
              : "text-gray-400"
          }`}
        >
          {tab}

          {activeTab === tab && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-600"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ConsoleTabs;