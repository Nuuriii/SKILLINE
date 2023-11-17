import Padding from '../padding/padding';
import Image from 'next/image';
import River from '@/assets/assesment/river.png';
import Plane from '@/assets/assesment/plane.svg';
import Close from '@/assets/assesment/close-icon.png';
import Success from '@/assets/assesment/success.png';
import Purple from '@/assets/features/purpleBall.png';
import GreenTransparent from '@/assets/assesment/green-transparent.svg';
import Orange from '@/assets/withSkilline/smallOrange.svg';
import Green from '@/assets/features/greenBall.png';
import Red from '@/assets/features/redBall.svg';

export default function Assesment() {
  return (
    <Padding>
      <div className='mt-[6rem] mb-[3rem] flex justify-center'>
        <div className='min-[500px]:w-[30rem] min-[1444px]:w-[70rem] lg:w-[100%] lg:flex lg:justify-between '>
          <div className='flex flex-col items-center xl:w-[50%]'>
            <div
              className='h-[19rem] xl:h-[24rem] w-[16rem] xl:w-[21rem] p-[1rem] xl:p-[1.2rem] bg-[#FFFFFF] shadow-[0px_9px_43px_0px_#282b6f1a] relative rounded-[1rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <Image
                className='hidden xl:flex h-[1.3rem] w-[auto] absolute left-[4rem] top-[-2.3rem]'
                src={Orange}
                alt='orange-icon'
              />
              <Image
                className='hidden xl:flex h-[6rem] w-[auto] absolute left-[-2rem] top-[-1.3rem] z-[-3]'
                src={Purple}
                alt='purple-icon'
              />
              <Image
                className='bg-white hidden xl:flex absolute right-[1rem] top-[-1rem] z-[1] h-[3.2rem] w-[3.2rem] shadow-[0px_0px_20px_1px_#edf2f7] rounded-[100%]'
                src={Close}
                alt='close-icon'
              />
              <Image
                className='hidden xl:flex absolute bg-white right-[-1rem] top-[1.6rem] z-[1] h-[3.2rem] w-[3.2rem] shadow-[0px_0px_20px_1px_#edf2f7] rounded-[100%]'
                src={Success}
                alt='success-icon'
              />
              <Image
                className='hidden xl:flex h-[1.2rem] w-[auto] absolute right-[-3rem] top-[14rem] z-[-3]'
                src={Red}
                alt='red-icon'
              />
              <Image
                className='hidden xl:flex h-[1.2rem] w-[auto] absolute left-[-1rem] bottom-[-2.5rem] z-[-3]'
                src={Green}
                alt='green-icon'
              />
              <h3 className='h-[2rem] w-[6.5rem] flex justify-center items-center rounded-[2rem] bg-[#CDD8FF] text-[0.8rem] text-[#717FB0] xl:text-[1rem] xl:h-[2.3rem] xl:w-[8rem]'>
                Question 1
              </h3>
              <p className='text-[1.2rem] text-[#55578D] font-[600] mt-[1rem] xl:mt-[1.5rem] xl:text-[1.6rem]'>
                True or false? This play takes place in Italy
              </p>
              <Image
                className='mt-[1.4rem] z-[1] xl:h-[12rem] xl:w-auto absolute rounded-[1rem]'
                src={River}
                alt='river-img'
              />
              <div className='absolute right-[0rem] bottom-[-1rem] h-[4rem] w-[13rem] rounded-[1rem] z-[2] shadow-[0px_18px_52px_0px_#282b6f14] bg-[#FFFFFF] flex items-center px-[1rem] justify-center hover:scale-[1.05] duration-[0.3s]'>
                <div className='relative mr-[1rem]'>
                  <Image
                    className='h-[5.5rem] w-auto'
                    src={Plane}
                    alt='plane-icon'
                  />
                  <Image
                    className='absolute h-[2.5rem] z-[-1] top-[1.6rem] left-[-0.1rem]'
                    src={GreenTransparent}
                    alt='big-green-transparent'
                  />
                </div>
                <div className='relative'>
                  <p className='text-[#41BE90] font-[600] text-[0.8rem]'>
                    Your answer was sent successfully
                  </p>
                  <Image
                    className='absolute h-[1.4rem] z-[-1] bottom-[-0.3rem] right-[-1.6rem]'
                    src={GreenTransparent}
                    alt='small-green-transparent'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className='mt-[3rem] lg:mt-0 flex flex-col items-center lg:items-start lg:w-[50%]'
            style={{ fontFamily: 'poppins, sans-serif' }}
          >
            <h1 className='text-[#2F327D] font-[600] text-[1.5rem] text-center lg:w-[25rem] lg:text-left lg:text-[2rem]'>
              Assessments, <span className='text-[#F48C06]'>Quizzes</span>,
              Tests
            </h1>
            <p className='mt-[0.8rem] text-[#696984] text-center lg:text-left lg:w-[30rem] lg:text-[1.2rem]'>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </Padding>
  );
}
