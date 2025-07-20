import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function CosmicButton({ text = "Button", navigateto = -1, onClick="", classname="" }) {
  const navigate = useNavigate()

  return (
    <AnimatePresence mode="wait">
      
        <motion.button
          key="cosmic"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick= {onClick?  (onClick) : () => navigate(navigateto)}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 15px 4px rgba(255, 255, 0, 0.2)",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          className={`relative inline-block cursor-pointer ${classname? classname : "px-6 py-4 mb-5 text-white rounded-2xl overflow-hidden transition-all duration-200 ease-in-out backdrop-blur-sm font-mono bg-transparent" } `}
          style={{ fontFamily: "Share Tech Mono" }}
        >
          {text}

 
          {/* Decorative animated border elements */}
          {[
            "left-1 bottom-1 h-0.5 w-[10%]",
            "right-1 bottom-1 h-0.5 w-[10%]",
            "left-1 top-1 h-0.5 w-[10%]",
            "right-1 top-1 h-0.5 w-[10%]",
            "left-1 bottom-1 h-[20%] w-0.5",
            "right-1 bottom-1 h-[20%] w-0.5",
            "left-1 top-1 h-[20%] w-0.5",
            "right-1 top-1 h-[20%] w-0.5"
          ].map((pos, idx) => (
            <motion.span
              key={idx}
              className={`absolute ${pos} bg-yellow-400`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            />
          ))}
        </motion.button>
      
    </AnimatePresence>
  )
}
