import { useState } from "react";
import ConsoleTabs from "./ConsoleTabs";
import LogLine from "./LogLine";
import { activityLogs } from "../../../../Data/ConsoleLog";
import { FaClock } from "react-icons/fa";

const LiveConsole = () => {
  const [activeTab, setActiveTab] = useState("Activity Log");

  return (
    <div className="bg-white rounded-tl-2xl border border-r-0 ml-3 dark:bg-[#0A0F13]  border-gray-400 min-h-screen overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center gap-3 dark:bg-[#161A21] dark:text-white px-6 py-4 border-b border-gray-400">

        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>

        <h3 className="text-sm font-bold">
          Live Scan Console
        </h3>

        <span className="ml-2 flex items-center justify-center gap-2 text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
          <FaClock />
          Running...
        </span>
      </div>

      {/* TABS */}
      <ConsoleTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="px-6 py-5 h-[420px] dark:bg-[#0A0F13] overflow-y-auto space-y-4 bg-[#FAFBFC]">

        {activeTab === "Activity Log" ? (
          activityLogs.map((log, index) => (
            <LogLine key={index} log={log} />
          ))
        ) : (
          <div className="text-sm text-gray-400">
            Verification loops executing...
          </div>
        )}

      </div>
    </div>
  );
};

export default LiveConsole;