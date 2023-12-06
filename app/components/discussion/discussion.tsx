import Image from 'next/image';
import Padding from '../padding/padding';
import DiscussionImg from '@/assets/discussion/discussion.png';
import styles from './discussion.module.css';

export default function Discussion() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.imgContainer}>
            <div>
              <Image
                className={styles.discussionImg}
                src={DiscussionImg}
                alt='discussion-img'
              />
            </div>
            <div className='mt-[1.2rem] lg:mt-0 lg:w-[50%] xl:w-[40%]'>
              <h1 className='lg:w-[15rem] text-[#F48C06] font-[600] text-center lg:text-[2rem] lg:text-left text-[1.5rem]'>
                <span className='text-[#2F327D]'>One-on-One</span> Discussions
              </h1>
              <p className='mt-[1rem] text-center lg:text-[1.2rem] lg:text-justify text-[#696984]'>
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
          <div className='flex justify-center mt-[3rem] xl:mt-[7rem]'>
            <button className=' h-[3rem] w-[12rem] rounded-[2rem] flex justify-center items-center border-[1px] border-solid border-[#F48C06] text-[#F48C06] hover:bg-[#F48C06] hover:text-white hover:scale-[1.05] active:scale-[0.99] duration-[0.3s]'>
              See more features
            </button>
          </div>
        </div>
      </div>
    </Padding>
  );
}
