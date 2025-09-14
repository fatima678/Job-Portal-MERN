

import React from 'react';
import { assets } from '../assets/assets';

function AppDownload() {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>
                    Download Mobile App for better experience
                </h1>
                <div className='flex gap-4'>
                    <a href="#" className='inline-block'>
                        <img src={assets.play_store} alt="Google Play Store" />
                    </a>
                    <a href="#" className='inline-block'>
                        <img className='h-12' src={assets.app_store} alt="Apple App Store" />
                    </a>
                </div>
                {/* Corrected image positioning for the girl */}
                <div className='absolute right-0 bottom-0 top-0 flex items-end justify-end'>
                    <img className='h-full object-contain' src={assets.app_main_img} alt="Girl pointing to app download" />
                </div>
            </div>
        </div>
    );
}

export default AppDownload;