export default function SourceReceived({
  filename = "biology_lecture_notes.pdf",
}) {
  return (
    <div className="bg-surface-container-low rounded-lg p-5 mb-10 flex flex-col gap-3">
      <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-70">
        SOURCE RECEIVED
      </span>
      <div className="flex items-center gap-3 bg-surface-container-high w-fit px-4 py-2.5 rounded-lg border border-outline-variant/20">
        <span className="material-symbols-outlined text-primary-fixed-dim">
          picture_as_pdf
        </span>
        <span className="text-on-surface font-label text-sm">{filename}</span>
        <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">
          check_circle
        </span>
      </div>
    </div>
  );
}
