import Image, { StaticImageData } from 'next/image';
import styles from './whatIs.module.css';

interface CardProps {
  index: number;
  bgImg: StaticImageData;
  title: string;
  btnText: string;
}

export default function Card({ index, bgImg, title, btnText }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
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
