import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

const addReminder = () => {
  return (
    <div className='container w-[480px] mx-auto flex justify-center bg-[#F8FAFE] min-h-screen'>
      <div className='w-full px-5 font-[T-Regular]'>
        {/* Header - Navbar */}
        <div className='flex justify-between items-center pt-10'>
          <Link href={"/"}>
            <button className='text-2xl'>
              <HiArrowNarrowLeft></HiArrowNarrowLeft>
            </button>
          </Link>
          <p className='select-none text-xl'>Task</p>
          <button className='opacity-0 text-[0.1px]'>
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </button>
        </div>
        {/* Header - Navbar */}
        {/* Reminder Form */}
        <div className='mt-16 mx-7'>
          <form action='' className='flex flex-col gap-5'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              name=''
              id=''
              className='px-1 text-sm h-[30px]'
            />
            <label htmlFor=''>Time</label>
            <div className='flex justify-center items-center gap-4'>
              <input
                type='number'
                name=''
                id=''
                min='0'
                max='99'
                className='w-[82px] h-[82px] rounded-lg text-5xl text-[#007FFF] focus:bg-[#007FFF] focus:text-white text-center focus:outline-none'
              />
              :
              <input
                type='number'
                name=''
                id=''
                min='0'
                max='60'
                className='w-[82px] h-[82px] rounded-lg text-5xl text-[#007FFF] focus:bg-[#007FFF] focus:text-white text-center focus:outline-none'
              />
            </div>
            <label htmlFor=''>Description</label>
            <input
              type='text'
              name=''
              id=''
              className='px-1 text-sm h-[30px]'
            />
            <div className='flex flex-col justify-center mt-6'>
              <button
                type='submit'
                className=' bg-[#408CFC] rounded-3xl text-white py-3 font-[T-Medium] w-[207px] m-auto'
              >
                Create
              </button>
            </div>
          </form>
        </div>
        {/* Reminder Form */}
      </div>
    </div>
  );
};

export default addReminder;
