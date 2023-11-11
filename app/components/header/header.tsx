import Bg from '@/assets/header/orangeBg.png';
import Image from 'next/image';
import Padding from '../padding/padding';

export default function Header() {
  return (
    <div className='relative'>
      <Image className='absolute z-[-2]' src={Bg} alt='' />
      <Padding>
        <div className='pt-[11rem]'>kkkkk</div>
      </Padding>
    </div>
  );
}
