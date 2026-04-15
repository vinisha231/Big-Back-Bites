export function Hero() {
  return (
    <section className="bg-black text-white py-24 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <img 
            src="/src/imports/image.png" 
            alt="Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 opacity-90"
          />
        </div>
        
        <h2 className="text-4xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Big Back Bites
          </span>
        </h2>
        
        <p className="text-2xl md:text-4xl mb-8 italic text-gray-300 font-light">
          "True Big Back Would Come Back"
        </p>
        
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-gray-400">
          Elevated comfort food for the modern appetite. Where quality meets quantity, 
          and every bite is worth coming back for.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/50">
            Explore Menu
          </button>
          <button className="border border-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
}