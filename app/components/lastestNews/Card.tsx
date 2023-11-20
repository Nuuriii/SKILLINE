import Image, { StaticImageData } from 'next/image';

interface CardProps {
  img: StaticImageData;
  label: string;
  title: string;
  desc: string;
  btnText: string;
}

export default function Card({ img, label, title, desc, btnText }: CardProps) {
  return (
    <div className='mt-[2rem]'>
      <Image className='h-auto w-[100%] rounded-[1rem]' src={img} alt='' />
      <p className='my-[1rem] h-[2rem] w-[6rem] rounded-[2rem] flex justify-center items-center bg-[#F4C467] text-[#252641]'>
        {label}
      </p>
      <h1
        className='text-[#252641] font-[600] text-[1.1rem]'
        style={{ fontFamily: 'poppins, sans-serif' }}
      >
        {title}
      </h1>
      <p
        className='my-[0.5rem] text-[#696984]'
        style={{ fontFamily: 'poppins, sans-serif' }}
      >
        {desc}
      </p>
      <button
        className='text-[#696984] underline'
        style={{ fontFamily: 'poppins, sans-serif' }}
      >
        {btnText}
      </button>
    </div>
  );
}
