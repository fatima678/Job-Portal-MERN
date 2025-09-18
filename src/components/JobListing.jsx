
// // // import React from 'react';
// // // import { AppContext } from '../context/AppContext';
// // // import { useContext, useState } from 'react';
// // // import { assets, JobCategories, JobLocations } from '../assets/assets';
// // // import JobCard from './JobCard';

// // // function JobListing() {
// // //     const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
// // //     const [showFilter, setShowFilter] = useState(false);
// // //     const [currentPage, setCurrentPage] = useState(1);
// // //     const [selectedCategories, setSelectedCategories] = useState([]);
// // //     const [selectedLocations, setSelectedLocations] = useState([]);
// // //     const [filteredJobs, setFilteredJobs] = useState(jobs);

// // //     // Calculate pagination details
// // //     const itemsPerPage = 6;
// // //     const totalPages = Math.ceil(jobs.length / itemsPerPage);
// // //     const startIndex = (currentPage - 1) * itemsPerPage;
// // //     const endIndex = startIndex + itemsPerPage;
// // //     const paginatedJobs = jobs.slice(startIndex, endIndex);

// // //     const handlePageChange = (page) => {
// // //         setCurrentPage(page);
// // //     };

// // //     const handlePreviousPage = () => {
// // //         if (currentPage > 1) setCurrentPage(currentPage - 1);
// // //     };

// // //     const handleNextPage = () => {
// // //         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
// // //     };

// // //     const handleCategoryChange = (category) => {
// // //         setSelectedCategories(
// // //             prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
// // //         );
// // //     };

// // //     const handleLocationChange = (location) => {
// // //         setSelectedLocations(
// // //             prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
// // //         );

// // //         useEffect(() => {
// // //             const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
// // //             const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);
// // //             const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
// // //             const matchesSearchLocation = job => !searchFilter.location || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
// // //             const newFilteredJobs = jobs.slice().reverse().filter(
// // //                 job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job)
// // //             );

// // //             const filtered = jobs.filter(job =>
// // //                 matchesCategory(job) &&
// // //                 matchesLocation(job) &&
// // //                 matchesTitle(job) &&
// // //                 matchesSearchLocation(job)
// // //             );
// // //             setFilteredJobs(filtered);
// // //         }, [selectedCategories, selectedLocations, searchFilter]);
// // //     };

// // //     return (
// // //         <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
// // //             <div className='w-full lg:w-1/4 px-4 bg-white'>
// // //                 {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
// // //                     <>
// // //                         <h3 className='font-medium text-lg mb-4'>Current Search</h3>
// // //                         <div className='mb-4 text-gray-400'>
// // //                             {searchFilter.title && (
// // //                                 <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
// // //                                     {searchFilter.title}
// // //                                     <img
// // //                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
// // //                                         className='cursor-pointer'
// // //                                         src={assets.cross_icon}
// // //                                         alt=''
// // //                                     />
// // //                                 </span>
// // //                             )}
// // //                             {searchFilter.location && (
// // //                                 <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
// // //                                     {searchFilter.location}
// // //                                     <img
// // //                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
// // //                                         className='cursor-pointer'
// // //                                         src={assets.cross_icon}
// // //                                         alt=''
// // //                                     />
// // //                                 </span>
// // //                             )}
// // //                         </div>
// // //                     </>
// // //                 )}

// // //                 <button
// // //                     onClick={(e) => setShowFilter((prev) => !prev)}
// // //                     className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
// // //                 >
// // //                     {showFilter ? "Close" : "Open"}
// // //                 </button>

// // //                 {/* Category Filter */}
// // //                 <div className={showFilter ? "" : "max-lg:hidden"}>
// // //                     <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
// // //                     <ul className='space-y-4 text-gray-600'>
// // //                         {JobCategories.map((category, index) => (
// // //                             <li className='flex gap-3 items-center' key={index}>
// // //                                 <input onChange={() => handleCategoryChange(category)}
// // //                                     checked={selectedCategories.includes(category)}
// // //                                     className='scale-125' type='checkbox' name='' id='' />
// // //                                 {category}
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>

// // //                 {/* Location Filter */}
// // //                 <div className={showFilter ? "" : "max-lg:hidden"}>
// // //                     <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
// // //                     <ul className='space-y-4 text-gray-600'>
// // //                         {JobLocations.map((location, index) => (
// // //                             <li className='flex gap-3 items-center' key={index}>
// // //                                 <input className='scale-125' type='checkbox'
// // //                                     onChange={() => handleLocationChange(location)}
// // //                                     checked={selectedLocations.includes(location)} />
// // //                                 {location}
// // //                             </li>
// // //                         ))}
// // //                     </ul>
// // //                 </div>
// // //             </div>

