import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
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
                    <Link href={'https://www.linkedin.com/in/faranbutt/'}><FaLinkedin className='w-10 h-10 text-white bg-blue-500 rounded-full p-1.5 hover:bg-green-300' /></Link>
                    <Link href={'https://github.com/faranbutt'}><FaGithub className='w-10 h-10 text-white bg-[#0D1117] hover:bg-green-300 rounded-full p-1' /></Link>
                    <Link href={'https://discord.com/users/718862408050802699'}><FaDiscord className='w-10 h-10 text-white bg-[#909bfa] hover:bg-green-300 rounded-full p-1' /></Link>
                    <Link href={'https://faranbutt.vercel.app'}><GoProjectSymlink className='w-10 h-10 text-white bg-pink-300 hover:bg-green-300 rounded-full p-1' /></Link>
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
