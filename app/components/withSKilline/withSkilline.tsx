import Padding from '../padding/padding';
import Class from '@/assets/withSkilline/class.jpeg';
import Orange from '@/assets/withSkilline/orangeSquare.png';
import Blue from '@/assets/withSkilline/blueSquare.png';
import Image from 'next/image';
import Play from '@/assets/header/play.png';
import SmallOrange from '@/assets/withSkilline/smallOrange.svg';
import BigOrange from '@/assets/withSkilline/bigOrange.svg';
import styles from './withSkilline.module.css';

export default function WithSkilline() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.descriptionContainer}>
            <Image
              className={styles.bigOrangeIcon}
              src={BigOrange}
              alt='big-orange-icon'
            />
            <h1 className={styles.titleDescription}>
              Everything you can do in a physical classroom,{'  '}
              <span className={styles.spanText}>you can do with Skilline</span>
            </h1>
            <p className={styles.paragraphDescription}>
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <button className={styles.btn}>Learn more</button>
            <Image
              className={styles.smOrangeIcon}
              src={SmallOrange}
              alt='small-orange-icon'
            />
          </div>
          <div className='hidden lg:flex lg:w-[50%] rounded-[1rem] h-[20rem] xl:bg-[#171B4180] w-[auto] relative'>
            <Image
              className='absolute top-[-1rem] left-[-1rem] z-[-2]'
              src={Blue}
              alt='blue-square'
            />
            <Image
              className='h-[100%] rounded-[1rem] w-[100%] z-[-1]'
              src={Class}
              alt='class-img'
            />
            <button className='absolute top-[40%] left-[40%] hover:scale-[1.05] duration-[0.3s] active:scale-[0.98]'>
              <Image
                className='h-[3.7rem] w-auto mx-[1.5rem]'
                src={Play}
                alt='playIcon'
              />
            </button>
            <Image
              className='absolute z-[-2] h-[10rem] w-auto bottom-[-1rem] right-[-1rem]'
              src={Orange}
              alt='orange-square'
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
