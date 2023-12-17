import Padding from '@/app/components/padding/padding';
import Image from 'next/image';
import Meetings from '@/assets/features/meetings.png';
import { featureData } from './featureData';
import GreenBall from '@/assets/features/greenBall.png';
import PurpleBall from '@/assets/features/purpleBall.png';
import BlueBall from '@/assets/features/blueBall.svg';
import RedBall from '@/assets/features/redBall.svg';
import styles from './feature.module.css';
import { AOSInit } from '@/app/aos';

export default function Features() {
  return (
    <>
      <AOSInit />
      <Padding>
        <div className={styles.mainContainer}>
          <div className={styles.childContainer}>
            <div className={styles.descriptionContainer}>
              <h1 className={styles.titleDescription}>
                Our <span className={styles.spanText}>Features</span>
              </h1>
              <p className={styles.paragraphDescription}>
                This very extraordinary feature, can make learning activities
                more efficient
              </p>
            </div>

            <div className={styles.featureContainer}>
              <div className={styles.imgContainer} data-aos='fade-right'>
                <Image className={styles.greenBall} src={GreenBall} alt='' />
                <Image className={styles.blueBall} src={BlueBall} alt='' />
                <Image
                  className={styles.meetingIcon}
                  src={Meetings}
                  alt='meetings-icon'
                />
                <Image className={styles.redBall} src={RedBall} alt='' />
                <Image className={styles.purpleBall} src={PurpleBall} alt='' />
              </div>
              <AOSInit />
              <div className={styles.featureWrapper} data-aos='fade-left'>
                <h2 className={styles.featureTitle}>
                  A <span className={styles.spanText}>user interface </span>
                  designed for the classroom
                </h2>
                <div className={styles.featureItemsContainer}>
                  {featureData.map((item, index) => (
                    <div className={styles.featureItemsWrapper} key={index}>
                      <div className={styles.featureIconContainer}>
                        <Image
                          className={styles.featureIcon}
                          src={item.icon}
                          alt={item.alt}
                        />
                      </div>
                      <p className={styles.featureParagraph}>{item.decs}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </>
  );
}
