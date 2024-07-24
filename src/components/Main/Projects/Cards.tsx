import React from 'react'
import Image from 'next/image'
export default function Cards({name,image,desc}:{name:string,image:string,desc:string}) {
  return (
    <div className='w-[300px] h-[350px] bg-green-300 rounded-xl'>
        <div className='w-full h-1/3 rounded-t-xl'>
            <Image src={image} alt='dine' width={300} height={500} className='rounded-t-xl'/>
        </div>
        <div className='w-full bg-green-200 p-3 pt-5 h-2/3 flex justify-center items-center flex-col rounded-b-xl'>
            <div className='text-2xl'>{name}</div>
            <div>{desc}</div>
        </div>
    </div>
  )
}
