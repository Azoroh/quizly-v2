export default function SourceReceived({ uploadedFiles, loadingStage }) {
  const isLoading = loadingStage !== "finalizing" && loadingStage !== "ready";

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
              <span
                className={`material-symbols-outlined ${file.name.endsWith(".pdf") ? "text-red-600" : "text-blue-600"} textre`}
              >
                {file.name.endsWith(".pdf") ? "picture_as_pdf" : "description"}
              </span>
              <span className="text-on-surface-variant/100 font-label text-sm truncate">
                {file.name}
              </span>
              {isLoading ? (
                <span className="material-symbols-outlined text-on-surface-variant/40 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-loader-icon lucide-loader animate-spin [animation-duration:5s]"
                  >
                    <path d="M12 2v4" />
                    <path d="m16.2 7.8 2.9-2.9" />
                    <path d="M18 12h4" />
                    <path d="m16.2 16.2 2.9 2.9" />
                    <path d="M12 18v4" />
                    <path d="m4.9 19.1 2.9-2.9" />
                    <path d="M2 12h4" />
                    <path d="m4.9 4.9 2.9 2.9" />
                  </svg>
                </span>
              ) : (
                <span className="material-symbols-outlined text-green-400 text-sm">
                  check_circle
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
