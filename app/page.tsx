'use client';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Company from './components/company/company';
import AllinOne from './components/allinOne/allinOne';
import WhatIs from './components/whatIs/whatIs';
import WithSkilline from './components/withSKilline/withSkilline';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=''>
        <Header />
        <Company />
        <AllinOne />
        <WhatIs />
        <WithSkilline />
      </main>
    </>
  );
}