// // //             {/* Job Listings Section */}
// // //             <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
// // //                 <h3 className='font-medium text-xl py-2' id='job-list'>
// // //                     Latest Jobs
// // //                 </h3>
// // //                 <p className='mb-8'>Get your desired job from top companies</p>
// // //                 <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
// // //                     {paginatedJobs.map((job) => (
// // //                         <JobCard key={job._id} job={job} />
// // //                     ))}
// // //                 </div>

// // //                 {/* Pagination */}
// // //                 {filteredJobs.length > 0 && (
// // //                     <div className='flex justify-center mt-8 gap-2 items-center'>
// // //                         <button
// // //                             onClick={handlePreviousPage}
// // //                             disabled={currentPage === 1}
// // //                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                         >
// // //                             &lt;
// // //                         </button>
// // //                         {Array.from({ length: totalPages }).map((_, index) => (
// // //                             <button
// // //                                 key={index}
// // //                                 onClick={() => handlePageChange(index + 1)}
// // //                                 className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1
// // //                                     ? 'bg-purple-600 text-white'
// // //                                     : 'bg-white text-gray-700 hover:bg-gray-100'
// // //                                     }`}
// // //                             >
// // //                                 {index + 1}
// // //                             </button>
// // //                         ))}
// // //                         <button
// // //                             onClick={handleNextPage}
// // //                             disabled={currentPage === totalPages}
// // //                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
// // //                                 }`}
// // //                         >
// // //                             &gt;
// // //                         </button>
// // //                     </div>
// // //                 )}
// // //             </section>
// // //         </div>
// // //     );
// // // }

// // // export default JobListing;


// // //updated code please
// // import React, { useContext, useState, useEffect } from 'react';
// // import { AppContext } from '../context/AppContext';
// // import { assets, JobCategories, JobLocations } from '../assets/assets';
// // import JobCard from './JobCard';

// // function JobListing() {
// //     const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
// //     const [showFilter, setShowFilter] = useState(false);
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [selectedCategories, setSelectedCategories] = useState([]);
// //     const [selectedLocations, setSelectedLocations] = useState([]);
// //     const [filteredJobs, setFilteredJobs] = useState([]);

// //     // Calculate pagination details
// //     const itemsPerPage = 6;
// //     const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
// //     const startIndex = (currentPage - 1) * itemsPerPage;
// //     const endIndex = startIndex + itemsPerPage;
// //     const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

// //     const handlePageChange = (page) => {
// //         setCurrentPage(page);
// //     };

// //     const handlePreviousPage = () => {
// //         if (currentPage > 1) setCurrentPage(currentPage - 1);
// //     };

// //     const handleNextPage = () => {
// //         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
// //     };

// //     const handleCategoryChange = (category) => {
// //         setSelectedCategories(
// //             prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
// //         );
// //     };

// //     const handleLocationChange = (location) => {
// //         setSelectedLocations(
// //             prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
// //         );
// //     };

// //     useEffect(() => {
// //         const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
// //         const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);
// //         const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
// //         const matchesSearchLocation = job => !searchFilter.location || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
// //         const newFilteredJobs = jobs.slice().reverse().filter(
// //             job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job)
// //         );

// //         const filtered = jobs.filter(job =>
// //             matchesCategory(job) &&
// //             matchesLocation(job) &&
// //             matchesTitle(job) &&
// //             matchesSearchLocation(job)
// //         );
// //         setFilteredJobs(filtered);
// //         setCurrentPage(1); // Reset to first page when filters change
// //     }, [selectedCategories, selectedLocations, searchFilter]);

// //     return (
// //         <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
// //             <div className='w-full lg:w-1/4 px-4 bg-white'>
// //                 {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
// //                     <>
// //                         <h3 className='font-medium text-lg mb-4'>Current Search</h3>
// //                         <div className='mb-4 text-gray-400'>
// //                             {searchFilter.title && (
// //                                 <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
// //                                     {searchFilter.title}
// //                                     <img
// //                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
// //                                         className='cursor-pointer'
// //                                         src={assets.cross_icon}
// //                                         alt=''
// //                                     />
// //                                 </span>
// //                             )}
// //                             {searchFilter.location && (
// //                                 <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
// //                                     {searchFilter.location}
// //                                     <img
// //                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
// //                                         className='cursor-pointer'
// //                                         src={assets.cross_icon}
// //                                         alt=''
// //                                     />
// //                                 </span>
// //                             )}
// //                         </div>
// //                     </>
// //                 )}

// //                 <button
// //                     onClick={(e) => setShowFilter((prev) => !prev)}
// //                     className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
// //                 >
// //                     {showFilter ? "Close" : "Open"}
// //                 </button>

