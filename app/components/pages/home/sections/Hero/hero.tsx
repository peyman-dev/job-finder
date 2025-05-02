import React, { ReactNode } from 'react'
import styles from './../../home.module.css'
import { JobSearchField } from './job-search-field'


export const Hero = () => {
    return (
        <section id='home-hero' className={styles.hero}>
            <div>
                <h1 className='md:text-4xl text-2xl md:text-start text-center !leading-[1.40] font-IranSansX-Black text-[#18191C]'>
                    شغلی پیدا کنید که با علایق و مهارتهایتان همخوانی داشته باشد.
                </h1>
                <p id='home-description' className='text-[#5E6670] md:text-start md:text-base text-sm text-center'>
                    در وبسایت ما، شغل رویایی خود را پیدا کنید! با تطبیق هوشمند مهارتها و علایق شما با فرصتهای شغلی، راهی سریع و آسان به سمت موفقیت شغلی باز کنید. همین امروز رزومه خود را ثبت کنید یا موقعیتهای شغلی متناسب با تخصصتان را جستجو کنید.
                </p>
                <JobSearchField />
            </div>
            <div className='flex items-center justify-center'>
                <img src="/images/hero.svg" alt="" />
            </div>
        </section>
    )
}
