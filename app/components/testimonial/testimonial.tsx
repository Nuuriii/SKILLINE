import Padding from '../padding/padding';
import Image from 'next/image';
import ArrowRight from '@/assets/testimonial/arrow-right.svg';
import SmileGirl from '@/assets/testimonial/smiling-woman.png';

export default function Testimonial() {
  return (
    <Padding>
      <div className='mt-[6rem]' style={{ fontFamily: 'nunito, sans-serif' }}>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-[#2F327D] text-center font-[600] text-[1.5rem]'>
              What They Say?
            </h1>
            <p className='text-[#696984] mt-[1rem] text-center'>
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className='text-[#696984] mt-[1rem] text-center'>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className='text-[#696984] mt-[1.6rem] text-center'>
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
          <div className='mt-[3rem]'>
            <Image
              className='h-[10rem] w-auto rounded-[0.5rem]'
              src={SmileGirl}
              alt=''
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
