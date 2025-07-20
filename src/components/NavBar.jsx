import {
  Home,
  MessageCircle,
  User,
  Phone,
  Settings,
  Bell,
  Book,
  UserCircle,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItemsLeft = [
    { icon: <Home size={20} />, label: "Home", path: "/Messenger" },
    { icon: <MessageCircle size={20} />, label: "Chats", path: "/Chats" },
    { icon: <User size={20} />, label: "Contacts", path: "/Contact" },
    { icon: <Phone size={20} />, label: "Calls", path: "/calls" },
  ];

  const navItemsRight = [
    { icon: <Book size={20} />, label: "Docs", path: "/Docs" },
    { icon: <Bell size={20} />, label: "News", path: "/News" },
    { icon: <Settings size={20} />, label: "Settings", path: "/Settings" },
    { icon: <UserCircle size={20} />, label: "Profile", path: "/Profile" },
  ];

  const renderNavItems = (items) =>
    items.map((item, idx) => {
      const isActive = location.pathname === item.path;
      return (
        <li
          key={idx}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center text-sm group cursor-pointer transition-all duration-300 ${
            isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }`}
        >
          <div className="mb-1 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <span className="text-[10px] font-mono">{item.label}</span>
        </li>
      );
    });

  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden md:flex fixed top-0 left-0 w-full h-16 border-b border-yellow-500/20 px-6 items-center justify-between z-50 bg-black/60 backdrop-blur-md">
        <ul className="flex items-center space-x-[4vw]">
          {renderNavItems(navItemsLeft)}
        </ul>
        <ul className="flex items-center space-x-6">
          {renderNavItems(navItemsRight)}
        </ul>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-14 border-b border-yellow-500/20 px-4 flex items-center justify-around z-50 bg-black/60 backdrop-blur-md">
        {renderNavItems(navItemsLeft)}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-14 border-t border-yellow-500/20 px-4 flex items-center justify-around z-50 bg-black/60 backdrop-blur-md">
        {renderNavItems(navItemsRight)}
      </div>
    </>
  );
}
