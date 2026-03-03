import { FiRefreshCw } from "react-icons/fi";

const ProjectInfoBar = () => {
  return (
    <div className="bg-white px-6 py-5 flex items-center justify-between dark:bg-[#161A21]">

      {/* LEFT INFO */}
      <div className="flex items-center gap-4 text-sm text-gray-500">

        <p>
          Org: <span className="text-gray-800 font-semibold dark:text-white">Project X</span>
        </p>

        <div className="h-5 w-px bg-gray-400" />

        <p>
          Owner: <span className="text-gray-800 font-semibold dark:text-white">Nammagiri</span>
        </p>

        <div className="h-5 w-px bg-gray-400" />

        <p>
          Total Scans: <span className="text-gray-800 font-semibold dark:text-white">100</span>
        </p>

        <div className="h-5 w-px bg-gray-400" />

        <p>
          Scheduled: <span className="text-gray-800 font-semimbold dark:text-white">1000</span>
        </p>

        <div className="h-5 w-px bg-gray-400" />

        <p>
          Rescans: <span className="text-gray-800 font-semibold dark:text-white">100</span>
        </p>

        <div className="h-5 w-px bg-gray-400" />

        <p>
          Failed Scans: <span className="text-gray-800 font-semibold dark:text-white">100</span>
        </p>
      </div>

      {/* RIGHT REFRESH */}
      <div className="flex items-center gap-2 text-gray-400 text-sm dark:text-white">
        <FiRefreshCw className="text-[#0E9E9E] font-extrabold" />
        <span>10 mins ago</span>
      </div>

    </div>
  );
};

export default ProjectInfoBar;