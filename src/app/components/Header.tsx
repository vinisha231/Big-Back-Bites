import { Menu, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/src/imports/image.png" 
            alt="Logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Big Back Bites
          </h1>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-sm">
          <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a>
          <a href="#gym" className="hover:text-orange-400 transition-colors">Gym</a>
          <a href="#design" className="hover:text-orange-400 transition-colors">Design</a>
          <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
        </nav>
        
        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 md:px-6 py-2 rounded-full flex items-center gap-2 hover:from-orange-600 hover:to-red-700 transition-all shadow-lg shadow-orange-500/50">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Order Now</span>
        </button>
      </div>
    </header>
  );
}