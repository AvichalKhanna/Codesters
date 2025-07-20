// HomeScreen.jsx
import {
  LogOut,
  PlusCircle,
  Settings,
  Mail,
  Gamepad2,
  Newspaper,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import astronaut from "../assets/astronaut.svg";
import { useState, useEffect } from "react";

const contacts = [
  {
    name: "Commander Vaga",
    status: "online",
    message: "Listening to music 🎵",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Dark Side Representative",
    status: "offline",
    message: "Busy at work",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Charlie",
    status: "online",
    message: "Available to chat!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function HomeScreen() {
  const [profile, setProfile] = useState({
    name: "MSN Messenger",
    role: "Classic Instant Messenger",
    age: "22",
    birthday: "July 22, 2003",
    status: "Available 💬",
  });

  useEffect(() => {
    const storedProfile = sessionStorage.getItem("msnProfile");
    if (storedProfile) setProfile(JSON.parse(storedProfile));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 flex h-screen w-screen text-white font-mono overflow-hidden pt-20"
      style={{ fontFamily: "Orbitron" }}
    >
      {/* Left Panel */}
      <div className="w-full sm:w-[70%] flex flex-col justify-between border-r border-yellow-500/30 p-4 space-y-4">
        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between p-3 border-b border-yellow-400/20 rounded-xl"
        >
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/100?img=4"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-yellow-400/30"
            />
            <div>
              <div className="text-lg font-bold text-yellow-100"> {profile.name} (YOU)</div>
              <div className="text-xs text-left text-yellow-300/80">{profile.status}</div>
            </div>
          </div>
          <LogOut size={20} className="cursor-pointer hover:scale-110 transition text-yellow-200" />
        </motion.div>

        {/* Contacts */}
        <div className="overflow-y-auto pr-4 space-y-10 max-h-[70vh] scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent">
          {/* Online */}
          <div>
            <h2 className="text-2xl flex justify-between items-center font-semibold border-b border-yellow-500/20 pb-1 mb-3 tracking-wide uppercase text-yellow-200">
              Online
              <div className="bg-yellow-400 w-6 h-6 rounded-full" />
            </h2>
            <div className="space-y-4">
              {contacts
                .filter((c) => c.status === "online")
                .map((c, i) => <ContactCard key={i} contact={c} />)}
            </div>
          </div>

          {/* Offline */}
          <div>
            <h2 className="text-2xl flex justify-between items-center font-semibold border-b border-yellow-500/20 pb-1 mb-3 tracking-wide uppercase text-yellow-300/70">
              Offline
              <div className="bg-yellow-800 w-6 h-6 rounded-full" />
            </h2>
            <div className="space-y-4">
              {contacts
                .filter((c) => c.status === "offline")
                .map((c, i) => <ContactCard key={i} contact={c} />)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center pt-3 border-t border-yellow-500/20 text-sm">
          <div className="flex items-center space-x-4 text-yellow-300">
            <PlusCircle size={20} className="hover:scale-110 transition cursor-pointer" />
            <Settings size={20} className="hover:scale-110 transition cursor-pointer" />
          </div>
          <div className="text-xs text-yellow-300/70">MSM • 2025 Edition</div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden sm:flex w-[30%] flex-col justify-between p-4 border-l border-yellow-500/20">
        <div className="flex flex-col space-y-4">
          <SidebarTab icon={<Mail />} label="Inbox" id="/Chats" />
          <SidebarTab icon={<Gamepad2 />} label="Contacts" id="/Contact" />
          <SidebarTab icon={<Newspaper />} label="News" id="/News" />
        </div>

        {/* Astronaut + Profile */}
        <div className="flex flex-col items-center space-y-8 mt-6">
          <motion.img
            src={astronaut}
            alt="astronaut"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, -10, 20, 10, 0], y: [0, -20, 0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 md:w-52"
          />

          {/* Profile */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide drop-shadow-md">
              {profile.name} (YOU)
            </h1>

            <p className="text-white/80 text-sm uppercase tracking-widest">
              {profile.role}
            </p>

            <div className="flex justify-center gap-4 text-sm text-yellow-100/90 mt-2">
              <span className="px-3 py-1 bg-yellow-900/20 rounded-full border border-yellow-400/30 backdrop-blur-sm shadow-sm">
                🎂 {profile.birthday}
              </span>
              <span className="px-3 py-1 bg-yellow-900/20 rounded-full border border-yellow-400/30 backdrop-blur-sm shadow-sm">
                Age: {profile.age}
              </span>
            </div>

            <p className="text-yellow-300 text-xs italic mt-3 px-4 py-2 border border-yellow-500/30 bg-yellow-900/20 backdrop-blur-md rounded-lg shadow-inner">
              “{profile.status || "Exploring the stars, one protocol at a time..."}”
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ContactCard Component
function ContactCard({ contact }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center space-x-3 p-2 hover:bg-yellow-500/10 rounded-md cursor-pointer transition-all duration-300 ease-in-out border-2 border-yellow-200/10"
    >
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-10 h-10 rounded-full border border-yellow-400/30"
      />
      <div>
        <div className="font-semibold text-sm text-yellow-100">{contact.name}</div>
        <div className="text-xs text-yellow-300/70 truncate">{contact.message}</div>
      </div>
    </motion.div>
  );
}

// SidebarTab Component
function SidebarTab({ icon, label, id }) {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(id)}
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-3 p-3 hover:bg-yellow-500/10 
      rounded-md cursor-pointer transition-all duration-300 ease-in-out 
      border-b-2 border-yellow-200/30"
    >
      <div className="text-yellow-300">{icon}</div>
      <div className="text-sm text-yellow-100">{label}</div>
    </motion.button>
  );
}
