// import React from 'react'
// import { assets } from '../assets/assets'


// function Hero() {
//   return (
//     <div className='container 2xl:px-20 mx-auto my-10'>
//        <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white p-16 text-center mx-2 rounded-xl">


//              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Over 10,000+ jobs to apply</h2>
//             <p>Your Next Big Career Move Starts Right Here- Explore The Best Job Opportunites And Take The First Step Towards Your Future!</p>
//             <div>
//                 <div>
//                    <img src={assets.search_icon} alt="" />

//                     <input type="text" placeholder='Job title, keywords or company' className='max-sm:text-xs p-2 rounded-outline-none w-full'/>
//                 </div>
//                 <div>
//                    <img src={assets.location_icon} alt="" />

//                     <input type="text" placeholder='location' className='max-sm:text-xs p-2 rounded-outline-none w-full'/>
//                 </div>
//                 <button>Search</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useContext, useRef } from 'react';

function Hero() {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);
    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {

        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
        setIsSearched(true);

        console.log({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
    };

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-purple-800 to-purple-900 text-white p-16 text-center mx-2 rounded-xl'>
                <h2 className='text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
                <p className='text-lg mb-6'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
                <div className='flex flex-col md:flex-row justify-center gap-4'>
                    <div className='relative w-full md:w-1/3'>
                        <img src={assets.search_icon} alt='' className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5' />
                        <input
                            type='text'
                            placeholder='Job title, keywords or company'
                            className='w-full p-2 pl-10 bg-white text-black rounded-md outline-none text-sm md:text-base'
                            ref={titleRef}
                        />
                    </div>
                    <div className='relative w-full md:w-1/3'>
                        <img src={assets.location_icon} alt='' className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5' />
                        <input
                            type='text'
                            placeholder='location'
                            className='w-full p-2 pl-10 bg-white text-black rounded-md outline-none text-sm md:text-base'
                            ref={locationRef}
                        />
                    </div>
                    <button onClick={onSearch} className='w-full md:w-1/6 bg-purple-700 text-white p-2 rounded-md hover:bg-purple-600 transition duration-300'>
                        Search
                    </button>
                </div>
            </div>
            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
                <div className='flex justify-center gap-10 lg-gap-16 flex-wrap'>
                    <p className='font-medium'>Trusted By</p>
                    <img className='h-6' src={assets.microsoft_logo} alt='' />
                    <img className='h-6' src={assets.walmart_logo} alt='' />
                    <img className='h-6' src={assets.accenture_logo} alt='' />
                    <img className='h-6' src={assets.samsung_logo} alt='' />
                    <img className='h-6' src={assets.amazon_logo} alt='' />
                    <img className='h-6' src={assets.adobe_logo} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Hero;