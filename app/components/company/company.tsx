'use client';
import { useState } from 'react';
import { CompanyIcon } from './companyData';
import styles from './style.module.css';
import Image from 'next/image';

export default function Company() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div className='w-full flex  flex-col justify-center items-center mt-[6rem] mb-[3rem]'>
      <div>
        <h1
          className='text-[1.6rem] text-[#696984s] font-[500]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          Trusted by 5,000+ Companies Worldwide
        </h1>
      </div>
      <div className='flex items-center'>
        {CompanyIcon.map((item, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image className={styles.imgRegular} src={item.regular} alt='' />
            <Image className={styles.imgHover} src={item.hover} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}
