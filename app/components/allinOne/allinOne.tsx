import Padding from '../padding/padding';
import { cardData } from './cardData';
import Card from './card';
import styles from './allinOne.module.css';

export default function AllinOne() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.titleDescription}>
              All-In-One
              <span className={styles.titleSpan}> Cloud Software.</span>
            </h1>
            <p className={styles.paragraphDescription}>
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
          <div className='mt-[3rem] xl:mt-[6rem] grid grid-cols-1 lg:grid-cols-3 justify-end'>
            {cardData.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                alt={item.alt}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
}
