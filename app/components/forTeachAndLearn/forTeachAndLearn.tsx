import Padding from '../padding/padding';
import Student from '@/assets/forTeachAndLearn/student.png';
import Image from 'next/image';
import styles from './forTeachAndLearn.module.css';

export default function ForTeachAndLearn() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className='flex flex-col items-center lg:items-start lg:mr-[6rem] lg:w-[50%]'>
            <h1
              className='text-[#2F327D] font-[600] text-center lg:text-left text-[1.5rem] lg:text-[2rem] w-[16rem] lg:w-[20rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <span className='text-[#F48C06]'>Tools</span> For Teachers And
              Learners
            </h1>
            <p
              className='text-[#696984] text-center lg:text-justify lg:text-[1.2rem] mt-[1rem]'
              style={{ fontFamily: 'poppins,sans-serif' }}
            >
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className='mt-[1rem] lg:w-[50%] flex justify-center'>
            <Image
              className='h-[15rem] lg:h-[20rem] xl:h-[25rem] w-auto'
              src={Student}
              alt='student-img'
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
