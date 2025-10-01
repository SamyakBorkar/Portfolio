"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 800)
          return 100
        }
        return prev + 1
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-gradient-to-br from-orange-50 via-white to-amber-50"
        >
          <div className="relative flex flex-col items-center space-y-10">
            {/* Central Glowing Orb */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px #fb923c", "0 0 40px #f97316", "0 0 20px #fb923c"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-32 h-32 flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-amber-200 via-orange-100 to-rose-200 shadow-lg backdrop-blur-lg"
            >
              <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                S
              </span>

              {/* Rotating Rings */}
              <motion.div
                className="absolute w-40 h-40 rounded-full border-2 border-orange-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-48 h-48 rounded-full border-2 border-amber-300/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Loader Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center space-y-2"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent animate-pulse">
                Samyak's Portfolio
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-orange-500/70 italic"
              >
                Crafting digital experiences...
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "300px", opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-2 rounded-full bg-orange-200/60 overflow-hidden backdrop-blur"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Percentage Counter */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-orange-600 font-mono tracking-wider"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
