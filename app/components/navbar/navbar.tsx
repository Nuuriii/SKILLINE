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
                <button className='mobile-login'>Login</button>
                <button className='mobile-signup'>Sign Up</button>
              </li>
            </ul>
            {/* ul for desktop view */}
            <ul className='desktop-ul'>
              <li className='desktop-list'>
                <Link className='link-text' href={'/'}>
                  Home
                </Link>
              </li>
              <li className='desktop-list'>
                <Link className='link-text' href={'/'}>
                  Careers
                </Link>
              </li>
              <li className='desktop-list'>
                <Link className='link-text' href={'/'}>
                  Blog
                </Link>
              </li>
              <li className='about-list-item'>
                <Link className='link-text' href={'/'}>
                  About Us
                </Link>
              </li>
              <li className='btn-list-item'>
                <button className='dekstop-login'>Login</button>
              </li>
              <li className='btn-list-item'>
                <button className='dekstop-signup'>Sign Up</button>
              </li>
            </ul>
          </div>
        </Padding>
      </div>
    </nav>
  );
}
