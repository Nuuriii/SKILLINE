import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function Card({ icon, title, desc }: CardProps) {
  return (
    <div className='relative bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div className='bg-[#5B72EE]'>
        <Image src={icon} alt='' />
      </div>
      <h2>{title}</h2>
      <p className='hidden lg:flex'>{desc}</p>
    </div>
  );
}
