import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';

export default function AllinOne() {
  return (
    <Padding>
      <div className='mt-[4rem] xl:mt-[6rem] min-[1488px]:flex min-[1488px]:justify-center'>
        <div className='min-[1488px]:w-[70rem]'>
          <div className='flex flex-col items-center'>
            <h1
              className='mb-[1rem] text-[1.5rem] xl:text-[2rem] text-[#2F327D] text-center font-[700]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              All-In-One
              <span className='text-[#F48C06]'> Cloud Software.</span>
            </h1>
            <p
              className='text-[#696984] text-center xl:w-[40rem] font-[400] lg:text-[1.2rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
          <div className='mt-[3rem] xl:mt-[6rem] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-end'>
            {cardData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                alt={item.alt}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
}