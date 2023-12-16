'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
    });
  }, []);

  return null;
};
