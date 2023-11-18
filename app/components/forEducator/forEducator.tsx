import Padding from '../padding/padding';
import Image from 'next/image';
import GradeBook from '@/assets/forEducator/gradeBook.png';

export default function ForEducator() {
  return (
    <Padding>
      <div className='mt-[6rem]'>
        <div style={{ fontFamily: 'poppins, sans-serif' }}>
          <div>
            <h1 className='text-[#2F327D] font-[600] text-[1.2rem] text-center'>
              <span className='text-[#F48C06]'>Class Management</span> Tools for
              Educators
            </h1>
            <p className='text-[#696984] text-center'>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className='mt-[1rem] flex justify-center items-center'>
            <Image className='h-[13rem] w-auto' src={GradeBook} alt='' />
          </div>
        </div>
      </div>
    </Padding>
  );
}
