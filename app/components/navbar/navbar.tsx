import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Polygon from '@/assets/navbar/Polygon.svg';
import Padding from '../padding/padding';
import Hamburger from '@/assets/navbar/hamburger.svg';
import styles from './navbar.module.css';

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.childContainer}>
        <Padding>
          <div className={styles.viewContainer}>
            <div className={styles.titleContainer}>
              <Image className={styles.polygonImg} src={Polygon} alt='icon' />
              <h1 className={styles.skillineTitle}>Skilline</h1>
            </div>
            <button onClick={handleShow} className={styles.hamburgerBtn}>
              <Image
                className={styles.hamburger}
                src={Hamburger}
                alt='hamburger'
              />
            </button>
            {/* ul for mobile */}
            <ul
              className={`${styles.mobileUl} ${
                show ? styles.trueRight : styles.falseRight
              }`}
            >
              <li>
                <Link className={styles.linkText} href={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.linkText} href={'/'}>
                  Careers
                </Link>
              </li>
              <li>
                <Link className={styles.linkText} href={'/'}>
                  Blog
                </Link>
              </li>
              <li className={styles.mobileAboutListItem}>
                <Link className={styles.linkText} href={'/'}>
                  About Us
                </Link>
              </li>
              <li>
                <button className={styles.mobileLogin}>Login</button>
                <button className={styles.mobileSignup}>Sign Up</button>
              </li>
            </ul>
            {/* ul for desktop view */}
            <ul className={styles.desktopUl}>
              <li className={styles.desktopList}>
                <Link className={styles.linkText} href={'/'}>
                  Home
                </Link>
              </li>
              <li className={styles.desktopList}>
                <Link className={styles.linkText} href={'/'}>
                  Careers
                </Link>
              </li>
              <li className={styles.desktopList}>
                <Link className={styles.linkText} href={'/'}>
                  Blog
                </Link>
              </li>
              <li className={styles.aboutListItem}>
                <Link className={styles.linkText} href={'/'}>
                  About Us
                </Link>
              </li>
              <li className={styles.btnListItem}>
                <button className={styles.dekstopLogin}>Login</button>
              </li>
              <li className={styles.btnListItem}>
                <button className={styles.dekstopSignup}>Sign Up</button>
              </li>
            </ul>
          </div>
        </Padding>
      </div>
    </nav>
  );
}
