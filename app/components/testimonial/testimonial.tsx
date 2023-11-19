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
        <div className='flex flex-col lg:flex-row items-center min-[500px]:w-[30rem] lg:w-[100%]'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-[#2F327D] text-center lg:text-left font-[600] text-[1.5rem] lg:text-[2rem]'>
              What They Say?
            </h1>
            <p className='text-[#696984] lg:text-[1.2rem] mt-[1rem] text-center lg:text-left'>
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
            <button className=' text-[#F48C06] relative mt-[2rem] h-[3rem] w-[17rem] rounded-[2rem] flex items-center justify-center lg:justify-start border-[1px] border-solid border-[#F48C06] lg:pl-[1.5rem] hover:text-[#fff] hover:bg-[#F48C06] hover:scale-[1.05] active:scale-[0.99] duration-[0.3s]'>
              <span className=''>Write your assessment</span>
              <div className='hidden lg:flex absolute right-0 border-[1px] rounded-[100%] border-solid border-[#F48C06] justify-center h-[100%] w-[3rem] items-center'>
                <Image
                  className='h-[1.2rem] w-auto right-0 '
                  src={ArrowRight}
                  alt=''
                />
              </div>
            </button>
          </div>
          <div className='mt-[11rem] lg:mt-[0rem] relative  w-full flex justify-center'>
            <Image
              className='absolute top-[-7rem] z-[-1] lg:static h-[10rem] lg:h-[23rem] w-auto rounded-[0.5rem]'
              src={SmileGirl}
              alt=''
            />
            <div className='min-[500px]:w-[20rem] lg:absolute top-[8rem] bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-[1.2rem] px-[1rem] rounded-[1rem]'>
              <div>
                <p className='text-[#5F5F7E] font-[400]'>
                  {`"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`}
                </p>
              </div>
              <div className='mt-[2rem] flex items-center justify-between'>
                <h2 className='text-[#5F5F7E] font-[600]'>Gloria Rose</h2>
                <div className='flex flex-col items-end'>
                  <Image className='h-auto w-[5rem]' src={StarGroup} alt='' />
                  <p className='mt-[0.3rem] text-[0.7rem] text-[#80819A] font-[600]'>
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
