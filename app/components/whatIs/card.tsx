import Women from '@/assets/whatIs/women.png';
import Image from 'next/image';

interface CardProps {
  index: number;
  title: string;
  btnText: string;
}

export default function Card({ index, title, btnText }: CardProps) {
  return (
    <div
      className={`relative flex h-[15rem] w-[20rem] items-center justify-center mb-[1rem] sm:mr-[2rem] bg-women`}
    >
      <div className='absolute h-[100%] w-[100%] z-[-1]'>
        <Image className='h-[100%] w-[100%]' src={Women} alt='' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1
          className='text-[#2F327D] lg:text-white mb-[0.2rem] font-[600]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {title}
        </h1>
        <button
          className='h-[3rem] w-[12rem] rounded-[2rem] flex justify-center items-center bg-[#23BDEEE5] text-[#FFFFFF] font-[500] hover:scale-[1.03] duration-[0.3s] active:scale-[0.99] hover:bg-[#4acff7]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
