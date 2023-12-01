'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Polygon from '@/assets/navbar/Polygon.svg';
import Padding from '../padding/padding';
import Hamburger from '@/assets/navbar/hamburger.svg';
import './navbar.css';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className='nav-container'>
      <div className='child-container'>
        <Padding>
          <div className='view-container'>
            <div className='relative ml-[0.8rem] md:ml-[0]'>
              <Image className='polygon-img' src={Polygon} alt='icon' />
              <h1 className='skilline-title'>Skilline</h1>
            </div>
            <button onClick={handleShow} className='lg:hidden'>
              <Image className='h-[3.4rem]' src={Hamburger} alt='hamburger' />
            </button>
            {/* ul for mobile */}
            <ul className={`mobile-ul ${show ? 'true-right' : 'false-right'}`}>
              <li>
                <Link className='link-text' href={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className='link-text' href={'/'}>
                  Careers
                </Link>
              </li>
              <li>
                <Link className='link-text' href={'/'}>
                  Blog
                </Link>
              </li>
              <li className='mb-[1rem]'>
                <Link className='link-text' href={'/'}>
                  About Us
                </Link>
              </li>
              <li>
                <button className='mr-[1rem] py-[0.5rem] px-[1.2rem] rounded-[2rem] border-none outline outline-1 outline-[#F48C06] text-[#252641] bg-[#fff]'>
                  Login
                </button>
                <button className='bg-[#F48C06] py-[0.5rem] px-[1rem] rounded-[2rem] text-[#FFFFFF]'>
                  Sign Up
                </button>
              </li>
            </ul>
            {/* ul for desktop view */}
            <ul className='items-center hidden lg:flex font-[poppins]'>
              <li className='mr-[2rem]'>
                <Link className='link-text' href={'/'}>
                  Home
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='link-text' href={'/'}>
                  Careers
                </Link>
              </li>
              <li className='mr-[2rem]'>
                <Link className='link-text' href={'/'}>
                  Blog
                </Link>
              </li>
              <li className='mr-[3rem]'>
                <Link className='link-text' href={'/'}>
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
