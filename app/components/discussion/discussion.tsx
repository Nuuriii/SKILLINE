import Image from 'next/image';
import Padding from '../padding/padding';
import DiscussionImg from '@/assets/discussion/discussion.png';
import styles from './discussion.module.css';

export default function Discussion() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.imgContainer}>
            <div>
              <Image
                className={styles.discussionImg}
                src={DiscussionImg}
                alt='discussion-img'
              />
            </div>
            <div className={styles.descriptionContainer}>
              <h1 className={styles.titleContainer}>
                <span className={styles.spanText}>One-on-One</span> Discussions
              </h1>
              <p className={styles.paragraphContainer}>
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.seeMoreBtn}>See more features</button>
          </div>
        </div>
      </div>
    </Padding>
  );
}
