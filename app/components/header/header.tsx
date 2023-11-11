import Bg from '@/assets/header/orangeBg.png';
import Image from 'next/image';
import Padding from '../padding/padding';
import Play from '@/assets/header/play.png';
import Girl from '@/assets/header/girl.png';

export default function Header() {
  return (
    <div className='relative'>
      <Image className='h-[95vh] absolute z-[-2]' src={Bg} alt='' />
      <Padding>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[100vh]'>
          <div className='w-[50%]'>
            <h1 className='text-[#2F327D] font-[700] text-[2.9rem] '>
              <span className='text-[#F48C06]'>Studying</span> Online is now
              much easier
            </h1>
            <p className='text-[#464646] lg:w-[80%] my-[2rem] text-[1.3rem]'>
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </p>
            <div className='flex items-center'>
              <button className='h-[3rem] w-[9rem] font-[600] rounded-[2rem] bg-[#F48C06] text-[#FFFFFF] flex justify-center items-center hover:scale-[1.05] duration-[0.3s]'>
                Join for free
              </button>
              <button className='hover:scale-[1.05] duration-[0.3s]'>
                <Image
                  className='h-[3.7rem] w-auto mx-[1.5rem]'
                  src={Play}
                  alt=''
                />
              </button>
              <p className='text-[#252641]'>Watch how it works</p>
            </div>
          </div>
          <div className='mr-[10rem]'>
            <Image className='h-[30rem] top-[3rem]  w-auto' src={Girl} alt='' />
          </div>
        </div>
      </Padding>
    </div>
  );
}
