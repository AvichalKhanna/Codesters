import { Settings as SettingsIcon, ToggleLeft, UserCog, Bell, Volume2, ShieldCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

export default function Settings() {
  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-screen bg-transparent text-white pt-20 px-6 md:px-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-6">MSN Messenger Settings Console</h1>

          <div className="space-y-5">
            {/* Hyper Mode */}
            <SettingTile
              icon={<ToggleLeft size={28} className="text-cyan-300" />}
              title="Enable Hyper Mode"
              action="Activate"
            />

            {/* Notification Sounds */}
            <SettingTile
              icon={<Bell size={28} className="text-cyan-300" />}
              title="Messenger Alerts & Sounds"
              action="Customize"
            />

            {/* Volume */}
            <SettingTile
              icon={<Volume2 size={28} className="text-cyan-300" />}
              title="Buzz & Nudge Intensity"
              action="Adjust"
            />

            {/* Profile Customization */}
            <SettingTile
              icon={<UserCog size={28} className="text-cyan-300" />}
              title="Avatar & Status Customization"
              action="Configure"
            />

            {/* Privacy */}
            <SettingTile
              icon={<ShieldCheck size={28} className="text-cyan-300" />}
              title="Privacy & Block List"
              action="Manage"
            />

            {/* Theme / Visibility */}
            <SettingTile
              icon={<Eye size={28} className="text-cyan-300" />}
              title="Stealth & Offline Appearance"
              action="Toggle"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}


function SettingTile({ icon, title, action }) {
  return (
    <div className="flex items-center justify-between border border-cyan-400 rounded-xl p-4 backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-base md:text-lg">{title}</span>
      </div>
      <button className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 transition rounded-full text-sm">{action}</button>
    </div>
  );
}
