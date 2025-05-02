import { HowItWorkStepType } from '@/app/core/types/types'
import React from 'react'

// HiwStep = How It Works Step

export const HiwStep = ({ step }: { step: HowItWorkStepType }) => {
    return (
        <article className='h-[224px] group rounded-3xl duration-150 hover:bg-white p-6 relative'>
            <div className='absolute'>
                {/* <img src="/images/arrow.svg" alt="" /> */}
            </div>
            <div className="size-full flex items-center justify-center flex-col gap-4">
                <div className="size-[72px] text-primary group-hover:bg-primary group-hover:text-white duration-150 rounded-full flex items-center justify-center bg-white">
                    {step.icon}
                </div>
                <div className='text-center'>
                    <p className=''>
                        <strong>
                            {step.title}
                        </strong>
                    </p>
                    <p className='mt-2 text-sm text-[#767F8C]'>
                        {step.description}
                    </p>
                </div>
            </div>
        </article>
    )
}
