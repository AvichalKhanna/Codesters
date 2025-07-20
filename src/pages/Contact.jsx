import { useState } from "react";
import NavBar from "../components/NavBar";
import CosmicButton from "../components/CosmicButton";

export default function Contact() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Lieutenant Sol", role: "Navigator", frequency: "128.5 MHz" },
    { id: 2, name: "Engineer Kora", role: "Ship Maintenance", frequency: "142.2 MHz" },
  ]);
  const [newContact, setNewContact] = useState({ name: "", role: "", frequency: "" });

  const addContact = () => {
    const { name, role, frequency } = newContact;
    if (!name.trim() || !role.trim() || !frequency.trim()) return;
    setContacts(prev => [
      ...prev,
      {
        id: prev.length + 1,
        name,
        role,
        frequency,
      },
    ]);
    setNewContact({ name: "", role: "", frequency: "" });
  };

  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 w-screen h-screen p-6 pt-24 sm:pt-20 text-white font-mono bg-transparent">
        <div className="max-w-5xl mx-auto h-full flex flex-col sm:flex-row border border-cyan-500/30 bg-black/20 rounded-xl">
          
          {/* Logbook Title Sidebar */}
          <div className="sm:w-1/3 w-full border-r border-cyan-500/20 p-4">
            <h2 className="text-xl xs:text-2xl font-bold text-cyan-300 mb-4 tracking-wide">📓 Ship Logbook</h2>
            <p className="text-sm text-cyan-100/70 border-b border-cyan-300/30 pb-5">Records of interstellar crew & comms.</p>
          </div>

          {/* Contacts Section */}
          <div className="sm:w-2/3 w-full flex flex-col justify-between p-4 space-y-4">
            {/* Existing Contacts */}
            <div className="overflow-y-auto flex-1 space-y-3 pr-2">
              <h3 className="text-lg font-semibold text-cyan-400 border-b border-gray-600 pb-2">👥 Crew Contacts</h3>
              {contacts.map(contact => (
                <div
                  key={contact.id}
                  className="border border-cyan-500/20 rounded-lg px-4 py-3 bg-cyan-700/10 transition-all hover:bg-cyan-800/20"
                >
                  <p className="font-bold text-cyan-200">{contact.name}</p>
                  <p className="text-sm text-cyan-100/80">{contact.role}</p>
                  <p className="text-xs text-cyan-100/50 italic">Freq: {contact.frequency}</p>
                </div>
              ))}
            </div>

            {/* Add New Contact */}
            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold mb-2 text-cyan-300">➕ Log New Crew Member</h4>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={newContact.name}
                  onChange={e => setNewContact({ ...newContact, name: e.target.value })}
                  className="flex-1 bg-black/30 border border-cyan-500/40 rounded px-3 py-2 text-sm placeholder-cyan-200 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={newContact.role}
                  onChange={e => setNewContact({ ...newContact, role: e.target.value })}
                  className="flex-1 bg-black/30 border border-cyan-500/40 rounded px-3 py-2 text-sm placeholder-cyan-200 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="text"
                  placeholder="Frequency"
                  value={newContact.frequency}
                  onChange={e => setNewContact({ ...newContact, frequency: e.target.value })}
                  className="flex-1 bg-black/30 border border-cyan-500/40 rounded px-3 py-2 text-sm placeholder-cyan-200 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <CosmicButton
                  text="Log"
                  onClick={addContact}
                  classname="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-4 py-2 rounded-lg transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
