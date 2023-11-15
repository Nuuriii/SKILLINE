import Image from 'next/image';

interface CardProps {
  icon: string;
  alt: string;
  title: string;
  desc: string;
  index: number;
}

export default function Card({ icon, alt, title, desc, index }: CardProps) {
  return (
    <div className='relative flex flex-col items-center bg-[#FFFFFF] shadow-[0px_10px_60px_0px_#e2e8f0] mb-[3rem] sm:mr-[1rem] lg:mr-[2.4rem] px-[1.2rem] pt-[3rem] pb-[1rem] lg:pb-[2.5rem] rounded-[1rem]'>
      <div
        className={`${
          index === 1
            ? 'bg-[#F48C06]'
            : index === 2
            ? 'bg-[#29B9E7]'
            : 'bg-[#5B72EE]'
        } absolute top-[-1.6rem] flex justify-center items-center h-[3.2rem] w-[3.2rem] rounded-[100%]`}
      >
        <Image className='h-[1.6rem] w-auto' src={icon} alt={alt} />
      </div>
      <div className='flex flex-col items-center justify-between h-full'>
        <h2
          className='text-[#2F327D] h-[50%] flex justify-center items-center font-[500] text-center lg:text-[1.2rem] lg:mb-[0.5rem] xl:w-[15rem]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {title}
        </h2>
        <p
          className='h-[50%] hidden lg:flex text-center font-[400] text-[#696984]'
          style={{ fontFamily: 'poppins, sans-serif' }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
