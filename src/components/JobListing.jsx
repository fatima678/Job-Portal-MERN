

// // import React from 'react';
// // import { AppContext } from '../context/AppContext';
// // import { useContext, useState } from 'react';
// // import { assets, JobCategories, JobLocations } from '../assets/assets';
// // import JobCard from './JobCard';

// // function JobListing() {
// //   const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
// //   const [showFilter, setShowFilter] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);

// //   // Calculate items per page (6 as per pagination logic)
// //   const itemsPerPage = 6;
// //   const totalPages = Math.ceil(jobs.length / itemsPerPage);
// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const endIndex = startIndex + itemsPerPage;
// //   const paginatedJobs = jobs.slice(startIndex, endIndex);

// //   return (
// //     <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
// //       <div className='w-full lg:w-1/4 px-4 bg-white'>
// //         {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
// //           <>
// //             <h3 className='font-medium text-lg mb-4'>Current Search</h3>
// //             <div className='mb-4 text-gray-400'>
// //               {searchFilter.title && (
// //                 <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
// //                   {searchFilter.title}
// //                   <img
// //                     onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
// //                     className='cursor-pointer'
// //                     src={assets.cross_icon}
// //                     alt=''
// //                   />
// //                 </span>
// //               )}
// //               {searchFilter.location && (
// //                 <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
// //                   {searchFilter.location}
// //                   <img
// //                     onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
// //                     className='cursor-pointer'
// //                     src={assets.cross_icon}
// //                     alt=''
// //                   />
// //                 </span>
// //               )}
// //             </div>
// //           </>
// //         )}

// //         <button
// //           onClick={(e) => setShowFilter((prev) => !prev)}
// //           className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
// //         >
// //           {showFilter ? "Close" : "Open"}
// //         </button>

// //         {/* Category Filter */}
// //         <div className={showFilter ? "" : "max-lg:hidden"}>
// //           <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
// //           <ul className='space-y-4 text-gray-600'>
// //             {JobCategories.map((category, index) => (
// //               <li className='flex gap-3 items-center' key={index}>
// //                 <input className='scale-125' type='checkbox' name='' id='' />
// //                 {category}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Location Filter */}
// //         <div className={showFilter ? "" : "max-lg:hidden"}>
// //           <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
// //           <ul className='space-y-4 text-gray-600'>
// //             {JobLocations.map((location, index) => (
// //               <li className='flex gap-3 items-center' key={index}>
// //                 <input className='scale-125' type='checkbox' name='' id='' />
// //                 {location}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Job Listings Section */}
// //       <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
// //         <h3 className='font-medium text-xl py-2' id='job-list'>
// //           Latest Jobs
// //         </h3>
// //         <p className='mb-8'>Get your desired job from top companies</p>
// //         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
// //           {jobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
// //   <JobCard key={index} job={job} />
// // ))}
// //         </div>

// //         {/* Pagination */}
// //         {jobs.length > 0 && (
// //           <div className='flex justify-center mt-8 gap-2'>
// //             <a href='#job-list'>
// //               <img onClick={()=> setCurrentPage(prev => Math.max(prev - 1, 1))}
// //                 src={assets.left_arrow}
// //                 alt=''
// //                 className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
               
// //               />
// //             </a>
// //             {Array.from({ length: totalPages }).map((_, index) => (
// //               <a href='#job-list' key={index}>
// //                 <button onClick={()=> setCurrentPage(index + 1)}
// //                   className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
// //                     currentPage === index + 1
// //                       ? 'bg-purple-600 text-white'
// //                       : 'bg-white text-gray-700 hover:bg-gray-100'
// //                   }`}
                 
// //                 >
// //                   {index + 1}
// //                 </button>
// //               </a>
// //             ))}
// //             <a href='#job-list'>
// //               <img onClick={()=> setCurrentPage(prev => Math.min(currentPage+1, Math.ceil(jobs.length /6)))}
// //                 src={assets.right_arrow_icon}
// //                 alt=''
// //                 className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
                
// //               />
// //             </a>
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }

// // export default JobListing;


