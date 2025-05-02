import { Earth, Search } from 'lucide-react'
import React from 'react'


const JobTitleInput = (): React.JSX.Element => {
    return (<div>
        <span>
            <Search className='size-5 text-primary' />
        </span>
        <input className="size-full placeholder:text-sm outline-none px-3 text-sm" placeholder='عنوان شغل, نام شرکت را وارد کنید ...' type="text" />
    </div>)
}

const JobLocationInput = (): React.JSX.Element => {
    return (<div>
        <span>
            <Earth className='size-5 text-primary' />
        </span>
        <input className="size-full placeholder:text-sm outline-none px-3 text-sm" placeholder='نام شهر را وارد کنید ...' type="text" />
    </div>)
}

export const JobSearchField = () => {
    return (
        <div className='h-16 bg-white md:w-full p-3 rounded-lg overflow-hidden flex items-center gap-3 child:w-1/2 child:h-full child:rounded-lg child:overflow-hidden child:flex child:items-center child:gap-2'>
            <JobTitleInput />
            <JobLocationInput />
            <button className='max-w-max  px-5 h-14 bg-primary text-white duration-150 hover:bg-opacity-90'> جستجو کنید</button>
        </div>
    )
}
