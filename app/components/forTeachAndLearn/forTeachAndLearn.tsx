import Padding from '../padding/padding';
import Student from '@/assets/forTeachAndLearn/student.png';
import Image from 'next/image';

export default function ForTeachAndLearn() {
  return (
    <Padding>
      <div className='flex justify-center'>
        <div className='min-[500px]:w-[30rem] xl:w-[60rem] lg:w-[100%]'>
          <div className='flex flex-col items-center'>
            <h1
              className='text-[#2F327D] font-[600] text-center text-[1.5rem] w-[16rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              <span className='text-[#F48C06]'>Tools</span> For Teachers And
              Learners
            </h1>
            <p
              className='text-[#696984] text-center mt-[1rem]'
              style={{ fontFamily: 'poppins,sans-serif' }}
            >
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </p>
          </div>
          <div className='mt-[1rem] flex justify-center'>
            <Image className='h-[15rem] w-auto' src={Student} alt='' />
          </div>
        </div>
      </div>
    </Padding>
  );
}
