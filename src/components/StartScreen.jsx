import StartHeader from "./start/StartHeader";
import StartHero from "./start/StartHero";
import SummaryStats from "./start/SummaryStats";
import QuestionSelector from "./start/QuestionSelector";
import StartButton from "./start/StartButton";
import { getSourceStatus } from "../utils/getSourceStatus";

export default function StartScreen({
  dispatch,
  questionCount,
  questions,
  remainingSeconds,
  sourceUsage,
}) {
  const excludedSources = sourceUsage.filter((source) => !source.wasIncluded);

  return (
    <div className="dark bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col items-center justify-center overflow-x-hidden relative">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 glow-bg pointer-events-none z-0"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <StartHeader />

      <main className="relative z-10 w-full max-w-2xl px-6 py-12 flex flex-col items-center text-center">
        <StartHero />

        {/* Glass Card */}
        <div className="glass-card w-full rounded-[2rem] p-6 md:p-8 border border-white/5 shadow-2xl flex flex-col gap-8">
          {/* Source Chip */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,160px))] gap-3 md:gap-4 justify-center">
            {sourceUsage.map((source) => {
              const status = getSourceStatus(source);
              const toneClasses =
                status.tone === "included"
                  ? "bg-emerald-500/18 border border-emerald-400/35 shadow-[0_0_0_1px_rgba(52,211,153,0.08)]"
                  : status.tone === "trimmed"
                    ? "bg-lime-500/10 border border-yellow-300/30 shadow-[0_0_0_1px_rgba(250,204,21,0.06)]"
                    : "bg-white/5 border border-white/8 opacity-45 saturate-50";

              const textToneClasses =
                status.tone === "included"
                  ? "text-emerald-200"
                  : status.tone === "trimmed"
                    ? "text-yellow-100/90"
                    : "text-on-surface-variant/50";

              const iconToneClasses =
                status.tone === "included"
                  ? source.name.endsWith(".pdf")
                    ? "text-emerald-300"
                    : "text-emerald-300"
                  : status.tone === "trimmed"
                    ? source.name.endsWith(".pdf")
                      ? "text-yellow-300"
                      : "text-lime-300"
                    : "text-on-surface-variant/40";

              return (
                <div
                  key={source.id}
                  // className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/5 border border-secondary/10 w-full"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-full transition-colors ${toneClasses}`}
                >
                  <span
                    className={`material-symbols-outlined text-sm ${iconToneClasses}`}
                  >
                    {source.name.endsWith(".pdf")
                      ? "picture_as_pdf"
                      : "description"}
                  </span>
                  <span
                    className={`text-xs font-medium truncate ${textToneClasses}`}
                  >
                    {source.name}
                  </span>
                </div>
              );
            })}
          </div>

          <SummaryStats
            questionCount={questionCount}
            remainingSeconds={remainingSeconds}
          />

          <QuestionSelector dispatch={dispatch} questionCount={questionCount} />

          <StartButton
            onClick={() => dispatch({ type: "startQuiz" })}
            questions={questions}
          />
        </div>
      </main>

      {/* Bottom Line */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
}
