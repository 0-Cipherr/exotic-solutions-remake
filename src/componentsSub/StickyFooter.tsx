import ima from "../assets/ima.png";
export function StickyFooter() {
  return (
    <footer className="visble md:hidden bottom-0 left-0 z-50 w-full border-t border-b border-[#33291D] bg-black px-9 h-19  text-white">
      <div className="flex min-h-20  max-w-7xl items-center justify-between">
        <button
          className="text-white hover:bg-white/10 hover:text-white"
          onClick={() => window.history.back()}
        >
          <img src={ima} alt="" className="w-15 sm:w-18" />
        </button>

        <span className="text-sm text-[#e8dfcc] text-sm mt-auto mb-auto">
          © 2026 ExoticEditz
        </span>
      </div>
    </footer>
  );
}
