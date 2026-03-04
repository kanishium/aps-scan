const severityStyles = {
  Critical: "bg-red-500 text-white",
  High: "bg-orange-500 text-white",
  Medium: "bg-yellow-500 text-white",
};

const FindingCard = ({ finding }) => {
  return (
    <div className="bg-white border w-screen sm:w-auto mt-4 sm:mt-0 dark:bg-[#161A21] border-gray-400 rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-start">

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${severityStyles[finding.severity]}`}
        >
          {finding.severity}
        </span>

        <span className="text-[11px] text-gray-400">
          {finding.time}
        </span>

      </div>

      <h4 className="sm:mt-3 dark:text-white font-semibold text-gray-800">
        {finding.title}
      </h4>

      <p className="text-sm text-teal-600 mt-1 font-mono">
        {finding.endpoint}
      </p>

      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
        {finding.description}
      </p>

    </div>
  );
};

export default FindingCard;