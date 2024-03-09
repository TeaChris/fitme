'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'

export const Animation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="w-fit h-fit"
      animate={{ x: [13, 60, 13] }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  )
}
