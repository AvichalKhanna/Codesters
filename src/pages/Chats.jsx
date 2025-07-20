import { useState } from "react";
import NavBar from "../components/NavBar";
import CosmicButton from "../components/CosmicButton";
import EmojiPicker from 'emoji-picker-react';

const dummyChats = [
  {
    id: 1,
    name: "Captain Nova",
    messages: [
      { sender: "Captain Nova", text: "Report status.", time: "10:02 AM" },
      { sender: "You", text: "Everything nominal.", time: "10:03 AM" },
    ],
  },
  {
    id: 2,
    name: "Commander Vega",
    messages: [
      { sender: "Commander Vega", text: "Fuel levels?", time: "11:45 AM" },
      { sender: "You", text: "78% and stable.", time: "11:46 AM" },
    ],
  },
  {
    id: 3,
    name: "AI Unit Z3",
    messages: [
      { sender: "AI Unit Z3", text: "Initiating scan.", time: "08:50 AM" },
      { sender: "You", text: "Scan complete.", time: "08:52 AM" },
    ],
  },
];

export default function Chats() {
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState(dummyChats);
  const [showEmoji, setShowEmoji] = useState(false);
  const [nudge, setNudge] = useState(false);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const updatedChats = chats.map((chat) => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              sender: "You",
              text: input,
              time: getCurrentTime(),
            },
          ],
        };
      }
      return chat;
    });

    setChats(updatedChats);
    setInput("");
    setShowEmoji(false);
  };

  const addEmoji = (emoji) => {
    
    const hexCode = "0x" + emoji.unified;

    const emojichar = String.fromCodePoint(parseInt(hexCode, 16));

    setInput((prev) => prev + emojichar);
  };

  const handleNudge = () => {
    setNudge(true);
    setTimeout(() => setNudge(false), 500);
    const updatedChats = chats.map((chat) => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              sender: "You",
              text: "*You sent a space nudge* 🚀",
              time: getCurrentTime(),
            },
          ],
        };
      }
      return chat;
    });
    setChats(updatedChats);
  };

  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-screen flex flex-col sm:flex-row text-white font-mono pt-20">

        {/* Sidebar */}
        <div className="sm:w-1/3 w-full border-r border-gray-700 p-4 sm:h-full h-[35%] overflow-y-auto">
          <h2 className="text-xl font-bold text-cyan-300 mb-4 tracking-wide pb-2 border-b-1 border-cyan-300/30">
            🛰️ Galactic Comms
          </h2>
          <ul className="space-y-2">
            {chats.map((chat) => (
              <li
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 text-sm tracking-wide ${
                  selectedChatId === chat.id
                    ? "bg-cyan-800/30 border border-cyan-500"
                    : "hover:bg-cyan-900/20"
                }`}
              >
                {chat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat area */}
        <div className="sm:w-2/3 w-full flex flex-col justify-between p-4">
          <div
            className={`flex-1 overflow-y-auto mb-4 space-y-4 pr-2 transition-all duration-300 ${
              nudge ? "animate-shake" : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-cyan-400 border-b border-cyan-600/60 pb-2">
              {selectedChat.name}
            </h3>
            {selectedChat.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === "You" ? "items-end text-right" : "items-start text-left"
                }`}
              >
                <span className="text-xs text-cyan-300 font-bold mb-1">{msg.sender}</span>
                <div className="bg-cyan-700/40 border border-cyan-500/30 text-sm rounded-xl px-4 py-2 max-w-[80%]">
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-end border-t border-gray-700 pt-4 relative flex-wrap gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black/30 border border-cyan-500/40 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Transmit message..."
            />
            <CosmicButton
              text="🚀 Nudge"
              onClick={handleNudge}
              classname="ml-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg transition-all text-sm"
            />
            <CosmicButton
              text="Send"
              onClick={handleSend}
              classname="ml-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-4 py-2 rounded-lg transition-all text-sm"
            />
            <button
              onClick={() => setShowEmoji((prev) => !prev)}
              className="ml-2 text-xl hover:scale-110 transition"
              title="Emoji Picker"
            >
              😊
            </button>

            {showEmoji && (
              <div className="absolute bottom-16 right-0 z-50">
                <EmojiPicker onEmojiClick={addEmoji} theme="dark" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
