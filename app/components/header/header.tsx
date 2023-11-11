import Bg from '@/assets/header/orangeBg.png';
import Image from 'next/image';
import Padding from '../padding/padding';
import Play from '@/assets/header/play.png';
import Girl from '@/assets/header/girl.png';
import Man from '@/assets/header/man.svg';
import Calender from '@/assets/header/calendar.svg';
import Mail from '@/assets/header/email.svg';
import Statistic from '@/assets/header/statistic.png';

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
            <div className='absolute right-[-2rem] top-[3rem]'>
              <Image className='h-[3rem] w-auto' src={Statistic} alt='' />
            </div>

            <div className='absolute right-[-8rem] top-[11rem] flex py-[0.7rem] px-[1rem] backdrop-blur-[7px] rounded-[1rem] bg-[#FFFFFFCC] items-center'>
              <div className='bg-[#F88C3D] h-[2.5rem] w-[auto] rounded-[0.3rem] flex justify-center items-center mr-[1rem] p-[0.3rem]'>
                <Image className='h-[100%] w-[100%]' src={Mail} alt='' />
              </div>
              <div>
                <h2
                  className='text-[#595959] font-[700]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  Congratulations
                </h2>
                <p
                  className='text-[#545567] text-[1rem]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  Your admission completed
                </p>
              </div>
            </div>

            <div className='absolute left-[-8rem] top-[4rem] flex py-[0.7rem] px-[1rem] backdrop-blur-[5px] rounded-[1rem] bg-[#FFFFFFCC] items-center'>
              <div className='bg-[#23BDEE] h-[2.5rem] w-[auto] rounded-[0.3rem] flex justify-center items-center mr-[1rem] p-[0.3rem]'>
                <Image className='h-[100%] w-[100%]' src={Calender} alt='' />
              </div>
              <div>
                <h2
                  className='text-[#595959] font-[700]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  250k
                </h2>
                <p
                  className='text-[#545567] text-[1rem]'
                  style={{ fontFamily: 'nunito, sans-serif' }}
                >
                  Assisted Student
                </p>
              </div>
            </div>
            <div className='absolute bottom-[5rem] left-[-11rem] backdrop-blur-[5px] bg-[#FFFFFFCC] flex py-[1rem] px-[1rem] rounded-[1rem]'>
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
                  className='h-[2.5rem] w-[8rem] rounded-[2rem] font-[700] flex justify-center items-center bg-[#D8587E] text-[#FFFFFF] hover:scale-[1.05] duration-[0.3s]'
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
