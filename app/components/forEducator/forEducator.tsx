import Padding from '../padding/padding';
import Image from 'next/image';
import GradeBook from '@/assets/forEducator/gradeBook.png';

export default function ForEducator() {
  return (
    <Padding>
      <div className='mt-[6rem] flex justify-center'>
        <div
          className='min-[500px]:w-[30rem] min-[1444px]:w-[70rem] lg:w-[100%] flex items-center flex-col lg:flex-row lg:justify-between'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          <div className='lg:w-[50%] xl:w-[45%] lg:mr-[4rem]'>
            <h1 className='lg:w-[20rem] text-[#2F327D] font-[600] text-[1.5rem] lg:text-[2rem] text-center lg:text-left'>
              <span className='text-[#F48C06]'>Class Management</span> Tools for
              Educators
            </h1>
            <p className='mt-[1rem] text-[#696984] lg:text-[1.2rem] text-center lg:text-justify'>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className='mt-[1rem] flex justify-center'>
            <Image
              className='h-[13rem] lg:h-[22rem] xl:h-[25rem] w-auto'
              src={GradeBook}
              alt=''
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
