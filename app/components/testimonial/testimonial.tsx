import Padding from '../padding/padding';
import Image from 'next/image';
import ArrowRight from '@/assets/testimonial/arrow-right.svg';
import SmileGirl from '@/assets/testimonial/smiling-woman.png';
import StarGroup from '@/assets/testimonial/star-group.svg';
import styles from './testimonial.module.css';

export default function Testimonial() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.titleDescription}>What They Say?</h1>
            <p data-testid='first-paraph' className={styles.firstParagraph}>
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className={styles.secondParagraph}>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className={styles.thirdParagraph}>
              Are you too? Please give your assessment
            </p>
            <button className={styles.btn}>
              <span>Write your assessment</span>
              <div className={styles.imgBtn}>
                <Image
                  className={styles.arrowRight}
                  src={ArrowRight}
                  alt='arrow-right'
                />
                {/* 
                 
                */}
              </div>
            </button>
          </div>
          <div className='mt-[11rem] lg:mt-[0rem] relative  w-full flex justify-center'>
            <Image
              className='absolute top-[-7rem] z-[-1] lg:static h-[10rem] lg:h-[23rem] xl:h-[28rem] w-auto rounded-[0.5rem]'
              src={SmileGirl}
              alt='smile-girl'
            />
            <div className='min-[500px]:w-[20rem] lg:w-[22rem] xl:w-[28rem] lg:absolute lg:top-[12rem] lg:right-[1rem] xl:top-[18rem] xl:right-[3rem] bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-[1.2rem] px-[1rem] xl:px-[1.5rem] xl:border-l-[8px] border-solid border-[#F67766] rounded-[1rem]'>
              <div className='xl:pl-[1rem]  xl:border-l-[1px] border-solid border-[#BDBDD1]'>
                <p className='text-[#5F5F7E] font-[400]'>
                  {`"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."`}
                </p>
              </div>
              <div className='mt-[2rem] flex items-center justify-between xl:pl-[1rem]'>
                <h2 className='text-[#5F5F7E] font-[600]'>Gloria Rose</h2>
                <div className='flex flex-col items-end'>
                  <Image
                    className='h-auto w-[5rem] xl:w-[6rem]'
                    src={StarGroup}
                    alt='star-icon'
                  />
                  <p className='mt-[0.3rem] xl:mt-[0.5rem] text-[0.7rem] xl:text-[0.8rem] text-[#80819A] font-[600]'>
                    12 reviews at Yelp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
