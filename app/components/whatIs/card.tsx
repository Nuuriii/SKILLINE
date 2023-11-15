import Image, { StaticImageData } from 'next/image';

interface CardProps {
  index: number;
  bgImg: StaticImageData;
  title: string;
  btnText: string;
}

export default function Card({ index, bgImg, title, btnText }: CardProps) {
  return (
    <div
      className={`relative flex xl:bg-[#171B4180] xl:h-[20rem] rounded-[1rem] overflow-hidden xl:w-[29rem] items-center justify-center mb-[1rem] sm:mr-[2rem] bg-women`}
    >
      <div className='absolute  hidden xl:block h-[100%] w-[100%] z-[-1]'>
        <Image className='h-[100%] w-[100%]' src={bgImg} alt='' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1
          className='text-[#2F327D] xl:text-[1.2rem] lg:text-white mb-[0.2rem] font-[600]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {title}
        </h1>
        <button
          className={`h-[3rem] w-[12rem] rounded-[2rem] flex justify-center items-center bg-[#23BDEEE5] text-[#FFFFFF] font-[500] hover:scale-[1.03] duration-[0.3s] active:scale-[0.99] hover:bg-[#4acff7] xl:text-[1rem] ${
            index === 0
              ? 'xl:bg-transparent xl:border-[1px] border-solid border-[#fff] xl:hover:border-none'
              : ''
          }`}
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
