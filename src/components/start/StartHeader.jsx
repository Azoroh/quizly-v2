import logo from "../../assets/logo.png";

export default function StartHeader() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 max-w-screen-2xl mx-auto bg-[#0e0e0f]/10 backdrop-blur-xl">
      <div className="flex items-center gap-1.5">
        <img src={logo} alt="Quizly logo" className="h-9 w-9 object-contain" />
        <span className="text-2xl font-black text-white font-headline tracking-tight translate-y-0.5">
          Quizly
        </span>
      </div>
    </header>
  );
}

// className="fixed top-0 w-full z-50 "
