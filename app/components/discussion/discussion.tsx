import Image from 'next/image';
import Padding from '../padding/padding';
import DiscussionImg from '@/assets/discussion/discussion.png';

export default function Discussion() {
  return (
    <Padding>
      <div className='mt-[7rem]' style={{ fontFamily: 'poppins, sans-serif' }}>
        <div>
          <div className='flex flex-col items-center'>
            <div>
              <Image className='h-[13rem] w-auto' src={DiscussionImg} alt='' />
            </div>
            <div className='mt-[1.2rem] lg:mt-0'>
              <h1 className='text-[#F48C06] font-[600] text-center lg:text-left text-[1.5rem]'>
                <span className='text-[#2F327D]'>One-on-One</span> Discussions
              </h1>
              <p className='mt-[1rem] text-center text-[#696984]'>
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
          <div className='flex justify-center mt-[4rem]'>
            <button className=' h-[3rem] w-[12rem] rounded-[2rem] flex justify-center items-center border-[1px] border-solid border-[#F48C06] text-[#F48C06] hover:bg-[#F48C06] hover:text-white hover:scale-[1.05] active:scale-[0.99] duration-[0.3s]'>
              See more features
            </button>
          </div>
        </div>
      </div>
    </Padding>
  );
}
