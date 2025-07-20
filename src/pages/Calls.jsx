import {
  Video,
  PhoneMissed,
  User,
  VideoOff,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const dummyCalls = [
  { id: 1, name: "Avi", missed: false, time: "10:30 AM" },
  { id: 2, name: "Maya", missed: true, time: "Yesterday" },
  { id: 3, name: "Nova", missed: false, time: "2 days ago" },
];

export default function Calls() {
  const [selectedCall, setSelectedCall] = useState(dummyCalls[0]);
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 pt-20 flex h-screen w-screen text-white font-sans">
        {/* Sidebar */}
        <div className="w-64 backdrop-blur-[3px] border-r border-white/10 p-4 overflow-y-auto hidden md:block">
          <h2 className="text-lg font-bold mb-4 text-yellow-400">
            Call Logs
          </h2>
          {dummyCalls.map((call) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={call.id}
              className={`flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer transition-all ${
                selectedCall.id === call.id
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
              onClick={() => setSelectedCall(call)}
            >
              <User className="w-6 h-6 text-cyan-400" />
              <div className="flex-1">
                <p className="text-sm">{call.name}</p>
                <p className="text-xs text-white/60">{call.time}</p>
              </div>
              {call.missed && (
                <PhoneMissed className="text-red-500 w-4 h-4" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Main Panel */}
        <div className="flex-1 flex flex-col items-center justify-between p-4 relative space-y-4">
          {/* Top Nav */}
          <div className="w-full flex justify-between items-center">
            <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-xl font-bold uppercase tracking-widest text-cyan-400">
              Call with {selectedCall.name}
            </h1>
            <button onClick={() => navigate("/Chats")}>
              <MessageSquare className="w-5 h-5 text-yellow-400" />
            </button>
          </div>

          {/* Center Avatar / Video */}
          <motion.div
            className="flex flex-col items-center justify-center flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-48 h-48 md:w-60 md:h-60 bg-white/10 rounded-full border border-white/30 overflow-hidden flex items-center justify-center">
              <VideoOff className="w-20 h-20 text-white/30" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-yellow-400">
              {selectedCall.name}
            </h2>
            <p className="text-sm text-white/60 animate-pulse">Calling...</p>
          </motion.div>

          {/* Bottom Controls */}
          <div className="flex items-center space-x-6 pb-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center"
            >
              <PhoneMissed className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-black rounded-full w-14 h-14 flex items-center justify-center"
            >
              <Video className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
