import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    name: "Big Back Burger",
    description: "Double patty, cheese, bacon, special sauce. The ultimate comeback meal.",
    price: "12.99",
    image: "https://images.unsplash.com/photo-1767065703793-7012f5fced19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdWljeSUyMGJ1cmdlciUyMGZyaWVzfGVufDF8fHx8MTc3NjIwMjc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
  },
  {
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon bits, and ranch. Pure indulgence.",
    price: "7.99",
    image: "https://images.unsplash.com/photo-1639744210631-209fce3e256c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FkZWQlMjBmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NzYyMDI3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    popular: true,
  },
  {
    name: "Crispy Wings",
    description: "8 piece wings tossed in your choice of sauce. Always hits the spot.",
    price: "10.99",
    image: "https://images.unsplash.com/photo-1712286928542-17af515d3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBjaGlja2VuJTIwd2luZ3N8ZW58MXx8fHwxNzc2MjAyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Chicken Deluxe",
    description: "Crispy fried chicken, lettuce, tomato, spicy mayo. A certified classic.",
    price: "9.99",
    image: "https://images.unsplash.com/photo-1671522635501-f03491b207e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW4lMjBidXJnZXJ8ZW58MXx8fHwxNzc2MjAyNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Nugget Bucket",
    description: "12 golden nuggets with 3 dipping sauces. Perfect for sharing (or not).",
    price: "8.99",
    image: "https://images.unsplash.com/photo-1761545832737-bc8d52aa2001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwbnVnZ2V0cyUyMHNhdWNlfGVufDF8fHx8MTc3NjIwMjc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Thick Shake",
    description: "Creamy milkshake in chocolate, vanilla, or strawberry. The perfect finish.",
    price: "5.99",
    image: "https://images.unsplash.com/photo-1571245836612-09ae71811d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrc2hha2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc3NjE5OTc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Our Menu
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handcrafted with passion. Every bite brings you back for more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}