import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const StatCard = ({
  title,
  value,
  change,
  trendColor,
  icon: Icon,
  iconBg,
  iconColor,
}) => {
  const isDecrease = change.includes("decrease");

  return (
    <div className="bg-white mb-5 sm:mb-0 px-25 sm:px-7 py-6 flex flex-col dark:bg-[#161A21] ">

      {/* HEADER */}
      <div className="flex items-center gap-5 sm:justify-between">
        <p className="text-sm font-medium text-[#9E9E9E]">
          {title}
        </p>

        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}
        >
          <Icon className={`${iconColor}`}  size={17} />
        </div>
      </div>

      {/* VALUE + TREND */}
      <div className="flex items-end gap-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </h3>

        <div
          className={`flex items-center gap-1 text-[10px] font-medium ${trendColor}`}
        >
          {isDecrease ? (
            <FiTrendingDown size={10} />
          ) : (
            <FiTrendingUp size={10} />
          )}

          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;