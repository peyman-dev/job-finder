"use client"

import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <button onClick={handleMenuToggle}>
                <Menu className='size-4' />
            </button>

            <AnimatePresence>
                {isMenuOpen &&
                    <motion.aside
                        className='w-[300px] h-screen bg-white absolute top-0 right-0 z-50 shadow-lg'
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: -1000 }}
                    >
                        test
                    </motion.aside>
                }
            </AnimatePresence>
        </div>
    )
}