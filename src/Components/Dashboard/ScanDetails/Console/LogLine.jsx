const styleMap = {
  url: "text-teal-600",
  highlight: "text-teal-600",
  path:
    "bg-[#0B1220] text-white px-2 py-[2px] rounded-md font-medium",
  header:
    "bg-teal-100 text-teal-700 px-2 py-[2px] rounded",
  danger: "text-red-500 font-semibold",
};

const LogLine = ({ log }) => {
  return (
    <div className="flex gap-3 text-[13px] font-mono leading-6 dark:bg-[#0A0F13]">

      {/* timestamp */}
      <span className="text-gray-400 whitespace-nowrap">
        [{log.time}]
      </span>

      {/* message */}
      <p className="text-gray-700">
        {log.parts.map((part, i) => (
          <span
            key={i}
            className={styleMap[part.type] || ""}
          >
            {part.text}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LogLine;