// import React from 'react';
// import { AppContext } from '../context/AppContext';
// import { useContext, useState } from 'react';
// import { assets, JobCategories, JobLocations } from '../assets/assets';
// import JobCard from './JobCard';

// function JobListing() {
//   const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate pagination details
//   const itemsPerPage = 6;
//   const totalPages = Math.ceil(jobs.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedJobs = jobs.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
//       <div className='w-full lg:w-1/4 px-4 bg-white'>
//         {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
//           <>
//             <h3 className='font-medium text-lg mb-4'>Current Search</h3>
//             <div className='mb-4 text-gray-400'>
//               {searchFilter.title && (
//                 <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
//                   {searchFilter.title}
//                   <img
//                     onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
//                     className='cursor-pointer'
//                     src={assets.cross_icon}
//                     alt=''
//                   />
//                 </span>
//               )}
//               {searchFilter.location && (
//                 <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
//                   {searchFilter.location}
//                   <img
//                     onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
//                     className='cursor-pointer'
//                     src={assets.cross_icon}
//                     alt=''
//                   />
//                 </span>
//               )}
//             </div>
//           </>
//         )}

//         <button
//           onClick={(e) => setShowFilter((prev) => !prev)}
//           className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
//         >
//           {showFilter ? "Close" : "Open"}
//         </button>

//         {/* Category Filter */}
//         <div className={showFilter ? "" : "max-lg:hidden"}>
//           <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
//           <ul className='space-y-4 text-gray-600'>
//             {JobCategories.map((category, index) => (
//               <li className='flex gap-3 items-center' key={index}>
//                 <input className='scale-125' type='checkbox' name='' id='' />
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Location Filter */}
//         <div className={showFilter ? "" : "max-lg:hidden"}>
//           <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
//           <ul className='space-y-4 text-gray-600'>
//             {JobLocations.map((location, index) => (
//               <li className='flex gap-3 items-center' key={index}>
//                 <input className='scale-125' type='checkbox' name='' id='' />
//                 {location}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Job Listings Section */}
//       <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
//         <h3 className='font-medium text-xl py-2' id='job-list'>
//           Latest Jobs
//         </h3>
//         <p className='mb-8'>Get your desired job from top companies</p>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//           {paginatedJobs.map((job) => (
//             <JobCard key={job._id} job={job} />
//           ))}
//         </div>

//         {/* Pagination */}
//         {jobs.length > 0 && (
//           <div className='flex justify-center mt-8 gap-2'>
//             <button
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//               className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
//             >
//               <img src={assets.left_arrow} alt='Previous' />
//             </button>
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
//                   currentPage === index + 1
//                     ? 'bg-purple-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
//             >
//               <img src={assets.right_arrow_icon} alt='Next' />
//             </button>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default JobListing;


import React from 'react';
import { AppContext } from '../context/AppContext';
import { useContext, useState } from 'react';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

function JobListing() {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination details
  const itemsPerPage = 6;
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
      <div className='w-full lg:w-1/4 px-4 bg-white'>
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-400'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                  {searchFilter.title}
                  <img
                    onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt=''
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                  {searchFilter.location}
                  <img
                    onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt=''
                  />
                </span>
              )}
            </div>
          </>
        )}

        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
        >
          {showFilter ? "Close" : "Open"}
        </button>

        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
          <ul className='space-y-4 text-gray-600'>
            {JobCategories.map((category, index) => (
              <li className='flex gap-3 items-center' key={index}>
                <input className='scale-125' type='checkbox' name='' id='' />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
          <ul className='space-y-4 text-gray-600'>
            {JobLocations.map((location, index) => (
              <li className='flex gap-3 items-center' key={index}>
                <input className='scale-125' type='checkbox' name='' id='' />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings Section */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-xl py-2' id='job-list'>
          Latest Jobs
        </h3>
        <p className='mb-8'>Get your desired job from top companies</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {paginatedJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {jobs.length > 0 && (
          <div className='flex justify-center mt-8 gap-2 items-center'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                  currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              &gt;
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default JobListing;