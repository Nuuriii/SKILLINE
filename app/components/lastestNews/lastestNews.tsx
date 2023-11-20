import Image from 'next/image';
import Padding from '../padding/padding';
import Card from './Card';
import { bigNews, smallNews } from './newsData';

export default function LastestNews() {
  return (
    <Padding>
      <div className='lg:mt-[11rem] flex justify-center'>
        <div className='min-[500px]:w-[30rem] lg:w-full'>
          <div
            className='flex flex-col items-center'
            style={{ fontFamily: 'nunito, sans-serif' }}
          >
            <h1 className='w-[18rem] lg:w-auto text-center text-[#2F327D] text-[1.5rem] lg:text-[2rem] font-[600]'>
              Frontend Web Developer Intern
            </h1>
            <p className='mt-[1rem] lg:text-[1.2rem] text-[#696984] text-center'>
              See the developments that have occurred to Skillines in the world
            </p>
          </div>
          <div className='lg:mt-[3rem] flex flex-col lg:flex-row lg:justify-between'>
            <div className='lg:mr-[4rem] xl:w-[43%]'>
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
            <div className='mt-[3rem] xl:w-[50%]'>
              {smallNews.map((item, index) => (
                <div key={index} className='flex mb-[1.5rem]'>
                  <div className='w-[40%] mr-[1rem] relative'>
                    <Image className='rounded-[1rem]' src={item.img} alt='' />
                    <p className='hidden absolute bottom-[0.7rem] right-[0.7rem] py-[0.2rem] px-[0.7rem] rounded-[2rem] lg:flex text-[0.7rem] bg-[#F4C467] text-[#252641]'>
                      {item.label}
                    </p>
                  </div>
                  <div className='w-[60%] flex flex-col items-start'>
                    <p className='mb-[0.5rem] py-[0.2rem] px-[0.7rem] rounded-[2rem] w-auto lg:hidden text-[0.7rem] bg-[#F4C467] text-[#252641]'>
                      {item.label}
                    </p>

                    <h2 className='mb-[0.5rem] text-[0.8rem] xl:text-[1.1rem] font-[600]'>
                      {item.title}
                    </h2>
                    <p className='text-[0.7rem] xl:text-[1rem]'>{item.desc}</p>
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
