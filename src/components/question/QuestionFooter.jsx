export default function QuestionFooter({ answer, onClick, buttonText }) {
  const hasSelected = answer !== null;

  return (
    <div className="flex items-center justify-end pt-6 border-t border-outline-variant/10">
      <button
        disabled={!hasSelected}
        className={`flex items-center gap-3 px-8 py-4 rounded-full font-headline font-bold transition-all ${
          hasSelected
            ? "bg-gradient-to-r from-primary to-primary-dim text-on-primary shadow-lg shadow-primary/20 active:scale-95"
            : "bg-surface-container-highest text-on-surface-variant/50 cursor-not-allowed opacity-80"
        }`}
        onClick={onClick}
      >
        {buttonText}
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>
    </div>
  );
}
