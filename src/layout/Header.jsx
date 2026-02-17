
import Navbar from "./Navbar";
import MobileMenu from "../components/mobile/MobileMenu";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md bg-black/40 supports-backdrop-filter:bg-black/20">
    {/* blur fade */}
    <div className="
      pointer-events-none
      absolute inset-0
      bg-linear-to-b
      from-black/70
      via-black/40
      to-transparent
    " />
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 text-white">
        
        {/* Brand */}
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-white"
        >
          Gade Siddhartha Kumar<span></span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Staggered Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

      </nav>
    </header>
  );
}

export default Header;

