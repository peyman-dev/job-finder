"use client"
import { PopularVacancy } from '@/app/core/types/types'
import Link from 'next/link'
import React from 'react'

export const VacancyItem = ({ ...props }: PopularVacancy) => {
    return (
        <Link href={'/'} className='w-full rounded-lg p-3 border border-transparent hover:border-zinc-200/50 duration-150'>
            <p className='font-IranSansX-Bold text-[#18191C]'>
                {props.title}
            </p>
            <p className='text-xs font-IranSansX-Regular mt-2 text-zinc-400'>
                + {props.value} موقعیت شغلی
            </p>
        </Link>
    )
}