// //                 {/* Category Filter */}
// //                 <div className={showFilter ? "" : "max-lg:hidden"}>
// //                     <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
// //                     <ul className='space-y-4 text-gray-600'>
// //                         {JobCategories.map((category, index) => (
// //                             <li className='flex gap-3 items-center' key={index}>
// //                                 <input onChange={() => handleCategoryChange(category)}
// //                                     checked={selectedCategories.includes(category)}
// //                                     className='scale-125' type='checkbox' name='' id='' />
// //                                 {category}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>

// //                 {/* Location Filter */}
// //                 <div className={showFilter ? "" : "max-lg:hidden"}>
// //                     <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
// //                     <ul className='space-y-4 text-gray-600'>
// //                         {JobLocations.map((location, index) => (
// //                             <li className='flex gap-3 items-center' key={index}>
// //                                 <input className='scale-125' type='checkbox'
// //                                     onChange={() => handleLocationChange(location)}
// //                                     checked={selectedLocations.includes(location)} />
// //                                 {location}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </div>

// //             {/* Job Listings Section */}
// //             <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
// //                 <h3 className='font-medium text-xl py-2' id='job-list'>
// //                     Latest Jobs
// //                 </h3>
// //                 <p className='mb-8'>Get your desired job from top companies</p>
// //                 <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
// //                     {filteredJobs.length > 0 ? paginatedJobs.map((job) => (
// //                         <JobCard key={job._id} job={job} />
// //                     )) : <p>No jobs match your filters.</p>}
// //                 </div>

// //                 {/* Pagination */}
// //                 {filteredJobs.length > 0 && (
// //                     <div className='flex justify-center mt-8 gap-2 items-center'>
// //                         <button
// //                             onClick={handlePreviousPage}
// //                             disabled={currentPage === 1}
// //                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
// //                                 }`}
// //                         >
// //                             &lt;
// //                         </button>
// //                         {Array.from({ length: totalPages }).map((_, index) => (
// //                             <button
// //                                 key={index}
// //                                 onClick={() => handlePageChange(index + 1)}
// //                                 className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1
// //                                     ? 'bg-purple-600 text-white'
// //                                     : 'bg-white text-gray-700 hover:bg-gray-100'
// //                                     }`}
// //                             >
// //                                 {index + 1}
// //                             </button>
// //                         ))}
// //                         <button
// //                             onClick={handleNextPage}
// //                             disabled={currentPage === totalPages}
// //                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
// //                                 }`}
// //                         >
// //                             &gt;
// //                         </button>
// //                     </div>
// //                 )}
// //             </section>
// //         </div>
// //     );
// // }

// // export default JobListing;

// import React, { useContext, useState, useEffect } from 'react';
// import { AppContext } from '../context/AppContext';
// import { assets, JobCategories, JobLocations } from '../assets/assets';
// import JobCard from './JobCard';

// function JobListing() {
//     const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
//     const [showFilter, setShowFilter] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [selectedLocations, setSelectedLocations] = useState([]);
//     const [filteredJobs, setFilteredJobs] = useState([]);

//     // Calculate pagination details
//     const itemsPerPage = 6;
//     const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) setCurrentPage(currentPage - 1);
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//     };

//     const handleCategoryChange = (category) => {
//         setSelectedCategories(
//             prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
//         );
//     };

//     const handleLocationChange = (location) => {
//         setSelectedLocations(
//             prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
//         );
//     };

//     useEffect(() => {
//         const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category);
//         const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location);
//         const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
//         const matchesSearchLocation = job => !searchFilter.location || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
//         const newFilteredJobs = jobs.slice().reverse().filter(
//             job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job)
//         );

//         const filtered = jobs.filter(job =>
//             matchesCategory(job) &&
//             matchesLocation(job) &&
//             matchesTitle(job) &&
//             matchesSearchLocation(job)
//         );
//         setFilteredJobs(filtered);
//         setCurrentPage(1); // Reset to first page when filters change
//     }, [selectedCategories, selectedLocations, searchFilter]);

//     return (
//         <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
//             <div className='w-full lg:w-1/4 px-4 bg-white'>
//                 {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
//                     <>
//                         <h3 className='font-medium text-lg mb-4'>Current Search</h3>
//                         <div className='mb-4 text-gray-400'>
//                             {searchFilter.title && (
//                                 <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
//                                     {searchFilter.title}
//                                     <img
//                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, title: "" }))}
//                                         className='cursor-pointer'
//                                         src={assets.cross_icon}
//                                         alt=''
//                                     />
//                                 </span>
//                             )}
//                             {searchFilter.location && (
//                                 <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
//                                     {searchFilter.location}
//                                     <img
//                                         onClick={(e) => setSearchFilter((prev) => ({ ...prev, location: "" }))}
//                                         className='cursor-pointer'
//                                         src={assets.cross_icon}
//                                         alt=''
//                                     />
//                                 </span>
//                             )}
//                         </div>
//                     </>
//                 )}

