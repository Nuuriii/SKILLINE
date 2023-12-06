import Image from 'next/image';
import Padding from '../padding/padding';
import Teams from '@/assets/integrations/mTeams.svg';
import Drive from '@/assets/integrations/drive.svg';
import Dropbox from '@/assets/integrations/dropbox.svg';
import OneDrive from '@/assets/integrations/oneDrive.svg';
import styles from './integrations.module.css';

export default function Integrations() {
  return (
    <Padding>
      <div className={styles.mainContainer}>
        <div className={styles.childContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.oneDriveIcon}
              src={OneDrive}
              alt='one-drive-icon'
            />
            <Image
              className={styles.dropBoxIcon}
              src={Dropbox}
              alt='dropbox-icon'
            />
            <Image className={styles.driveIcon} src={Drive} alt='drive-icon' />
            <Image className={styles.teamsIcon} src={Teams} alt='teams-icon' />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.integrationsContainer}>
              <span className={styles.spanBorder}></span>
              <h3 className={styles.integrationsText}>INTEGRATIONS</h3>
            </div>
            <h1 className={styles.titleDescription}>
              200+ educational tools and platform{' '}
              <span className={styles.spanText}>integrations</span>
            </h1>
            <p className={styles.paragraphDescription}>
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <button className={styles.seeAllBtn}>See All Integrations</button>
          </div>
        </div>
      </div>
    </Padding>
  );
}
