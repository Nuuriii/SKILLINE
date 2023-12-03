import Image from 'next/image';
import styles from './allinOne.module.css';

interface CardProps {
  icon: string;
  alt: string;
  title: string;
  desc: string;
  index: number;
}

export default function Card({ icon, alt, title, desc, index }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
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