//                 <button
//                     onClick={(e) => setShowFilter((prev) => !prev)}
//                     className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
//                 >
//                     {showFilter ? "Close" : "Open"}
//                 </button>

//                 {/* Category Filter */}
//                 <div className={showFilter ? "" : "max-lg:hidden"}>
//                     <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
//                     <ul className='space-y-4 text-gray-600'>
//                         {JobCategories.map((category, index) => (
//                             <li className='flex gap-3 items-center' key={index}>
//                                 <input onChange={() => handleCategoryChange(category)}
//                                     checked={selectedCategories.includes(category)}
//                                     className='scale-125' type='checkbox' name='' id='' />
//                                 {category}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Location Filter */}
//                 <div className={showFilter ? "" : "max-lg:hidden"}>
//                     <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
//                     <ul className='space-y-4 text-gray-600'>
//                         {JobLocations.map((location, index) => (
//                             <li className='flex gap-3 items-center' key={index}>
//                                 <input className='scale-125' type='checkbox'
//                                     onChange={() => handleLocationChange(location)}
//                                     checked={selectedLocations.includes(location)} />
//                                 {location}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Job Listings Section */}
//             <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
//                 <h3 className='font-medium text-xl py-2' id='job-list'>
//                     Latest Jobs
//                 </h3>
//                 <p className='mb-8'>Get your desired job from top companies</p>
//                 <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//                     {filteredJobs.length > 0 ? paginatedJobs.map((job) => (
//                         <JobCard key={job._id} job={job} />
//                     )) : <p>No jobs match your filters.</p>}
//                 </div>

//                 {/* Pagination */}
//                 {filteredJobs.length > 0 && (
//                     <div className='flex justify-center mt-8 gap-2 items-center'>
//                         <button
//                             onClick={handlePreviousPage}
//                             disabled={currentPage === 1}
//                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
//                                 }`}
//                         >
//                             &lt;
//                         </button>
//                         {Array.from({ length: totalPages }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handlePageChange(index + 1)}
//                                 className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1
//                                     ? 'bg-purple-600 text-white'
//                                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                                     }`}
//                             >
//                                 {index + 1}
//                             </button>
//                         ))}
//                         <button
//                             onClick={handleNextPage}
//                             disabled={currentPage === totalPages}
//                             className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
//                                 }`}
//                         >
//                             &gt;
//                         </button>
//                     </div>
//                 )}
//             </section>
//         </div>
//     );
// }

// export default JobListing;


import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

function JobListing() {
    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Pagination settings
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const handlePageChange = (page) => setCurrentPage(page);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handleLocationChange = (location) => {
        setSelectedLocations((prev) =>
            prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
        );
    };

    useEffect(() => {
        const matchesCategory = (job) =>
            selectedCategories.length === 0 || selectedCategories.includes(job.category);

        const matchesLocation = (job) =>
            selectedLocations.length === 0 || selectedLocations.includes(job.location);

        const matchesTitle = (job) =>
            !searchFilter.title || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

        const matchesSearchLocation = (job) =>
            !searchFilter.location || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

        let filtered = jobs;

        // ✅ Sirf tab filter karo jab kuch apply ho
        if (
            selectedCategories.length > 0 ||
            selectedLocations.length > 0 ||
            searchFilter.title ||
            searchFilter.location
        ) {
            filtered = jobs.filter(
                (job) =>
                    matchesCategory(job) &&
                    matchesLocation(job) &&
                    matchesTitle(job) &&
                    matchesSearchLocation(job)
            );
        }

        setFilteredJobs(filtered.slice().reverse());
        setCurrentPage(1);
    }, [selectedCategories, selectedLocations, searchFilter, jobs]);

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-9 py-8'>
            {/* Sidebar Filters */}
            <div className='w-full lg:w-1/4 px-4 bg-white'>
                {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-400'>
                            {searchFilter.title && (
                                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                                    {searchFilter.title}
                                    <img
                                        onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
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
                                        onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
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
                    onClick={() => setShowFilter((prev) => !prev)}
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
                                <input
                                    onChange={() => handleCategoryChange(category)}
                                    checked={selectedCategories.includes(category)}
                                    className='scale-125'
                                    type='checkbox'
                                />
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
                                <input
                                    className='scale-125'
                                    type='checkbox'
                                    onChange={() => handleLocationChange(location)}
                                    checked={selectedLocations.includes(location)}
                                />
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
                    {filteredJobs.length > 0 ? (
                        paginatedJobs.map((job) => <JobCard key={job._id} job={job} />)
                    ) : (
                        <p>No jobs match your filters.</p>
                    )}
                </div>

                {/* Pagination */}
                {filteredJobs.length > 0 && (
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
