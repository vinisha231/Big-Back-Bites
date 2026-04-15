import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Palette, Layers, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Concept & Inspiration",
    description: "Started with the bold idea: a foodie startup that embraces indulgence AND fitness. Sketched initial concepts focusing on modern, clean aesthetics.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1761746395515-5ad7e0bac0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwc2tldGNoaW5nfGVufDF8fHx8MTc3NjIwMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    step: "02",
    title: "Figma Design System",
    description: "Built our entire brand identity in Figma. Created custom components, color palettes (that signature orange-to-red gradient), and typography system.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1740174459717-3833cb537bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwdG9vbHN8ZW58MXx8fHwxNzc2MjAzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    step: "03",
    title: "Logo Development",
    description: "Crafted the iconic logo in Figma with precision. Multiple iterations to perfect the balance, contrast, and memorability. The final mark represents bold flavors.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3NjIwMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    step: "04",
    title: "Launch & Iterate",
    description: "Translated designs from Figma to production. The beauty of Figma allowed seamless handoff from design to development, keeping our vision intact.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3NjIwMzYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function DesignProcess() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Designed in Figma
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Every pixel, every color, every component was crafted with intention. 
            Here's how we brought Big Back Bites to life using Figma's powerful design tools.
          </p>
        </div>

        {/* Logo Showcase */}
        <div className="mb-20 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 border border-gray-800 text-center">
          <div className="mb-8">
            <img 
              src="/src/imports/image.png" 
              alt="Big Back Bites Logo" 
              className="w-40 h-40 md:w-56 md:h-56 mx-auto opacity-90"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Mark</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our logo represents the perfect fusion of bold flavors and modern design. 
            Created entirely in Figma, it embodies our philosophy: unapologetically indulgent, 
            yet refined and contemporary.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                  
                  {/* Step Number */}
                  <div className="absolute top-6 left-6 text-6xl font-bold text-white/10">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-900 px-6 py-4 rounded-full border border-gray-800">
            <span className="text-gray-400">Designed with</span>
            <span className="font-bold text-white">Figma</span>
            <span className="text-2xl">🎨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
