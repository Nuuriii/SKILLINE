import Padding from '../padding/padding';
import Image from 'next/image';
import River from '@/assets/assesment/river.png';
import Plane from '@/assets/assesment/plane.svg';
import Close from '@/assets/assesment/close-icon.png';
import Success from '@/assets/assesment/success.png';
import Purple from '@/assets/features/purpleBall.png';
import GreenTransparent from '@/assets/assesment/green-transparent.svg';
import Orange from '@/assets/withSkilline/smallOrange.svg';
import Green from '@/assets/features/greenBall.png';
import Red from '@/assets/features/redBall.svg';
import styles from './assesment.module.css';

export default function Assesment() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
              <Image
                className={styles.orangeIcon}
                src={Orange}
                alt='orange-icon'
              />
              <Image
                className={styles.purpleIcon}
                src={Purple}
                alt='purple-icon'
              />
              <Image
                className={styles.closeIcon}
                src={Close}
                alt='close-icon'
              />
              <Image
                className={styles.successIcon}
                src={Success}
                alt='success-icon'
              />
              <Image className={styles.redIcon} src={Red} alt='red-icon' />
              <Image
                className={styles.greenIcon}
                src={Green}
                alt='green-icon'
              />
              <h3 className={styles.labelCard}>Question 1</h3>
              <p className={styles.paragraphCard}>
                True or false? This play takes place in Italy
              </p>
              <Image className={styles.riverImg} src={River} alt='river-img' />
              <div className={styles.alertContainer}>
                <div className={styles.alertIconContainer}>
                  <Image
                    className={styles.planeIcon}
                    src={Plane}
                    alt='plane-icon'
                  />
                  <Image
                    className={styles.bigGreenTransparent}
                    src={GreenTransparent}
                    alt='big-green-transparent'
                  />
                </div>
                <div className={styles.alertWrapper}>
                  <p className={styles.alertMessage}>
                    Your answer was sent successfully
                  </p>
                  <Image
                    className={styles.smGreenTransparent}
                    src={GreenTransparent}
                    alt='small-green-transparent'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.titleDescription}>
              Assessments, <span className={styles.spanText}>Quizzes</span>,
              Tests
            </h1>
            <p className={styles.paragraphDescription}>
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>
      </div>
    </Padding>
  );
}
