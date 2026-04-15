export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/src/imports/image.png" 
                alt="Logo" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Big Back Bites
              </h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Where true big backs always come back for more. 
              Elevated comfort food crafted with premium ingredients and bold flavors.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Menu</a></li>
              <li><a href="#deals" className="hover:text-orange-400 transition-colors">Deals</a></li>
              <li><a href="#locations" className="hover:text-orange-400 transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Mon - Fri: 10am - 11pm</li>
              <li>Sat - Sun: 10am - 12am</li>
              <li className="pt-2 text-orange-400">Late night available</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2026 Big Back Bites. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}