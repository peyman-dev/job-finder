import React from 'react'
import { HiwStep } from './HiwStep'
import { howItWorksSteps } from '@/app/core/data/static-datas'

export const HowItWorks = () => {
    return (
        <div className='w-full' id="hiw-parent-element">
            <div className='w-full'>
                <h4 className='text-center text-3xl font-IranSansX-Bold text-[#18191C]'>
                    ما چگونه کار می‌کنیم ؟
                </h4>
            </div>

            <div className='grid grid-cols-4 gap-6 mt-[50px]' id='hiw-steps'>
                {howItWorksSteps.map((step, index) => (
                    <HiwStep key={index} step={step} />
                ))}
            </div>
        </div>
    )
}
