import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plus } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

export function MenuItem({ name, description, price, image, popular }: MenuItemProps) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all group border border-gray-800">
      {popular && (
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs px-3 py-1 inline-block font-bold uppercase tracking-wider">
          🔥 Popular
        </div>
      )}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            ${price}
          </span>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-2.5 rounded-full hover:from-orange-600 hover:to-red-700 transition-all shadow-lg shadow-orange-500/50 hover:scale-110">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}