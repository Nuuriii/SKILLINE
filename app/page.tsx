'use client';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Company from './components/company/company';
import AllinOne from './components/allinOne/allinOne';
import WhatIs from './components/whatIs/whatIs';
import WithSkilline from './components/withSKilline/withSkilline';
import Features from './components/features/features';
import ForTeachAndLearn from './components/forTeachAndLearn/forTeachAndLearn';
import Assesment from './components/assesment/assesment';
import ForEducator from './components/forEducator/forEducator';
import Discussion from './components/discussion/discussion';
import Integrations from './components/integrations/integrations';
import Testimonial from './components/testimonial/testimonial';

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
        <Features />
        <ForTeachAndLearn />
        <Assesment />
        <ForEducator />
        <Discussion />
        <Integrations />
        <Testimonial />
      </main>
    </>
  );
}
