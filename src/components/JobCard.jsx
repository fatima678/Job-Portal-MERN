// // // import React from 'react'
// // // import { assets } from '../assets/assets'
// // // import { jobsData } from '../assets/assets'

// // // function JobCard({ job}) {
// // //   return (
// // //   <div className='border p-4 shadow rounded'>
// // //   <div className='flex justify-between items-center'>
// // //     <img src={assets.company_icon} alt="" />
// // //   </div>
// // //   <h4>{job.title}</h4>
// // //   <div>
// // //     <span>{job.location}</span>
// // //     <span>{job.level}</span>
// // //   </div>
// // //  <p 
// // //   dangerouslySetInnerHTML={{
// // //     __html: job.description.slice(0,150)
// // //   }}
 
// // // />
// // // <div>
// // //     <button>Apply Now</button>
// // //     <button>View Details</button>
// // // </div>
// // // </div>
// // //   )
// // // }

// // // export default JobCard

// // import React from 'react'
// // import { assets } from '../assets/assets'

// // function JobCard({ job }) {
// //   return (
// //     <div className='border p-4 shadow rounded'>
// //       <div className='flex justify-between items-center'>
// //         {/* Static image from assets */}
// //         <img 
// //           src={assets.company_icon}
// //           alt="Company"
// //           className="w-10 h-10 object-contain"
// //         />
// //       </div>

// //       {/* Job Title */}
// //       <h4 className="text-lg font-semibold mt-2">{job.title}</h4>

// //       {/* Location and Level */}
// //       <div className="text-sm text-gray-600 flex gap-4">
// //         <span>{job.location}</span>
// //         <span>{job.level}</span>
// //       </div>

// //       {/* Description (shortened) */}
// //       <p
// //         className="text-gray-700 my-2 text-sm"
// //         dangerouslySetInnerHTML={{
// //           __html: job.description.slice(0, 150) + "..."
// //         }}
// //       />

// //       {/* Action Buttons */}
// //       <div className="flex gap-2 mt-3">
// //         <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Now</button>
// //         <button className="border px-4 py-2 rounded">View Details</button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default JobCard


// import React from 'react'
// import { assets } from '../assets/assets'

// const JobCard = ({ job }) => {
//   return (
//     <div className='border p-6 shadow rounded'>
//   <div className='flex justify-between items-center'>
//     <img className='h-8' src={assets.company_icon} alt='' />
//   </div>
//   <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
//   <div className='flex items-center gap-3 mt-2 text-xs'>
//     <span className='bg-blue-50 border border-blue-200 px-4 py-1.5'>Location</span>
//     <span className='bg-red-50 border border-red-200 px-4 py-1.5'>Level</span>
//   </div>
//   <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{ __html: job.description }} />
//   <div>
//     <button>Apply now</button>
//     <button>Learn more</button>
//   </div>
// </div>
//   )
// }

// export default JobCard
