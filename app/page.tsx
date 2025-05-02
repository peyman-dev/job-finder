import React from 'react'
import { Header } from './components'
import { Features, Hero, HowItWorks, PopularVacanciesList } from './components/pages'
import { Container } from './components/ui'

const page = () => {
  return (
    <>
      <Header />
      <Container className="pb-[100px] min-h-screen">
        <Hero />
        <Features />
      </Container>
      <PopularVacanciesList />
      <Container className={"md:h-[522px] flex items-center justify-center"}>
        <HowItWorks />
      </Container>
    </>
  )
}

export default page