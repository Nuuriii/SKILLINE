'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Polygon from '@/assets/navbar/Polygon.svg';
import Padding from '../padding/padding';
import Hamburger from '@/assets/navbar/hamburger.svg';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className='w-full fixed top-0 z-20 backdrop-blur-md min-[1488px]:flex min-[1488px]:justify-center'>
      <div className='w-full min-[1488px]:w-[70rem]'>
        <Padding>
          <div className='w-full relative flex items-center justify-between py-[0.5rem] lg:py-[1.5rem]'>
            <div className='relative'>
              <Image
                className='h-[2.9rem] top-[-0.4rem] left-[-1.7rem] absolute z-[-1]'
                src={Polygon}
                alt='icon'
              />
              <h1
                className='font-[700]  text-[#113C49] text-[1.5rem]'
                style={{ fontFamily: 'poppins, sans-serif' }}
              >
                Skilline
              </h1>
            </div>
            <button onClick={handleShow} className='lg:hidden'>
              <Image src={Hamburger} alt='hamburger' />
            </button>
            <ul
              className={` flex 
            flex-col 
            lg:hidden 
            h-auto 
            w-auto 
            ${show ? 'right-0' : 'right-[-200%]'}
            rounded-[1rem] 
            duration-[0.3s]
            py-[0.5rem] 
            px-[1rem] 
            absolute
            right-0 
            top-[6rem] 
            bg-[#FFFFFFCC] 
            backdrop-blur-[9px]`}
            >
              <li>
                <Link
                  className='text-[#252641] lg:hidden'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='text-[#252641]'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                  href={'/'}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className='text-[#252641]'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                  href={'/'}
                >
                  Blog
                </Link>
              </li>
              <li className='mb-[1rem]'>
                <Link
                  className='text-[#252641]'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                  href={'/'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  className='mr-[1rem] py-[0.5rem] px-[1.2rem] rounded-[2rem] border-none outline outline-1 outline-[#F48C06] text-[#252641] bg-[#fff]'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                >
                  Login
                </button>
                <button
                  className='bg-[#F48C06] py-[0.5rem] px-[1rem] rounded-[2rem] text-[#FFFFFF]'
                  style={{ fontFamily: 'poppins, sans-serif' }}
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <ul
              className='items-center hidden lg:flex'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <li className='mr-[2rem]'>
                <Link className='text-[#252641] hidden lg:flex' href={'/'}>
                  Home
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  Careers
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  Blog
                </Link>
              </li>
              <li className='mr-[3rem]'>
                <Link className='text-[#252641]' href={'/'}>
                  About Us
                </Link>
              </li>
              <li className='mr-[1rem]'>
                <button className='text-[#6C6C6C] h-[2.1rem] rounded-[2rem] w-[6rem] flex justify-center items-center  bg-white '>
                  Login
                </button>
              </li>
              <li className='mr-[1rem]'>
                <button className='text-[#FFFFFF] h-[2.1rem] rounded-[2rem] w-[6rem] flex justify-center items-center bg-[#F48C06]'>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </Padding>
      </div>
    </nav>
  );
}
