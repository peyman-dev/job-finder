import React from 'react'
import FeatureItem from './Feature-item'
import { Briefcase } from 'lucide-react'
import { features } from '@/app/core/data/static-datas'

export const Features = () => {
  return (
    <section className='grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center w-full '>
      {
        features.map(feature => <FeatureItem {...feature} key={feature.id} />)
      }
    </section>
  )
}
