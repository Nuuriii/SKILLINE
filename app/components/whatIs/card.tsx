import Image, { StaticImageData } from 'next/image';
import styles from './whatIs.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProps {
  index: number;
  bgImg: StaticImageData;
  title: string;
  btnText: string;
}

export default function Card({ index, bgImg, title, btnText }: CardProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return (
    <div
      className={styles.cardWrapper}
      data-aos={`${index == 1 ? 'fade-left' : 'fade-right'}`}
    >
      <div className={styles.imgContainer}>
        <Image className={styles.bgImgStyles} src={bgImg} alt='' />
      </div>
      <div className={styles.cardDescription}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <button
          className={`${styles.btnStyle} ${
            index === 0 ? styles.startClassBtn : styles.enterCodeBtn
          }`}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
