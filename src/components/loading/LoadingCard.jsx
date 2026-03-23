import MetadataPills from "./MetadataPills";
import SourceReceived from "./SourceReceived";
import ProgressStages from "./ProgressStages";

export default function LoadingCard() {
  return (
    <div className="w-full max-w-2xl glass-card rounded-xl p-8 lg:p-12 glow-soft">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
          Building your personalized quiz
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-lg mx-auto leading-relaxed">
          Quizly is reading your material, identifying key concepts, and
          creating questions tailored to your content.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-1.5 bg-surface-container-highest rounded-full mb-12 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-[45%] bg-gradient-to-r from-primary-dim to-primary rounded-full progress-glow"></div>
      </div>

      <MetadataPills />
      <SourceReceived />
      <ProgressStages />
    </div>
  );
}
