


// import React from 'react';
// import { assets } from '../assets/assets';
// import { Navigate } from 'react-router-dom';

// const JobCard = ({ job }) => {
//     const navigate = useNavigate();
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
//           <h4 className='font-semibold text-lg text-gray-900 leading-tight'>{job.title || "Untitled Job"}</h4>
//         </div>
//         <div className='flex flex-col gap-1 text-right'>
//           <span className='px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full'>{job.location || "Unknown Location"}</span>
//           <span className='px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full'>{job.level || "N/A"}</span>
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
//       <div className='flex gap-2'>
//         <button  onClick = {()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm'>Apply now</button>
//         <button onClick = {()=> {navigate(`/apply-job/${job._id}`);  scrollTo(0,0)}} className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm'>Learn more</button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of Navigate

const JobCard = ({ job }) => {
  const navigate = useNavigate(); // This hook works now

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
        <button 
          onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0); }} 
          className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm'
        >
          Apply now
        </button>
        <button 
          onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0); }} 
          className='flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm'
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;