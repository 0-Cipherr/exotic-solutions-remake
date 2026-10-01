import ima from "../assets/ima.png";
export function StickyFooter() {
  return (
    <footer className="visible sm:hidden mt-auto w-full border-t bg-black text-white px-6 py-4">
      <div className="flex max-w-7xl items-center justify-between">
        <button
          variant="ghost"
          className="text-white hover:bg-white/10 hover:text-white"
          onClick={() => window.history.back()}
        >
          <img src={ima} alt="" className="w-12 sm:w-18" />
        </button>

        <span className="text-sm text-gray-300 text-xs mt-auto mb-auto">
          © 2026 ExoticEditz
        </span>
      </div>
    </footer>
  );
}
