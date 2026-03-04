const StatusBar = () => {
  return (
    <div className=" bg-[#F3F5F7] border-t dark:bg-[#161A21] border-gray-400 px-6 py-4 gap-20 sm:flex items-center justify-between text-xs">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-8 text-gray-500">

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Sub-Agents: 0</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Parallel Executions: 2</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span>Operations: 1</span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex mt-4 sm:mt-0 items-center gap-6 font-medium">

        <span className="text-red-500">Critical: 0</span>
        <span className="text-orange-500">High: 0</span>
        <span className="text-yellow-500">Medium: 0</span>
        <span className="text-green-500">Low: 0</span>

      </div>

    </div>
  );
};

export default StatusBar;