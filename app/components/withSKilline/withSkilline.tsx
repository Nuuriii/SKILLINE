import Padding from '../padding/padding';

export default function WithSkilline() {
  return (
    <Padding>
      <div className='mt-[3rem]'>
        <div>
          <div className='flex flex-col items-center xl:items-start'>
            <h1
              className='text-[#2F327D] mb-[1rem] font-[600] text-[1.5rem] text-center lg:text-left md:w-[38rem]'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Everything you can do in a physical classroom,{'  '}
              <span className='text-[#F48C06]'>you can do with Skilline</span>
            </h1>
            <p
              className='text-[#696984] text-center xl:text-left'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <button
              className='mt-[1rem] text-[#696984] underline'
              style={{ fontFamily: 'poppins, sans-serif' }}
            >
              Learn more
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </Padding>
  );
}
