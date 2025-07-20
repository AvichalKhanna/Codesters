import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserCircle, Pencil, Save } from "lucide-react";
import NavBar from "../components/NavBar";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    sessionStorage.setItem("msnProfile", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <>
      <NavBar />
      <div className="absolute top-0 left-0 h-screen w-screen text-white pt-20 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center backdrop-blur-[3px] p-6 rounded-xl shadow-xl border border-cyan-300/30"
        >
          <UserCircle size={100} className="text-cyan-300 mx-auto mb-4" />
          
          {isEditing ? (
            <div className="space-y-3">
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full bg-white/10 p-2 rounded-md text-white"
                placeholder="Name"
              />
              <input
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full bg-white/10 p-2 rounded-md text-white"
                placeholder="Role"
              />
              <input
                name="age"
                value={profile.age}
                onChange={handleChange}
                className="w-full bg-white/10 p-2 rounded-md text-white"
                placeholder="Age"
              />
              <input
                name="birthday"
                value={profile.birthday}
                onChange={handleChange}
                className="w-full bg-white/10 p-2 rounded-md text-white"
                placeholder="Birthday"
              />
              <input
                name="status"
                value={profile.status}
                onChange={handleChange}
                className="w-full bg-white/10 p-2 rounded-md text-white"
                placeholder="Status"
              />
            </div>
          ) : (
            <>
<div className="text-center mt-4 space-y-2">
  <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide drop-shadow-md">
    {profile.name}
  </h1>

  <p className="text-cyan-200 text-sm uppercase tracking-wider">
    {profile.role}
  </p>

  <div className="flex justify-center items-center gap-4 text-sm text-white/60 mt-2">
    <span className="px-3 py-1 bg-cyan-900/30 rounded-full border border-cyan-400/30 backdrop-blur-sm shadow-sm">
      🎂 {profile.birthday}
    </span>
    <span className="px-3 py-1 bg-cyan-900/30 rounded-full border border-cyan-400/30 backdrop-blur-sm shadow-sm">
      Age: {profile.age}
    </span>
  </div>

  <p className="text-cyan-300 text-xs italic mt-3 px-4 py-2 border border-cyan-500/30 bg-cyan-900/20 backdrop-blur-md rounded-lg shadow-inner">
    “{profile.status || "Exploring the stars, one protocol at a time..."}”
  </p>
</div>

            </>
          )}

          <button
            className="mt-6 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg flex items-center space-x-2 mx-auto"
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? <Save size={18} /> : <Pencil size={18} />}
            <span>{isEditing ? "Save" : "Edit Profile"}</span>
          </button>
        </motion.div>
      </div>
    </>
  );
}
