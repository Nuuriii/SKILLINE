import Image from 'next/image';
import Padding from '../padding/padding';
import Teams from '@/assets/integrations/mTeams.svg';
import Drive from '@/assets/integrations/drive.svg';
import Dropbox from '@/assets/integrations/dropbox.svg';
import OneDrive from '@/assets/integrations/oneDrive.svg';

export default function Integrations() {
  return (
    <Padding>
      <div
        className='mt-[6rem] flex justify-center'
        style={{ fontFamily: 'poppins, sans-serif' }}
      >
        <div className='min-[500px]:w-[30rem] min-[1444px]:w-[70rem] lg:w-[100%] flex flex-col lg:flex-row items-center lg:justify-between'>
          <div className='h-auto xl:w-[25rem] grid grid-cols-2 items-center justify-items-center'>
            <Image
              className='h-[5rem] lg:h-[7rem] xl:h-[9rem] w-auto'
              src={OneDrive}
              alt='one-drive-icon'
            />
            <Image
              className='h-[4.5rem] lg:h-[5rem] xl:h-[6rem] w-auto'
              src={Dropbox}
              alt='dropbox-icon'
            />
            <Image
              className='h-[4.5rem] lg:h-[5rem] xl:h-[6rem] w-auto mt-[1.5rem]'
              src={Drive}
              alt='drive-icon'
            />
            <Image
              className='h-[4.5rem] lg:h-[5rem] xl:h-[6rem] w-auto mt-[1.5rem]'
              src={Teams}
              alt='teams-icon'
            />
          </div>
          <div className='mt-[3rem] flex flex-col items-center lg:w-[50%] lg:items-start'>
            <div className='hidden lg:flex lg:items-center'>
              <span className='h-[1px] w-[4rem] bg-[#525596] mr-[1.2rem]'></span>
              <h3 className='text-[#525596] font-[400]'>INTEGRATIONS</h3>
            </div>
            <h1 className='lg:mt-[1rem] text-[#525596] text-[1.5rem] lg:text-[2rem] font-[600] text-center lg:text-left'>
              200+ educational tools and platform{' '}
              <span className='text-[#F48C06]'>integrations</span>
            </h1>
            <p className='text-[#696984] text-center xl:text-[1.2rem] lg:text-left mt-[1rem]'>
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <button className='mt-[2rem] rounded-[2rem] py-[0.7rem] px-[1.5rem] text-[#F48C06] border-[1px] border-solid border-[#F48C06] font-[400] hover:bg-[#F48C06] hover:text-white hover:scale-[1.05] active:scale-[0.99] duration-[0.3s]'>
              See All Integrations
            </button>
          </div>
        </div>
      </div>
    </Padding>
  );
}
