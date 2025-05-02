"use client"
import { Search } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import React, { useState } from 'react'
import { SearchDropdown } from './SearchDropdown'

export const SearchInput = () => {
    const [value, setValue] = useState<string>("")
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchStorage = localStorage.getItem("search-history")
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = e.target.value;
        setValue(enteredValue)

        if (enteredValue.length > 0) {
            setIsDropdownOpen(true)
        } else {
            setIsDropdownOpen(false)
        }

    }

    return (
        <div className='relative max-w-max'>
            <form onSubmit={handleSubmit} className='lg:w-[668px] h-[50px] border border-[#E4E5E8] flex items-center overflow-hidden rounded-lg relative text-sm'>
                <span className='min-w-[60px] h-full flex items-center rounded-lg overflow-hidden justify-center'>
                    <Search className='text-blue-500' />
                </span>
                <input type="text" value={value} onChange={handleInputChange} className='size-full outline-none placeholder:text-sm' placeholder='عنوان شغلی یا نام شرکت ...' />
            </form>
            <AnimatePresence>
                {isDropdownOpen && <SearchDropdown />}
            </AnimatePresence>
        </div>
    )
}
