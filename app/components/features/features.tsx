import Padding from '@/app/components/padding/padding';
import Image from 'next/image';
import Meetings from '@/assets/features/meetings.png';
import { featureData } from './featureData';

export default function Features() {
  return (
    <Padding>
      <div className='mt-[4rem] flex justify-center'>
        <div className='min-[500px]:w-[30rem] lg:w-[100%]'>
          <div className='flex flex-col items-center'>
            <h1
              className='text-[#2F327D] text-[1.5rem] lg:text-[2rem] font-[600] text-center'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Our <span className='text-[#F48C06]'>Features</span>
            </h1>
            <p
              className='text-[#696984] text-center mt-[1rem] lg:text-[1.2rem]'
              style={{ fontFamily: 'poppins' }}
            >
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className='mt-[3rem] lg:flex xl:items-center'>
            <Image
              className='lg:h-[16rem] xl:h-[21rem] w-auto lg:mr-[3rem]'
              src={Meetings}
              alt=''
            />
            <div className='mt-[4.4rem] lg:mt-[0rem]'>
              <h2
                className='text-[#2F327D] hidden lg:block text-center lg:text-left text-[1.3rem] font-[600] lg:text-[1.5rem] xl:text-[1.7rem] xl:w-[30rem]'
                style={{ fontFamily: 'poppins, sans-serif' }}
              >
                A <span className='text-[#F48C06]'>user interface </span>
                designed for the classroom
              </h2>
              <div className='mt-[3rem] lg:mt-[1rem]'>
                {featureData.map((item, index) => (
                  <div
                    className='relative flex items-center rounded-[1rem] px-[0.5rem] pt-[2.5rem] pb-[1rem] lg:shadow-none shadow-[0px_10px_60px_0px_#e2e8f0] mb-[3rem] lg:mb-[1.5rem] lg:p-0 lg:justify-between'
                    key={index}
                  >
                    <div className='absolute lg:static rounded-[100%] h-[3.5rem] top-[-1.7rem] left-[40%] w-[3.5rem] bg-[#FBFBFB] flex justify-center items-center shadow-[0px_14px_44px_0px__#0d0f1c1f] lg:h-[3rem] lg:w-[3rem]'>
                      <Image
                        className='h-[1.8rem] w-[1.8rem] lg:h-[1.4rem] lg:w-[1.4rem]'
                        src={item.icon}
                        alt=''
                      />
                    </div>
                    <p
                      className='lg:w-[85%] xl:w-[88%] lg:text-[1.1rem] xl:text-[1.2rem] text-[#696984] text-center lg:text-left'
                      style={{ fontFamily: 'poppins, sans-serif' }}
                    >
                      {item.decs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
