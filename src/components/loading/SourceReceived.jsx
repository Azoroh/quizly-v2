export default function SourceReceived({ uploadedFiles }) {
  return (
    <div className="bg-surface-container-low rounded-lg p-5 mb-10 flex flex-col gap-3">
      <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-70">
        SOURCE RECEIVED
      </span>

      <div className="flex gap-2 justify-center flex-wrap w-full">
        {uploadedFiles &&
          uploadedFiles.map((file) => (
            <div
              key={file.id}
              className="flex flex-1 items-center gap-2 bg-surface-container-high px-4 py-2.5 rounded-lg border border-outline-variant/20 w-full min-w-34 max-w-[200px]"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim">
                picture_as_pdf
              </span>
              <span className="text-on-surface font-label text-sm truncate">
                {file.name}
              </span>
              <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">
                check_circle
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

function HSHDHD({ uploadedFiles, dispatch }) {
  return (
    uploadedFiles &&
    uploadedFiles.map((uploadedFile) => (
      <div
        key={uploadedFile.id}
        className="flex flex-1 items-center justify-center gap-2 min-w-36 max-w-[200px] px-3 py-2 rounded-xl bg-surface-container-high border border-white/5 text-on-surface"
      >
        <span className="text-sm font-medium truncate max-w-[180px] text-[#8c95f5]">
          {uploadedFile.name}
        </span>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "removeFiles",
              payload: uploadedFile.id,
            })
          }
          className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 hover:bg-red-500/20 text-on-surface-variant hover:text-red-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-icon lucide-x material-symbols-outlined text-[16px] p-[3px]"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    ))
  );
}
