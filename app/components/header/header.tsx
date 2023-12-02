import Bg from '@/assets/header/orangeBg.png';
import Image from 'next/image';
import Padding from '../padding/padding';
import Play from '@/assets/header/play.png';
import Girl from '@/assets/header/girl.png';
import Man from '@/assets/header/man.svg';
import Calender from '@/assets/header/calendar.svg';
import Mail from '@/assets/header/email.svg';
import Statistic from '@/assets/header/statistic.png';
import GreenBullet from '@/assets/header/greenbullet.svg';
import CheckIcon from '@/assets/header/checklist.svg';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <Image className={styles.orangeBg} src={Bg} alt='orangeBg' />
      <div className={styles.childContainer}>
        <Padding>
          <div className={styles.viewContainer}>
            <div className={styles.contentContainer}>
              <div className={styles.girlImgContainer}>
                <Image className={styles.girlImg} src={Girl} alt='girlMobile' />
              </div>
              <div className={styles.descriptionContainer}>
                <h1 className={styles.titleDescription}>
                  <span className={styles.spanTitleText}>Studying</span> Online
                  is now much easier
                </h1>
                <p className={styles.descriptionParagraph}>
                  Skilline is an interesting platform that will teach you in
                  more an interactive way
                </p>
                <div className={styles.buttonsContainer}>
                  <button className={styles.firstBtnItems}>
                    Join for free
                  </button>
                  <button className={styles.secondBtnItems}>
                    <Image
                      className={styles.playIcon}
                      src={Play}
                      alt='playIcon'
                    />
                  </button>
                  <p className={styles.paragraphItems}>Watch how it works</p>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.statisticContainer}>
                  <Image
                    className={styles.statisticIcon}
                    src={Statistic}
                    alt='statisticIcon'
                  />
                </div>

                <div className={styles.mailContainer}>
                  <div className={styles.mailIconContainer}>
                    <Image
                      className={styles.mailIcon}
                      src={Mail}
                      alt='mailIcon'
                    />
                  </div>
                  <div className={styles.mailInfoContainer}>
                    <Image
                      className={styles.checkIcon}
                      src={CheckIcon}
                      alt='checkIcon'
                    />
                    <h2
                      className={styles.mailInfoTitle}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      Congratulations
                    </h2>
                    <p
                      className={styles.mailInfoParagraph}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      Your admission completed
                    </p>
                  </div>
                </div>

                <div className={styles.calendarContainer}>
                  <div className={styles.calendarIconContainer}>
                    <Image
                      className={styles.calendarIcon}
                      src={Calender}
                      alt='calenderIcon'
                    />
                  </div>
                  <div>
                    <h2
                      className={styles.calendarTitle}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      250k
                    </h2>
                    <p
                      className={styles.calendarParagraph}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      Assisted Student
                    </p>
                  </div>
                </div>
                <div className={styles.userExperienceContainer}>
                  <div className={styles.userImageContainer}>
                    <Image className={styles.userImg} src={Man} alt='manIcon' />
                    <Image
                      className={styles.greenBulletIcon}
                      src={GreenBullet}
                      alt='bulletIcon'
                    />
                  </div>
                  <div>
                    <h2
                      className={styles.experienceTitle}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      User Experience Class
                    </h2>
                    <p className={styles.experienceParagraph}>
                      Today at 12.00 PM
                    </p>
                    <button
                      className={styles.experienceBtn}
                      style={{ fontFamily: 'nunito, sans-serif' }}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
                <Image
                  className={styles.girlDekstopImg}
                  src={Girl}
                  alt='girlDekstop'
                />
              </div>
            </div>
          </div>
        </Padding>
      </div>
    </div>
  );
}
