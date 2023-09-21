import React from 'react'
import CardHero from './CardHero'

const HeroSection = () => {
  return (
    <div className='flex flex-col text-center'>
        <h1 className='text-5xl'>Eric Aranda</h1>
        <p>Ingeniero Mecánico</p>
        {/* <div className='border-2 w-full text-center'>
            <CardHero/>
        </div> */}
        {/* <div className='border-2 basis-1/2'>LA imagen</div> */}
    </div>
  )
}

export default HeroSection