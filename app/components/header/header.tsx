import Bg from '@/assets/header/orangeBg.png';
import Image from 'next/image';
import Padding from '../padding/padding';
import Play from '@/assets/header/play.png';
import Girl from '@/assets/header/girl.png';
import Man from '@/assets/header/man.svg';

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
          <div className='mr-[10rem] relative '>
            <div className='absolute bottom-0 backdrop-blur-[2px] bg-[#FFFFFFCC] flex py-[1rem] px-[1rem] rounded-[1rem]'>
              <div className='mr-[1rem]'>
                <Image className='h-[2.4rem] w-auto' src={Man} alt='' />
              </div>
              <div>
                <h2
                  className='text-[#595959] font-[700]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  User Experience Class
                </h2>
                <p className='text-[#545567] mb-[1rem] text-[0.9rem]'>
                  Today at 12.00 PM
                </p>
                <button
                  className='h-[2rem] w-[8rem] rounded-[2rem] font-[700] flex justify-center items-center bg-[#D8587E] text-[#FFFFFF]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  Join Now
                </button>
              </div>
            </div>
            <Image className='h-[30rem] top-[3rem]  w-auto' src={Girl} alt='' />
          </div>
        </div>
      </Padding>
    </div>
  );
}
