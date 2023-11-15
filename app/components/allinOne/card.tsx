import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  desc: string;
  index: number;
}

export default function Card({ icon, title, desc, index }: CardProps) {
  return (
    <div className='relative flex flex-col items-center bg-[#FFFFFF] shadow-[0px_10px_60px_0px_#e2e8f0] mb-[3rem] px-[1rem] pt-[3rem] pb-[1rem] rounded-[1rem]'>
      <div
        className={`${
          index === 1
            ? 'bg-[#F48C06]'
            : index === 2
            ? 'bg-[#29B9E7]'
            : 'bg-[#5B72EE]'
        } absolute top-[-1.6rem] flex justify-center items-center h-[3.2rem] w-[3.2rem] rounded-[100%]`}
      >
        <Image className='h-[1.6rem] w-auto' src={icon} alt='' />
      </div>
      <h2
        className='text-[#2F327D] font-[500] text-center'
        style={{ fontFamily: 'poppins, sans-serif' }}
      >
        {title}
      </h2>
      <p className='hidden lg:flex'>{desc}</p>
    </div>
  );
}
