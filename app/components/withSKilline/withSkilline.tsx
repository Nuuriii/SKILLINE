import Padding from '../padding/padding';
import Class from '@/assets/withSkilline/class.jpeg';
import Orange from '@/assets/withSkilline/orangeSquare.png';
import Blue from '@/assets/withSkilline/blueSquare.png';
import Image from 'next/image';
import Play from '@/assets/header/play.png';
import SmallOrange from '@/assets/withSkilline/smallOrange.svg';
import BigOrange from '@/assets/withSkilline/bigOrange.svg';

export default function WithSkilline() {
  return (
    <Padding>
      <div className='mt-[4rem] md:mt-[7rem] xl:mt-[9rem] mb-[2rem] flex min-[1488px]:justify-center'>
        <div className='w-full min-[1488px]:w-[70rem] flex items-center justify-center'>
          <div className='flex xl:mr-[3rem] relative flex-col xl:w-[50%] items-center xl:items-start'>
            <Image
              className='hidden xl:flex absolute z-[-1] h-[4rem] top-[-0.7rem] left-[-1rem] w-auto'
              src={BigOrange}
              alt='big-orange-icon'
            />
            <h1
              className='text-[#2F327D] mb-[1rem] font-[600] text-[1.5rem] text-center lg:text-left lg:text-[2rem] md:w-[38rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Everything you can do in a physical classroom,{'  '}
              <span className='text-[#F48C06]'>you can do with Skilline</span>
            </h1>
            <p
              className='text-[#696984] text-center xl:text-left'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <button
              className='mt-[1rem] text-[#696984] underline'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Learn more
            </button>
            <Image
              className='hidden xl:flex absolute top-[70%] right-0'
              src={SmallOrange}
              alt='small-orange-icon'
            />
          </div>
          <div className='hidden xl:flex rounded-[1rem] h-[20rem] xl:bg-[#171B4180] w-[auto] relative'>
            <Image
              className='absolute top-[-1rem] left-[-1rem] z-[-2]'
              src={Blue}
              alt='blue-square'
            />
            <Image
              className='h-[100%] rounded-[1rem] w-[100%] z-[-1]'
              src={Class}
              alt='class-img'
            />
            <button className='absolute top-[40%] left-[40%] hover:scale-[1.05] duration-[0.3s] active:scale-[0.98]'>
              <Image
                className='h-[3.7rem] w-auto mx-[1.5rem]'
                src={Play}
                alt='playIcon'
              />
            </button>
            <Image
              className='absolute z-[-2] h-[10rem] w-auto bottom-[-1rem] right-[-1rem]'
              src={Orange}
              alt='orange-square'
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
