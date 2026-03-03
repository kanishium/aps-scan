
import { findings } from "../../../../Data/Findings";
import FindingCard from "./FindingCard";

const FindingList = () => {
  return (
    <div className="bg-white rounded-tr-sm border dark:bg-[#161A21] dark:text-white border-gray-400  border-l-0  py-1  h-full">

      {/* HEADER */}
      <h3 className="text-sm flex items-center font-semibold p-4">
        Finding Log
      </h3>

      {/* LIST */}
      <div className="space-y-1 overflow-y-auto border-gray-400 border hide-scrollbar  max-h-[572px] p-2">

        {findings.map((finding) => (
          <FindingCard
            key={finding.id}
            finding={finding}
          />
        ))}

      </div>

    </div>
  );
};

export default FindingList;