import Image from 'next/image';
import styles from './allinOne.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProps {
  icon: string;
  alt: string;
  title: string;
  desc: string;
  index: number;
}

export default function Card({ icon, alt, title, desc, index }: CardProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return (
    <div className={styles.cardWrapper} data-aos='zoom-in'>
      <div
        className={`${
          index === 1
            ? styles.orangeBg
            : index === 2
            ? styles.dodgerBlueBg
            : styles.blueVioletBg
        } ${styles.iconContainer}`}
      >
        <Image className={styles.iconStyle} src={icon} alt={alt} />
      </div>
      <div className={styles.cardDescription}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardParagraph}>{desc}</p>
      </div>
    </div>
  );
}
