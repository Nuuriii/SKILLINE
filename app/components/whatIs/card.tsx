import { StaticImageData } from 'next/image';

interface CardProps {
  bg: StaticImageData;
  title: string;
  btnText: string;
}

export default function Card({ bg, title, btnText }: CardProps) {
  return (
    <div className={`lg:bg-[${bg}] mb-[1rem] sm:mr-[2rem]`}>
      <div className='flex flex-col items-center'>
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
