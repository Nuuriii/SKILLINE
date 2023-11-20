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
    <div>
      <Image src={img} alt='' />
      <p>{label}</p>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>{btnText}</button>
    </div>
  );
}
