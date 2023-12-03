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
          <div className={styles.imgContainer}>
            <Image
              className={styles.blueSquareIcon}
              src={Blue}
              alt='blue-square'
            />
            <Image className={styles.classImg} src={Class} alt='class-img' />
            <button className={styles.playBtn}>
              <Image className={styles.playIcon} src={Play} alt='playIcon' />
            </button>
            <Image
              className={styles.orangeSquareIcon}
              src={Orange}
              alt='orange-square'
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
