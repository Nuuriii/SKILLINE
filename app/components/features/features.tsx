import Padding from '@/app/components/padding/padding';
import Image from 'next/image';
import Meetings from '@/assets/features/meetings.png';
import { featureData } from './featureData';

export default function Features() {
  return (
    <Padding>
      <div className='mt-[4rem]'>
        <div>
          <div className='flex flex-col items-center'>
            <h1
              className='text-[#2F327D] text-[1.5rem] font-[600] text-center'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Our <span className='text-[#F48C06]'>Features</span>
            </h1>
            <p
              className='text-[#696984] text-center mt-[1rem]'
              style={{ fontFamily: 'poppins' }}
            >
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className='mt-[3rem]'>
            <Image src={Meetings} alt='' />
            <div className='mt-[4.4rem]'>
              <h2
                className='text-[#2F327D] hidden lg:flex text-center text-[1.3rem] font-[600]'
                style={{ fontFamily: 'poppins, sans-serif' }}
              >
                A <span className='text-[#F48C06]'>user interface</span>{' '}
                designed for the classroom
              </h2>
              <div className='mt-[3rem]'>
                {featureData.map((item, index) => (
                  <div
                    className='relative flex items-center rounded-[1rem] px-[0.5rem] pt-[1.5rem] pb-[1rem] shadow-[0px_10px_60px_0px_#e2e8f0] mb-[3rem]'
                    key={index}
                  >
                    <div className='absolute rounded-[100%] h-[3.5rem] top-[-1.7rem] left-[40%] w-[3.5rem] bg-[#FBFBFB] flex justify-center items-center shadow-[0px_14px_44px_0px__#0d0f1c1f]'>
                      <Image
                        className='h-[1.8rem] w-[1.8rem]'
                        src={item.icon}
                        alt=''
                      />
                    </div>
                    <p
                      className='text-[#696984] text-center'
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
