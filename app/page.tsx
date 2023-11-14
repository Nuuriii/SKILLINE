'use client';

import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Company from './components/company/company';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=''>
        <Header />
        <Company />
      </main>
    </>
  );
}
