import Padding from '../padding/padding';
import Image from 'next/image';
import GradeBook from '@/assets/forEducator/gradeBook.png';
import styles from './forEducator.module.css';

export default function ForEducator() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.titleDescription}>
              <span className={styles.spanText}>Class Management</span> Tools
              for Educators
            </h1>
            <p className={styles.paragraphDescription}>
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className='mt-[1rem] flex justify-center'>
            <Image
              className='h-[13rem] lg:h-[22rem] xl:h-[25rem] w-auto'
              src={GradeBook}
              alt='gradebook-img'
            />
          </div>
        </div>
      </div>
    </Padding>
  );
}
