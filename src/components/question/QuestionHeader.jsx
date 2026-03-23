export default function QuestionHeader({ current, total, time }) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex justify-between items-center">
        <h2 className="text-on-surface font-headline font-bold text-xl">
          Question {current} of {total}
        </h2>
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <span className="material-symbols-outlined text-primary text-[18px]">
            schedule
          </span>
          <span className="font-headline font-bold text-primary tracking-tight text-sm">
            {time}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden p-[2px]">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_12px_rgba(159,167,255,0.4)] transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
