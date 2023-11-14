import { CompanyIcon } from './companyData';
import styles from './style.module.css';
import Image from 'next/image';
import Padding from '../padding/padding';

export default function Company() {
  return (
    <Padding>
      <div className='w-full flex  flex-col justify-center items-center mt-[6rem] mb-[3rem]'>
        <div>
          <h1
            className='text-[1.2rem] md:text-[1.6rem] text-[#696984s] text-center font-[500]'
            style={{ fontFamily: 'poppins, sans-serif' }}
          >
            Trusted by 5,000+ Companies Worldwide
          </h1>
        </div>
        <div className='mt-[2rem] flex items-center flex-wrap justify-center'>
          {CompanyIcon.map((item, index) => (
            <div className={styles.imgContainer} key={index}>
              <Image
                className={styles.imgRegular}
                src={item.regular}
                alt={item.altRegular}
              />
              <Image
                className={styles.imgHover}
                src={item.hover}
                alt={item.altHover}
              />
            </div>
          ))}
        </div>
      </div>
    </Padding>
  );
}
