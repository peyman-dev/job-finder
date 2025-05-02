import Link from 'next/link'
import React from 'react'

export const MiniTopHeader = () => {
    return (
        <div className='container py-3 hidden invisible lg:visible lg:flex items-center justify-between text-sm'>
            <div className='flex items-center gap-[14px] text-[#5E6670]'>
                <Link href={'/'}>
                    خانه
                </Link>
                <Link href={'/'}>
                    جستجوی شغل
                </Link>
                <Link href={'/'}>
                ثبت آگهی
                </Link>
                <Link href={'/'}>
                اشتراک ویژه
                </Link>
                <Link href={'/'}>
                تماس با پشتیبانی
                </Link>
            </div>
            <div>2</div>

        </div>
    )
}
