import Image from 'next/image';
import Padding from '../padding/padding';
import Card from './Card';
import { bigNews, smallNews } from './newsData';

export default function LastestNews() {
  return (
    <Padding>
      <div>
        <div>
          <div
            className='flex flex-col items-center'
            style={{ fontFamily: 'nunito, sans-serif' }}
          >
            <h1 className='w-[18rem] text-center text-[#2F327D] text-[1.5rem] font-[600]'>
              Frontend Web Developer Intern
            </h1>
            <p className='mt-[1rem] text-[#696984] text-center'>
              See the developments that have occurred to Skillines in the world
            </p>
          </div>
          <div className='flex flex-col'>
            <div>
              {bigNews.map((item, index) => (
                <Card
                  key={index}
                  img={item.img}
                  label={item.label}
                  title={item.title}
                  desc={item.desc}
                  btnText={item.btnText}
                />
              ))}
            </div>
            <div>
              {smallNews.map((item, index) => (
                <div key={index} className='flex'>
                  <div className='w-[60%] relative'>
                    <Image src={item.img} alt='' />
                    <p className='hidden lg:flex text-[0.4rem] absolute bg-[#F4C467] text-[#252641]'>
                      {item.label}
                    </p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='py-[0.5rem] px-[1rem] w-auto lg:hidden text-[0.9rem] bg-[#F4C467] text-[#252641]'>
                      {item.label}
                    </p>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
