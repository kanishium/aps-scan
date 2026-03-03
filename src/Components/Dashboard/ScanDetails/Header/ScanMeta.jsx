const meta = [
  { label: "Scan Type", value: "Grey Box" },
  { label: "Targets", value: "google.com" },
  { label: "Started At", value: "Nov 22, 09:00AM" },
  { label: "Credentials", value: "2 Active" },
  { label: "Files", value: "Control.pdf" },
  { label: "Checklists", value: "40/350", highlight: true },
];

const ScanMeta = () => {
  return (
    <div className="mt-3 grid grid-cols-6 gap-10">

      {meta.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-gray-400">
            {item.label}
          </p>

          <p
            className={`mt-1 font-semibold dark:text-white text-sm ${
              item.highlight ? "text-teal-600" : "text-gray-800"
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
};

export default ScanMeta;