import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';

export default function AllinOne() {
  return (
    <Padding>
      <div className='mt-[4rem]'>
        <div>
          <div>
            <h1
              className='mb-[1rem] text-[1.5rem] text-[#2F327D] text-center font-[700]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              All-In-One{' '}
              <span className='text-[#F48C06]'> Cloud Software.</span>
            </h1>
            <p
              className='text-[#696984] text-center font-[400]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
          <div className='mt-[3rem]'>
            {cardData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
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
