export default function StartButton({ onClick }) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="group relative w-full h-14 rounded-full overflow-hidden bg-gradient-to-r from-primary to-primary-dim font-headline font-bold text-base text-on-primary shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative flex items-center justify-center gap-2">
          Start Quiz
          <span className="material-symbols-outlined text-xl">
            arrow_forward
          </span>
        </span>
      </button>
    </div>
  );
}
