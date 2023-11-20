import Image from 'next/image';
import Padding from '../padding/padding';
import Icon from '@/assets/footer/footer-logo.svg';

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: 'poppins, sans-serif' }}
      className='mt-[5rem] bg-[#252641] pt-[3rem] lg:pt-[4rem] flex justify-center pb-[1.5rem]'
    >
      <div className='min-[500px]:w-[30rem] lg:w-[100%]'>
        <Padding>
          <div className='flex flex-col items-center'>
            <div className='flex items-center'>
              <Image
                className='h-[3rem] lg:h-[4rem] w-auto pr-[2rem] border-r-[1px] border-solid border-[#626381]'
                src={Icon}
                alt=''
              />
              <h1 className='pl-[2rem] lg:text-[1.2rem] text-[#FFFFFF] font-[600] w-[9rem] lg:w-[11rem]'>
                Virtual Class for Zoom
              </h1>
            </div>
            <form
              className='my-[4rem] lg:my-[5rem] flex flex-col items-center'
              action=''
            >
              <label
                style={{ fontFamily: 'poppins, sans-serif' }}
                className='mb-[1rem] text-[#B2B3CF] text-center lg:text-[1.2rem]'
                htmlFor=''
              >
                Subscribe to get our Newsletter
              </label>
              <div className='flex flex-col lg:flex-row lg:justify-between'>
                <input
                  className='px-[0.5rem] py-[0.5rem] rounded-[2rem] placeholder:text-[#83839A] border-[1px] border-solid text-center lg:text-left lg:w-[66%] lg:px-[0.8rem] border-[#83839A] bg-transparent focus:bg-white'
                  type='email'
                  placeholder='Your Email'
                  required
                />
                <button
                  type='submit'
                  className='lg:w-[30%] mt-[1rem] lg:mt-0 py-[0.5rem] rounded-[2rem] text-[#FFFFFF] bg-gradient-to-r from-blue-500 to-indigo-800 hover:scale-[1.02] active:scale-[0.99] duration-[0.3s] hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-800'
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className='' style={{ fontFamily: 'poppins, sans-serif' }}>
              <div className='flex items-center text-[0.8rem] lg:text-[1rem] text-[#B2B3CF]'>
                <span className='pr-[0.9rem] border-r-[1px] border-solid border-[#626381]'>
                  Careers
                </span>
                <span className='px-[0.9rem] border-r-[1px] border-solid border-[#626381]'>
                  Privacy Policy
                </span>
                <span className='pl-[0.9rem]'>Terms & Conditions</span>
              </div>
              <p className='mt-[1rem] text-[0.9rem] lg:text-[1.1rem] text-[#B2B3CF] text-center'>
                © 2021 Class Technologies Inc.{' '}
              </p>
            </div>
          </div>
        </Padding>
      </div>
    </footer>
  );
}
