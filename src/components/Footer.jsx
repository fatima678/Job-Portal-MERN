
// import React from 'react';
// import { assets } from '../assets/assets';

// function Footer() {
//     return (
//         <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 bg-gray-200 text-white-400">
//             <div className="flex items-center gap-4">
//                 <img width={160} src={assets.logo} alt="Logo" />
//                 <div className="text-sm">
//                     <p>InsiderJobs</p>
//                     <p className="text-xs text-gray-400"> Stack.dev | All rights reserved.</p>
//                 </div>
//             </div>
//             <div className="flex items-center gap-4">
                
//                 <div className="flex gap-2">
//                     <img width={24} src={assets.facebook_icon} alt="Facebook" />
//                     <img width={24} src={assets.twitter_icon} alt="Twitter" />
//                     <img width={24} src={assets.instagram_icon} alt="Instagram" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Footer;



import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
    return (
        <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 bg-gray-200 text-white-400">
            <div className="flex items-center gap-4">
                <img width={160} src={assets.logo} alt="Logo" />
                <div className="text-sm">
                    <p>InsiderJobs</p>
                    <p className="text-xs text-gray-400"> Stack.dev | All rights reserved.</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <img width={30} src={assets.facebook_icon} alt="Facebook" />
                    <img width={30} src={assets.twitter_icon} alt="Twitter" />
                    <img width={30} src={assets.instagram_icon} alt="Instagram" />
                </div>
            </div>
        </div>
    );
}

export default Footer;