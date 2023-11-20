import Padding from '../padding/padding';
import Image from 'next/image';
import ArrowRight from '@/assets/testimonial/arrow-right.svg';
import SmileGirl from '@/assets/testimonial/smiling-woman.png';
import StarGroup from '@/assets/testimonial/star-group.svg';

export default function Testimonial() {
  return (
    <Padding>
      <div
        className='mt-[6rem] mb-[6rem] flex justify-center'
        style={{ fontFamily: 'nunito, sans-serif' }}
      >
        <div className='flex flex-col lg:flex-row items-center min-[500px]:w-[30rem] min-[1444px]:w-[70rem] lg:w-[100%]'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[#2F327D] text-center lg:text-left font-[600] text-[1.5rem] lg:text-[2rem]'>
              What They Say?
            </h1>
            <p
              data-testid='first-paraph'
              className='text-[#696984] lg:text-[1.2rem] mt-[1rem] text-center lg:text-left'
            >
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className='text-[#696984] lg:text-[1.2rem] mt-[1rem] text-center lg:text-left'>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className='text-[#696984] lg:text-[1.2rem] mt-[1.6rem] text-center lg:text-left'>
              Are you too? Please give your assessment
            </p>
            <button
              className={`text-[#F48C06] relative mt-[2rem] xl:mt-[4rem] h-[3rem] w-[17rem] rounded-[2rem] flex items-center justify-center lg:justify-start border-[1px] border-solid  border-[#F48C06] xl:border-r-[0px]  xl:hover:scale-100 xl:active:scale-100 xl:hover:w-[19rem] lg:pl-[1.5rem] hover:text-[#fff] hover:bg-[#F48C06] hover:scale-[1.05] active:scale-[0.99] duration-[0.3s]`}
            >
              <span className=''>Write your assessment</span>
              <div
                className={`hidden lg:flex absolute right-0 border-[1px] rounded-[100%] border-solid border-[#F48C06] bg-white justify-center h-[100%] w-[3rem] items-center duration-[0.3s]`}
              >
                <Image
                  className='h-[1.2rem] w-auto right-0 '
                  src={ArrowRight}
                  alt='arrow-right'
                />
                {/* 
                 
                */}
              </div>
            </button>
          </div>
          <div className='mt-[11rem] lg:mt-[0rem] relative  w-full flex justify-center'>
            <Image
              className='absolute top-[-7rem] z-[-1] lg:static h-[10rem] lg:h-[23rem] xl:h-[28rem] w-auto rounded-[0.5rem]'
              src={SmileGirl}
              alt='smile-girl'
            />
            <div className='min-[500px]:w-[20rem] xl:w-[28rem] lg:absolute top-[18rem] right-[3rem] bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-[1.2rem] px-[1rem] xl:px-[1.5rem] xl:border-l-[8px] border-solid border-[#F67766] rounded-[1rem]'>
              <div className='xl:pl-[1rem]  border-l-[1px] border-solid border-[#BDBDD1]'>
                <p className='text-[#5F5F7E] font-[400]'>
                  {`"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`}
                </p>
              </div>
              <div className='mt-[2rem] flex items-center justify-between xl:pl-[1rem]'>
                <h2 className='text-[#5F5F7E] font-[600]'>Gloria Rose</h2>
                <div className='flex flex-col items-end'>
                  <Image
                    className='h-auto w-[5rem] xl:w-[6rem]'
                    src={StarGroup}
                    alt='star-icon'
                  />
                  <p className='mt-[0.3rem] xl:mt-[0.5rem] text-[0.7rem] xl:text-[0.8rem] text-[#80819A] font-[600]'>
                    12 reviews at Yelp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
