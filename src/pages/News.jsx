import { Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const newsFeed = [
  {
    id: 1,
    title: "MSN Messenger v12.5 Launched",
    content: "Now supports holographic chat bubbles and zero-lag galactic messaging.",
    highlight: false
  },
  {
    id: 2,
    title: "New Plugin: Emoticon Neural Uplink",
    content: "Send emojis that react to your tone and brainwaves.",
    highlight: false
  },
  {
    id: 3,
    title: "Alien Takeover Confirmed!",
    content: "Xarnak Overlords declare MSN Messenger as their official communication protocol. All transmissions now routed via space.msn/galnet.",
    highlight: true
  },
  {
    id: 4,
    title: "MSN Archive Vault Unlocked",
    content: "Explore ancient conversations from Earth Year 2002. View retro chatlogs with enhanced AI audio playback.",
    highlight: false
  },
  {
    id: 5,
    title: "System Update: Version 11.3 Changelog",
    content: "Patched wormhole emoji rendering. Improved latency on Pluto relays.",
    highlight: false
  },
  {
    id: 6,
    title: "Dark Mode Outpost Rollout",
    content: "New color schemes based on black hole light distortions. Save power, look stellar.",
    highlight: false
  },
  {
    id: 7,
    title: "First Contact Logs Restored",
    content: "Early transmissions between Earth and Xarnak reveal surprisingly good emoji etiquette.",
    highlight: false
  }
];

export default function News() {
  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-full bg-transparent text-white pt-24 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="max-w-4xl mx-auto space-y-6 pb-20"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8">Ship Feed & Broadcasts</h1>

          {newsFeed.map((item) => (
            <motion.div
              key={item.id}
              initial={{ height: 80 }}
              animate={{ height: 150 }}
              transition={{ duration:0.1, ease:"linear" }}
              className={`relative overflow-hidden rounded-xl border backdrop-blur-md cursor-pointer transition-all duration-500 
                ${item.highlight ? 'border-red-500 bg-red-500/10 animate-pulse' : 'border-cyan-500 bg-white/5'}`}
            >
              <div className="flex items-center space-x-3 p-4">
                <Newspaper className={item.highlight ? "text-red-400" : "text-cyan-300"} />
                <h2 className="text-lg md:text-xl font-semibold">{item.title}</h2>
              </div>
              <p
                className="px-5 pb-6 pt-2 text-white/80 text-md leading-relaxed"
              >
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
