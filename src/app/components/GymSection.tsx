import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dumbbell, Flame, Trophy } from "lucide-react";

const workoutPlans = [
  {
    name: "Big Back Gains",
    description: "Full body workout to burn off those calories. 45-min high intensity session.",
    duration: "45 min",
    calories: "500-700",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaWZ0aW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NzYyMDMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cardio Burn",
    description: "High-energy cardio to keep you coming back for more food guilt-free.",
    duration: "30 min",
    calories: "400-500",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc2MjAzMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Strength Training",
    description: "Build muscle while you feast. Perfect balance of gains and flavor.",
    duration: "60 min",
    calories: "350-450",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1584827387150-8ae4caebe906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NjIwMzAyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function GymSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Eat Big, Train Bigger
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Why choose between food and fitness? Get both! Every meal comes with complimentary gym access. 
            Indulge guilt-free and work it off in our state-of-the-art facility.
          </p>
        </div>

        {/* Workout Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workoutPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <span className="text-orange-400 font-bold">{plan.duration}</span> workout
                    </div>
                    <div className="text-gray-500">
                      Burns <span className="text-orange-400 font-bold">{plan.calories}</span> cal
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meal + Gym Membership Combo
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our exclusive Big Back Club and get unlimited gym access with every order over $20. 
            That's the true big back lifestyle - eat legendary, train legendary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Join Big Back Club
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              View Gym Hours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
