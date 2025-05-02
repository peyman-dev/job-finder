import React from 'react'
import { motion } from 'motion/react'
import { History, Search } from 'lucide-react'

export const SearchDropdown = ({ }) => {
    return (
        <motion.div className='absolute w-full top-full p-5 bg-white shadow-lg border border-[#E4E5E8] rounded-lg' initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 300 }} // 300px یا مقداری بیشتر از ارتفاع مورد انتظار
            exit={{ opacity: 0, maxHeight: 0 }}
            style={{ overflow: 'hidden' }}>
            <div className='mb-5'>
                <div className="flex items-center text-xs text-zinc-600 gap-2">
                    <History className='size-4' />
                    <span>جستجو های اخیر: </span>
                </div>
            </div>
            <div>
                <p className='text-xs w-full border-b border-zinc-300 pb-3 flex text-zinc-500 items-center gap-2'>
                    <span>
                        <Search className='size-4' />
                    </span>
                    <span>
                        جستجو های مرتبط:
                    </span>
                </p>
            </div>
        </motion.div >
    )
}
