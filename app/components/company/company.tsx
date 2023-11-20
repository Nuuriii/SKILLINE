import { CompanyIcon } from './companyData';
import Image from 'next/image';
import Padding from '../padding/padding';

export default function Company() {
  return (
    <Padding>
      <div className='flex justify-center'>
        <div className='min-[1444px]:w-[70rem] w-full flex  flex-col items-center mt-[6rem] min-[1444px]:mt-[2rem] mb-[3rem]'>
          <div>
            <h1
              className='text-[1.2rem] md:text-[1.6rem] text-[#696984s] text-center font-[500]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Trusted by 5,000+ Companies Worldwide
            </h1>
          </div>
          <div className="relative mt-[4rem] w-[100%] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className='animate-infinite-slider flex items-center w-[calc(250px*10)]'>
              {CompanyIcon.map((item, index) => (
                <div
                  className='slide mx-[3rem] flex w-[125px] items-center justify-center'
                  key={index}
                >
                  <Image src={item.regular} alt={item.altRegular} />
                </div>
              ))}
              {CompanyIcon.map((item, index) => (
                <div
                  className='slide mx-[3rem] flex w-[125px] items-center justify-center'
                  key={index}
                >
                  <Image src={item.regular} alt={item.altRegular} />
                </div>
              ))}
            </div>
          </div>
          {/* <div className='mt-[2rem] flex items-center flex-wrap justify-center'>
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
        </div> */}
        </div>
      </div>
    </Padding>
  );
}
