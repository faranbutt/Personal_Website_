import React from 'react'
import Image from 'next/image'
import Star from './Star'
import { Button } from '../ui/button'
export default function Header() {
  return (
    <div className='w-full h-[500px] bg-green-100 flex'>
        <div className='w-[60%] flex justify-center items-center'>
            <div className='pl-10'>
              <div>Hey I am Faran</div>
              <div className='text-4xl bold'>I create <span className='bolder text-7xl text-green-800'>AI Solutions</span> for medium to large scale enterprises</div>
              <div className='pt-4'>
              <Button className='bg-green-400'>Get in Touch</Button>
              </div>
            </div>
        </div>
        <div className='w-[40%]  flex justify-center items-center'>
            <div className=''>
              <div className='h-10 w-full  flex justify-between'>
                <div className='rotate-12 flex items-end'> <Star /></div>
                <div className='rotate-10'>
                  <Star />
                </div>
                <div className='rotate-45'>
                  <Star />
                </div>
              </div>
              
              <div className='flex justify-center items-center relative w-[500px] h-[260px] rounded-lg bg-green-300'>
                <div className='rotate-45 flex justify-self-end'>
                  <Star />
                </div>
                <Image src={'/faran2.png'} alt='faran' width={300} height={300} className='mb-10'/>
                <div className='rotate-90'>
                  <Star />
                </div>
    
              </div>

              <div className='h-10 w-full flex justify-between'>
                <div className='rotate-12 flex items-end'> <Star /></div>
                <div className='rotate-10'>
                  <Star />
                </div>
                <div className='rotate-45'>
                  <Star />
                </div>
                <div className='rotate-45'>
                  <Star />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
