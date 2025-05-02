import React, { ReactNode } from 'react'

const FeatureItem = ({ icon, title, value }: { icon: JSX.Element, title: string, value: (Number | string) }) => {
  return (
    <article className='h-[112px] w-full p-[20px] flex items-center bg-white rounded-lg shadow-lg gap-4'>
      {/* Icon */}
      <div className='size-[72px] rounded-lg bg-primary text-white flex items-center justify-center'>
        {icon}
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1'>
        <p className='text-xl text-[#18191C] font-IranSansX-Bold text-end' dir='ltr'>+ {value.toLocaleString('fa-IR')}</p>
        <h3 className='text-sm font-IranSansX-Regular text-[#767F8C]'>{title}</h3>
      </div>
    </article>
  )
}

export default FeatureItem