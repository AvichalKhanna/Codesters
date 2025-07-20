import { FileText, Search } from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { useState } from "react";

const docsData = [
  { id: 1, title: "Sending a Message", desc: "Click the text bar, type your message, and press Enter." },
  { id: 2, title: "Receiving Messages", desc: "New messages appear in the chat window with a sound ping." },
  { id: 3, title: "Using Emojis", desc: "Type shortcuts like :) or use the emoji picker to send emoticons." },
  { id: 4, title: "Nudging Friends", desc: "Click the 'nudge' button to shake their screen and grab attention." },
  { id: 5, title: "File Transfers", desc: "Drag a file into the chat or use the clip icon to send files." },
  { id: 6, title: "Custom Status", desc: "Set your availability to Online, Away, Busy or appear Offline." },
];

export default function Docs() {
  const [query, setQuery] = useState("");

  const filtered = docsData.filter(d =>
    d.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-screen bg-transparent text-white pt-20 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400">How To Guide</h1>

          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search logs..."
              className="w-full bg-white/10 border border-cyan-500 rounded-full py-2 pl-12 pr-4 text-white placeholder-white/60 focus:bg-white/20 transition"
            />
            <Search className="absolute top-2 left-4 w-6 h-6 text-cyan-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(doc => (
              <motion.div
                key={doc.id}
                whileHover={{ scale: 1.03 }}
                className="border border-cyan-500 rounded-xl p-6 backdrop-blur-md bg-white/5 cursor-pointer transition"
              >
                <FileText className="text-cyan-300 mb-3" size={32} />
                <h2 className="text-xl font-semibold">{doc.title}</h2>
                <p className="text-sm text-white/80 mt-1">{doc.desc}</p>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-white/60 col-span-full py-10">
                No logs found for "<span className="text-cyan-400">{query}</span>"
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
