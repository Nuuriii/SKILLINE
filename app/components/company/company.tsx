import { CompanyIcon } from './companyData';
import Image from 'next/image';
import Padding from '../padding/padding';
import styles from './style.module.css';

export default function Company() {
  return (
    <Padding>
      <div className={styles.companyContainer}>
        <div className={styles.childContainer}>
          <div>
            <h1 className={styles.companyTitle}>
              Trusted by 5,000+ Companies Worldwide
            </h1>
          </div>
          <div className={styles.sliderContainer}>
            <div className='animate-infinite-slider flex items-center w-[calc(250px*10)]'>
              {CompanyIcon.map((item, index) => (
                <div
                  className='slide mx-[3rem] flex w-[125px] items-center justify-center'
                  key={index}
                >
                  <Image src={item.icon} alt={item.alt} />
                </div>
              ))}
              {CompanyIcon.map((item, index) => (
                <div
                  className='slide mx-[3rem] flex w-[125px] items-center justify-center'
                  key={index}
                >
                  <Image src={item.icon} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
}
