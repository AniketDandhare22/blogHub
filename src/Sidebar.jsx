import { useState } from "react";
import { FiHome, FiTrendingUp, FiCpu, FiEdit, FiBriefcase, FiHeart, FiBook } from 'react-icons/fi';

function Sidebar({ theme }) {
  const [activeItem, setActiveItem] = useState("");

  const items = [
    { name: "All Posts", icon: <FiHome />, color: "text-logo light:text-logo2 hover:animate-float", bg: "bg-orange-100 light:bg-purple-100" },
    { name: "Trending", icon: <FiTrendingUp />, color: "text-red-600", bg: "bg-red-100" },
    { name: "Technology", icon: <FiCpu />, color: "text-blue-500", bg: "bg-blue-100" },
    { name: "Design", icon: <FiEdit />, color: "text-violet-600", bg: "bg-violet-100" },
    { name: "Business", icon: <FiBriefcase />, color: "text-green-500", bg: "bg-green-100" },
    { name: "Lifestyle", icon: <FiHeart />, color: "text-yellow-500", bg: "bg-yellow-100" },
    { name: "Education", icon: <FiBook />, color: "text-pink-600", bg: "bg-pink-100" },
  ];

  return (
    <aside className={`w-full bg-transparent p-4 hidden md:block ${!theme ? "light" : ""}`}>
      <h2 className="text-2xl font-semibold light:text-primaryD text-primary mt-3 mb-7">
        Categories
      </h2>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => setActiveItem(item.name)} // Set active on click
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
              transition text-xl
              ${activeItem === item.name 
                ? `font-semibold ${item.color} ${item.bg}` // Active style
                : `text-white/50 light:text-txSecondary hover:${item.bg} hover:${item.color} `
              } 
              
            `}
          >
            <span className={`flex-shrink-0 ${item.color} `}>{item.icon}</span>
            <span className="text-[17px]">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
