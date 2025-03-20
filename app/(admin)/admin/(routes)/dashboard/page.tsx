import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-[70vh] flex flex-col items-center gap-y-4 justify-center'>
       <h1 className='text-5xl font-bold'>Welcome to</h1>
      <Image
      src={"/landing-hero.png"}
      width={200}
      height={200}
      alt='image'
      className='rounded-full'
      />
      <h1 className='text-5xl font-bold'>HR Nova AI</h1>
    </div>
  )
}

export default page
