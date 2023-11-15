import Padding from '@/app/components/padding/padding';
import Image from 'next/image';
import Meetings from '@/assets/features/meetings.png';

export default function Features() {
  return (
    <Padding>
      <div className='mt-[4rem]'>
        <div>
          <div className='flex flex-col items-center'>
            <h1
              className='text-[#2F327D] text-[1.5rem] font-[600] text-center'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Our <span className='text-[#F48C06]'>Features</span>
            </h1>
            <p
              className='text-[#696984] text-center mt-[1rem]'
              style={{ fontFamily: 'poppins' }}
            >
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className='mt-[1rem]'>
            <Image src={Meetings} alt='' />
            <div></div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
