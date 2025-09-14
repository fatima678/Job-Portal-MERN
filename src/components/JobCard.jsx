// // // // // import React from 'react'
// // // // // import { assets } from '../assets/assets'
// // // // // import { jobsData } from '../assets/assets'

// // // // // function JobCard({ job}) {
// // // // //   return (
// // // // //   <div className='border p-4 shadow rounded'>
// // // // //   <div className='flex justify-between items-center'>
// // // // //     <img src={assets.company_icon} alt="" />
// // // // //   </div>
// // // // //   <h4>{job.title}</h4>
// // // // //   <div>
// // // // //     <span>{job.location}</span>
// // // // //     <span>{job.level}</span>
// // // // //   </div>
// // // // //  <p 
// // // // //   dangerouslySetInnerHTML={{
// // // // //     __html: job.description.slice(0,150)
// // // // //   }}
 
// // // // // />
// // // // // <div>
// // // // //     <button>Apply Now</button>
// // // // //     <button>View Details</button>
// // // // // </div>
// // // // // </div>
// // // // //   )
// // // // // }

// // // // // export default JobCard

// // // // import React from 'react'
// // // // import { assets } from '../assets/assets'

// // // // function JobCard({ job }) {
// // // //   return (
// // // //     <div className='border p-4 shadow rounded'>
// // // //       <div className='flex justify-between items-center'>
// // // //         {/* Static image from assets */}
// // // //         <img 
// // // //           src={assets.company_icon}
// // // //           alt="Company"
// // // //           className="w-10 h-10 object-contain"
// // // //         />
// // // //       </div>

// // // //       {/* Job Title */}
// // // //       <h4 className="text-lg font-semibold mt-2">{job.title}</h4>

// // // //       {/* Location and Level */}
// // // //       <div className="text-sm text-gray-600 flex gap-4">
// // // //         <span>{job.location}</span>
// // // //         <span>{job.level}</span>
// // // //       </div>

// // // //       {/* Description (shortened) */}
// // // //       <p
// // // //         className="text-gray-700 my-2 text-sm"
// // // //         dangerouslySetInnerHTML={{
// // // //           __html: job.description.slice(0, 150) + "..."
// // // //         }}
// // // //       />

// // // //       {/* Action Buttons */}
// // // //       <div className="flex gap-2 mt-3">
// // // //         <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Now</button>
// // // //         <button className="border px-4 py-2 rounded">View Details</button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default JobCard


// // // import React from 'react'
// // // import { assets } from '../assets/assets'

// // // const JobCard = ({ job }) => {
// // //   return (
// // //     <div className='border p-6 shadow rounded'>
// // //   <div className='flex justify-between items-center'>
// // //     <img className='h-8' src={assets.company_icon} alt='' />
// // //   </div>
// // //   <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
// // //   <div className='flex items-center gap-3 mt-2 text-xs'>
// // //     <span className='bg-blue-50 border border-blue-200 px-4 py-1.5'>Location</span>
// // //     <span className='bg-red-50 border border-red-200 px-4 py-1.5'>Level</span>
// // //   </div>
// // //   <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{ __html: job.description }} />
// // //   <div>
// // //     <button>Apply now</button>
// // //     <button>Learn more</button>
// // //   </div>
// // // </div>
// // //   )
// // // }

// // // export default JobCard

// // //update the styling 
// // import React from 'react';
// // import { assets } from '../assets/assets';

// // const JobCard = ({ job }) => {
// //   if (!job) {
// //     return null;
// //   }

// //   return (
// //     <div className='border border-gray-200 p-4 shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow duration-200'>
// //       {/* Company Icon and Title */}
// //       <div className='flex items-center gap-3 mb-2'>
// //         <img 
// //           src={assets.company_icon}
// //           alt="Company"
// //           className='w-10 h-10 rounded-full'
// //         />
// //         <h4 className='font-medium text-lg text-gray-900'>{job.title || "Untitled Job"}</h4>
// //       </div>

// //       {/* Location and Level */}
// //       <div className='flex flex-col gap-2 mb-4'>
// //         <div className='flex items-center gap-2'>
// //           <span className='text-sm text-gray-500'>Location:</span>
// //           <span className='px-2 py-1 text-xs font-medium bg-blue-50 text-blue-800 rounded'>{job.location || "Unknown Location"}</span>
// //         </div>
// //         <div className='flex items-center gap-2'>
// //           <span className='text-sm text-gray-500'>Level:</span>
// //           <span className='px-2 py-1 text-xs font-medium bg-red-50 text-red-800 rounded'>{job.level || "N/A"}</span>
// //         </div>
// //       </div>

// //       {/* Description */}
// //       <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
// //         {job.description || "No description available"}
// //       </p>

// //       {/* Buttons */}
// //       <div className='flex gap-2'>
// //         <button className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium'>Apply Now</button>
// //         <button className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium'>Learn More</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobCard;

// //update again
// import React from 'react';
// import { assets } from '../assets/assets';

// const JobCard = ({ job }) => {
//   if (!job) {
//     return null;
//   }

//   return (
//     <div className='border border-gray-200 p-6 shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow duration-200'>
//       {/* Header: Icon, Title, Location & Level badges */}
//       <div className='flex justify-between items-start mb-4'>
//         <div className='flex items-center gap-3'>
//           <img 
//             src={assets.company_icon} 
//             alt="Company" 
//             className='w-8 h-8' 
//           />
//           <h4 className='font-medium text-lg text-gray-900'>{job.title || "Untitled Job"}</h4>
//         </div>
//         <div className='flex flex-col gap-1 text-right'>
//           <span className='px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full'>{job.location || "Unknown Location"}</span>
//           <span className='px-3 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full'>{job.level || "N/A"} Level</span>
//         </div>
//       </div>

//       {/* Description */}
//       <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
//         {job.description 
//           ? job.description.slice(0, 150) + (job.description.length > 150 ? "..." : "")
//           : "No description available"
//         }
//       </p>

//       {/* Buttons */}
//       <div className='flex gap-3'>
//         <button className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm'>Apply now</button>
//         <button className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm'>Learn more</button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;


import React from 'react';
import { assets } from '../assets/assets';

const JobCard = ({ job }) => {
  if (!job) {
    return null;
  }

  return (
    <div className='border border-gray-200 p-6 shadow-sm rounded-lg bg-white hover:shadow-md transition-shadow duration-200'>
      {/* Header: Icon, Title, Location & Level badges */}
      <div className='flex justify-between items-start mb-4'>
        <div className='flex items-center gap-3'>
          <img 
            src={assets.company_icon} 
            alt="Company" 
            className='w-8 h-8' 
          />
          <h4 className='font-semibold text-lg text-gray-900 leading-tight'>{job.title || "Untitled Job"}</h4>
        </div>
        <div className='flex flex-col gap-1 text-right'>
          <span className='px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full'>{job.location || "Unknown Location"}</span>
          <span className='px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full'>{job.level || "N/A"}</span>
        </div>
      </div>

      {/* Description */}
      <p className='text-gray-600 text-sm mb-6 leading-relaxed'>
        {job.description 
          ? job.description.slice(0, 150) + (job.description.length > 150 ? "..." : "")
          : "No description available"
        }
      </p>

      {/* Buttons */}
      <div className='flex gap-2'>
        <button className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm'>Apply now</button>
        <button className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm'>Learn more</button>
      </div>
    </div>
  );
};

export default JobCard;