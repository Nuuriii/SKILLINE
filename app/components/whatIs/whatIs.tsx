import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';

export default function WhatIs() {
  return (
    <Padding>
      <div className='mt-[2rem] flex justify-center'>
        <div className='min-[500px]:w-[30rem] lg:w-full'>
          <div className='mb-[2rem] flex flex-col items-center'>
            <h1
              className='text-center text-[#2F327D] font-[600] text-[1.5rem] lg:text-[2rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              What is <span className='text-[#F48C06]'>Skilline?</span>
            </h1>
            <p
              className='mt-[1rem] text-center text-[#696984] lg:text-[1.2rem] lg:w-[55rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row sm:justify-center'>
            {cardData.map((item, index) => (
              <Card
                key={index}
                bgImg={item.bgImg}
                index={index}
                title={item.title}
                btnText={item.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
}
