export default function QuestionCard({ children }) {
  return (
    <div className="glass-card glow-effect rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
      {children}
    </div>
  );
}
