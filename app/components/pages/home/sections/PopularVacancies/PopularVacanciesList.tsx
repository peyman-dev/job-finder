import { Container } from '@/app/components/ui'
import { popularVacancies } from '@/app/core/data/static-datas'
import React from 'react'
import { VacancyItem } from './VacancyItem'

export const PopularVacanciesList = () => {
    return (
        <section className='w-full py-14 md:py-0 md:h-[530px] bg-white'>
            <Container className={"flex items-center  h-full"}>
                <div className="w-full">

                    <div>
                        <h3 className='text-2xl font-IranSansX-Bold'>محبوب‌ترین فرصت‌های شغلی</h3>
                    </div>
                    <div className='mt-10 grid sm:grid-cols-3 grid-cols-2 py- md:grid-cols-4 gap-6 w-full'>
                        {popularVacancies.map((item) => <VacancyItem {...item} key={Math.random() * 491249}/>)}
                    </div>
                </div>
            </Container>
        </section>
    )
}
