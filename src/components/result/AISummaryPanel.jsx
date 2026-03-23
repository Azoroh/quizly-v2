const focusAreas = ["Applied Reasoning", "Process Flow"];

export default function AIInsightPanel() {
  return (
    <div className="w-full bg-surface-container-low/30 rounded-2xl p-6 md:p-8 mb-10 border border-primary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/40 to-transparent"></div>
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary text-lg">
          auto_awesome
        </span>
        <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">
          AI Insight
        </span>
      </div>
      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
        You performed well on foundational concepts but showed weaker accuracy
        on applied reasoning questions. Your strongest area was concept
        recognition.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
          Focus areas:
        </span>
        {focusAreas.map((area) => (
          <div
            key={area}
            className="bg-surface-container-highest/40 text-on-surface-variant text-[11px] font-semibold px-3 py-1 rounded-full border border-outline-variant/10"
          >
            {area}
          </div>
        ))}
      </div>
    </div>
  );
}
