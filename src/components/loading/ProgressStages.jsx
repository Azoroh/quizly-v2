const stages = [
  { label: "Extracting content", status: "done" },
  { label: "Understanding key concepts", status: "active" },
  { label: "Creating questions", status: "upcoming" },
  { label: "Finalizing quiz", status: "upcoming" },
];

export default function ProgressStages() {
  return (
    <div className="space-y-6">
      {stages.map(({ label, status }) => (
        <div
          key={label}
          className={`flex items-center gap-4 ${status === "upcoming" ? "opacity-30" : ""} ${status === "done" ? "opacity-50" : ""}`}
        >
          {/* Icon */}
          {status === "done" && (
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full">
              <span className="material-symbols-outlined text-primary text-xl">
                check
              </span>
            </div>
          )}
          {status === "active" && (
            <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/20 rounded-full">
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full progress-glow"></div>
            </div>
          )}
          {status === "upcoming" && (
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-outline-variant/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-outline-variant rounded-full"></div>
            </div>
          )}

          {/* Label */}
          <span
            className={`font-medium ${status === "active" ? "text-primary font-bold tracking-tight" : "text-on-surface"}`}
          >
            {label}
          </span>

          {/* In Progress badge */}
          {status === "active" && (
            <span className="ml-auto text-primary/60 text-xs font-mono">
              IN PROGRESS
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
