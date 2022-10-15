import Image from 'next/image';
import React from 'react';
import bannerImage from '../public/assets/banner.png';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] l:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src={bannerImage} layout='fill' objectFit='cover' />
        <div className="absolute top-1/2 w-full text-center">
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button 
                className='text-purple-500 font-semibold my-3 bg-white 
                    px-10 py-3 rounded-full shadow-lg hover:shadow-2xl 
                    active:scale-125 transition duration-150'
            >
                    I'm flexible
            </button>
        </div>
    </div>
  )
}

export default Banner;