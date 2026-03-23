const pills = [
  { icon: "auto_awesome", label: "12 Concepts" },
  { icon: "description", label: "4 Pages" },
  { icon: "quiz", label: "15 Questions" },
];

export default function MetadataPills() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {pills.map(({ icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 px-4 py-1.5 bg-secondary-container/20 rounded-full border border-secondary/10"
        >
          <span className="material-symbols-outlined text-secondary text-sm">
            {icon}
          </span>
          <span className="text-secondary font-label text-sm font-semibold">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
