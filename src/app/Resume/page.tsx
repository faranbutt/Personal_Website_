import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
export default function Resume() {
  return (
    <div className='w-full h-full'> 
    <div className='w-full pl-10 text-5xl text-green-800'>Resume</div>
    <div className='flex items-center justify-center'>
        <Button className='bg-green-400'>Download Resume</Button>
    </div>
    <div className='w-full h-full flex items-center justify-center'>
        <Image src={'/resume.jpg'} alt='resume' width={600} height={500} className='shadow-lg shadow-green-400 border-4 border-emerald-300' />
    </div>
    </div>
  )}
