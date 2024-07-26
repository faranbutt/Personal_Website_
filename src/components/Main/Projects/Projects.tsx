import React from 'react'
import Cards from './Cards'
import { projects } from '@/lib/data';
export default function Projects() {
  return (
    <div className='w-full h-[500px] text-green-800'>
        <div className='pl-10 pt-10 text-5xl t'>Projects</div>
        <div className='grid grid-cols-2 lg:grid-cols-4 p-10'>
            {
                projects.map(data=>(
                    <div className='' key={data.id}>
                        <Cards name={data.name} image={data.image} desc={data.desc} urll={data.urll} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
