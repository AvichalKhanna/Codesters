import { useEffect, useState } from "react";
import CosmicButton from "../components/CosmicButton";

const gridSize = 3;

export default function Welcome(){
  const [target, setTarget] = useState([0, 0]);
  const [verified, setVerified] = useState(false);
  const [tries, setTries] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);

  useEffect(() => {
    if (!verified && showCaptcha) {
      const interval = setInterval(() => {
        setTarget([
          Math.floor(Math.random() * gridSize),
          Math.floor(Math.random() * gridSize),
        ]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [verified, showCaptcha]);

  function handleClick(row, col) {
    setTries((prev) => prev + 1);
    if (row === target[0] && col === target[1]) {
      setVerified(true);
    }
  }
return (
        <>
            <div className="flex items-center justify-center h-full text-white px-6 z-50">
            <div className="text-center space-y-6"
            style={{ fontFamily:"Orbitron"}}>
                
                <h1 className="text-3xl font-extrabold tracking-light
                lg:text-5xl 
                ">MY SPACE MESSENGER</h1>
                
                
                <p className="text-lg text-gray-400 max-w-xl mx-auto">
                    As the decline of MSN Messenger came, along came the Xarnak Overlords,
                    Ruthless, UnHuman, but smart, really smart, they recognised the potential 
                    that MSN Messenger had so they reimagined it, as My Space Messenger!
                    An Inter Galactic Message Tranfer System! 
                    For the Elite Earthlings and Overlords.
                </p>
   <div className="flex flex-col items-center gap-6 mt-10">
    {verified && (
      <CosmicButton
        text="Proceed to Greatness"
        navigateto="/Messenger"
        disabled={!verified}
      />
    )}
      {!showCaptcha && !verified && (
        <CosmicButton
          onClick={() => setShowCaptcha(true)}
          className="px-6 py-2 rounded-lg text-white shadow-xl hover:scale-105 transition-all"
          text="Press to Complete Captcha">
        </CosmicButton>
      )}

      {showCaptcha && !verified && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-cyan-300 text-sm italic">
            Catch the alien to verify access!
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: gridSize }).map((_, row) =>
              Array.from({ length: gridSize }).map((_, col) => {
                const isAlien = row === target[0] && col === target[1];
                return (
                  <button
                    key={`${row}-${col}`}
                    onClick={() => handleClick(row, col)}
                    className={`w-16 h-16 flex items-center justify-center rounded-md border transition-all duration-300 ${
                      isAlien
                        ? "bg-green-500 text-black text-xl animate-pulse"
                        : "bg-cyan-950/60 border-cyan-500 text-cyan-300"
                    } hover:scale-105`}
                  >
                    {isAlien ? "👾" : "•"}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {verified && (
        <div className="text-green-400 mt-2 animate-pulse text-sm">
          ✅ Access granted, Earthling.
        </div>
      )}

      {!verified && tries > 0 && showCaptcha && (
        <div className="text-pink-400 text-xs mt-2">
          Attempts: {tries} — Try again!
        </div>
      )}
    </div>
            </div>
            </div>
                </>
    )
}