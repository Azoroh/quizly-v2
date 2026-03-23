import { useState } from "react";

export default function QuestionSelector() {
  const [selected, setSelected] = useState(15);

  return (
    <div className="flex flex-col items-center gap-3">
      <label className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
        Select Question Count
      </label>
      <div className="relative flex p-1 bg-surface-container-lowest rounded-xl border border-white/5 w-full max-w-[280px]">
        {[5, 10, 15].map((count) => (
          <button
            key={count}
            onClick={() => setSelected(count)}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              selected === count
                ? "bg-primary text-on-primary segmented-control-active"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}
