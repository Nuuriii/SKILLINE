import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';

export default function WhatIs() {
  return (
    <Padding>
      <div className='mt-[2rem]'>
        <div>
          <div className='mb-[2rem]'>
            <h1
              className='text-center text-[#2F327D] font-[600] text-[1.5rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              What is <span className='text-[#F48C06]'>Skilline?</span>
            </h1>
            <p
              className='mt-[1rem] text-center text-[#696984]'
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
                bg={item.bgImg}
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
