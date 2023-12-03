import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';
import styles from './whatIs.module.css';

export default function WhatIs() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.titleDescription}>
              What is <span className={styles.spanText}>Skilline?</span>
            </h1>
            <p className={styles.paragraphDescription}>
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row sm:justify-center'>
            {cardData.map((item, index) => (
              <Card
                key={index}
                bgImg={item.bgImg}
                index={index}
                title={item.title}
                btnText={item.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
}
