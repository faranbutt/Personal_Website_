import React from 'react'
import Image from 'next/image'
import { FaLinkedin,FaGithub, FaDiscord } from 'react-icons/fa'
import { GoProjectSymlink } from "react-icons/go";
export default function Footer() {
  return (
    <div className='mt-20 w-full h-32 bg-green-200 border-t-2 border-green-600 rounded-t-xl'>
        <div className='w-full h-1/2 flex'>
            <div className='w-1/2 flex gap-2 items-center pl-6'>
                <div>
                    <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
                </div>
                <div>Faran<span className='text-green-700'>.dev</span> </div>
            </div>
            <div className='w-1/2 flex justify-end items-center pr-6 gap-2'>
                    <FaLinkedin className='w-10 h-10 text-white bg-blue-500 rounded-full p-1.5 hover:bg-green-300' />
                    <FaGithub className='w-10 h-10 text-white bg-[#0D1117] hover:bg-green-300 rounded-full p-1' />
                    <FaDiscord className='w-10 h-10 text-white bg-[#909bfa] hover:bg-green-300 rounded-full p-1' />
                    <GoProjectSymlink className='w-10 h-10 text-white bg-pink-300 hover:bg-green-300 rounded-full p-1' />
            </div>
        </div>
        <div className='flex w-full h-1/2 '>
            <div className='w-1/2 flex gap-2 items-center pl-6 text-xs'>
                Made with ❤️ by Faran
            </div>
            <div className='text-xs w-1/2 flex justify-end items-center pr-6 gap-4'>
                    <div>Privacy Policy</div>
                    <div>Terms of Service</div>
                    <div>Cookie Settings</div>
            </div>
        </div>
    </div>
  )
}
