


// // // // // import React from 'react'
// // // // // import { useContext, useEffect, useState } from 'react'
// // // // // import Loading from '../components/Loading'
// // // // // import { useParams } from 'react-router-dom'
// // // // // import { AppContext } from '../context/AppContext'
// // // // // import { assets } from '../assets/assets'
// // // // // import kconvert from 'k-convert'
// // // // // import moment from 'moment'
// // // // // import Navbar from '../components/Navbar'

// // // // // function ApplyJob() {
// // // // //   const { id } = useParams()
// // // // //   const [jobData, setJobData] = useState(null)
// // // // //   const { jobs } = useContext(AppContext)

// // // // //   const fetchJob = async () => {
// // // // //     const data = jobs.filter(job => job._id === id)
// // // // //     if (data.length !== 0) {
// // // // //       setJobData(data[0])
// // // // //       console.log(data[0])
// // // // //     }
// // // // //   }
// // // // //   useEffect(() => {
// // // // //     if (jobs.length > 0) {
// // // // //       fetchJob()
// // // // //     }
// // // // //   }, [id, jobs])

// // // // //   return jobData ? (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
// // // // //         <div className='bg-white rounded-lg w-full'>
// // // // //           <div className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg' style={{ backgroundColor: '#e6f0fa' }}>
// // // // //             <div className='flex items-center'>
// // // // //               <img src={assets.company_icon} alt="" className='w-12 h-12 bg-white rounded p-2 mr-4' />
// // // // //               <div>
// // // // //                 <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
// // // // //                 <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
// // // // //                   <span className='flex items-center gap-1'>
// // // // //                     <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
// // // // //                     {jobData.companyId.name}
// // // // //                   </span>
// // // // //                   <span className='flex items-center gap-1'>
// // // // //                     <img src={assets.location_icon} alt="" className='w-4 h-4' />
// // // // //                     {jobData.location}
// // // // //                   </span>
// // // // //                   <span className='flex items-center gap-1'>
// // // // //                     <img src={assets.person_icon} alt="" className='w-4 h-4' />
// // // // //                     {jobData.level}
// // // // //                   </span>
// // // // //                   <span className='flex items-center gap-1'>
// // // // //                     <img src={assets.money_icon} alt="" className='w-4 h-4' />
// // // // //                     CTC: {kconvert.convertTo(jobData.salary)}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className='flex flex-col items-end'>
// // // // //               <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>Apply Now</button>
// // // // //               <p className='text-gray-500 text-xs mt-2'>Posted {moment(jobData.date).fromNow()}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className='flex flex-col lg:flex-row justify-between items-start'>
// // // // //             <div className='w-full lg:w-2/3'>
// // // // //               <h2 className='font-bold text-2xl mb-4'>Job description</h2>
// // // // //               <div dangerouslySetInnerHTML={{ __html: jobData.description }} />
// // // // //             </div>
// // // // //             <button className='bg-blue-600 p-2.5 px-10 text-white rounded mt-10'>
// // // // //               Apply Now
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   ) : (
// // // // //     <div>
// // // // //       <Loading />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default ApplyJob


// // // // import React from 'react'
// // // // import { useContext, useEffect, useState } from 'react'
// // // // import Loading from '../components/Loading'
// // // // import { useParams } from 'react-router-dom'
// // // // import { AppContext } from '../context/AppContext'
// // // // import { assets } from '../assets/assets'
// // // // import kconvert from 'k-convert'
// // // // import moment from 'moment'
// // // // import Navbar from '../components/Navbar'

// // // // function ApplyJob() {
// // // //   const { id } = useParams()
// // // //   const [jobData, setJobData] = useState(null)
// // // //   const { jobs } = useContext(AppContext)

// // // //   const fetchJob = async () => {
// // // //     const data = jobs.filter(job => job._id === id)
// // // //     if (data.length !== 0) {
// // // //       setJobData(data[0])
// // // //       console.log(data[0])
// // // //     }
// // // //   }
// // // //   useEffect(() => {
// // // //     if (jobs.length > 0) {
// // // //       fetchJob()
// // // //     }
// // // //   }, [id, jobs])

// // // //   return jobData ? (
// // // //     <>
// // // //       <Navbar />

// // // //       <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
// // // //         <div className='bg-white rounded-lg w-full'>
// // // //           <div className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg' style={{ backgroundColor: '#e6f0fa' }}>
// // // //             <div className='flex items-center'>
// // // //               <img src={assets.company_icon} alt="" className='w-12 h-12 bg-white rounded p-2 mr-4' />
// // // //               <div>
// // // //                 <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
// // // //                 <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
// // // //                   <span className='flex items-center gap-1'>
// // // //                     <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
// // // //                     {jobData.companyId.name}
// // // //                   </span>
// // // //                   <span className='flex items-center gap-1'>
// // // //                     <img src={assets.location_icon} alt="" className='w-4 h-4' />
// // // //                     {jobData.location}
// // // //                   </span>
// // // //                   <span className='flex items-center gap-1'>
// // // //                     <img src={assets.person_icon} alt="" className='w-4 h-4' />
// // // //                     {jobData.level}
// // // //                   </span>
// // // //                   <span className='flex items-center gap-1'>
// // // //                     <img src={assets.money_icon} alt="" className='w-4 h-4' />
// // // //                     CTC: {kconvert.convertTo(jobData.salary)}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className='flex flex-col items-end'>
// // // //               <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>Apply Now</button>
// // // //               <p className='text-gray-500 text-xs mt-2'>Posted {moment(jobData.date).fromNow()}</p>
// // // //             </div>
// // // //           </div>
// // // //           <div className='p-6 bg-gradient-to-b from-white to-gray-100'>
// // // //             <div className='w-full lg:w-2/3'>
// // // //               <h2 className='font-bold text-2xl mb-4 text-gray-800'>Job description</h2>
// // // //               <p className='text-gray-600 mb-4'>{jobData.description}</p>
// // // //               <h3 className='font-semibold text-lg mb-2 text-gray-800'>Key Responsibilities</h3>
// // // //               <ul className='list-disc pl-5 text-gray-600 mb-4 space-y-2'>
// // // //                 <li>Design graphics for digital and print media, including social media, websites, and marketing materials.</li>
// // // //                 <li>Collaborate with cross-functional teams to understand project requirements and objectives.</li>
// // // //                 <li>Stay updated on design trends and tools to continually enhance skills and creativity.</li>
// // // //                 <li>Prepare and present design concepts to stakeholders for feedback and approval.</li>
// // // //                 <li>Ensure all designs align with brand guidelines and project specifications.</li>
// // // //               </ul>
// // // //               <h3 className='font-semibold text-lg mb-2 text-gray-800'>Skills Required</h3>
// // // //               <ul className='list-disc pl-5 text-gray-600 space-y-2'>
// // // //                 <li>Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
// // // //                 <li>Strong understanding of design principles and typography.</li>
// // // //                 <li>Ability to work on multiple projects and web browser now you can see this description is.</li>
// // // //                 <li>Excellent communication and collaboration skills.</li>
// // // //                 <li>A portfolio showcasing relevant work.</li>
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   ) : (
// // // //     <div>
// // // //       <Loading />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ApplyJob


// // // import React from 'react'
// // // import { useContext, useEffect, useState } from 'react'
// // // import Loading from '../components/Loading'
// // // import { useParams } from 'react-router-dom'
// // // import { AppContext } from '../context/AppContext'
// // // import { assets } from '../assets/assets'
// // // import kconvert from 'k-convert'
// // // import moment from 'moment'
// // // import Navbar from '../components/Navbar'

// // // function ApplyJob() {
// // //   const { id } = useParams()
// // //   const [jobData, setJobData] = useState(null)
// // //   const { jobs } = useContext(AppContext)

// // //   const fetchJob = async () => {
// // //     const data = jobs.filter(job => job._id === id)
// // //     if (data.length !== 0) {
// // //       setJobData(data[0])
// // //       console.log(data[0])
// // //     }
// // //   }
// // //   useEffect(() => {
// // //     if (jobs.length > 0) {
// // //       fetchJob()
// // //     }
// // //   }, [id, jobs])

// // //   return jobData ? (
// // //     <>
// // //       <Navbar />

// // //       <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
// // //         <div className='bg-white rounded-lg w-full'>
// // //           <div className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg' style={{ backgroundColor: '#e6f0fa' }}>
// // //             <div className='flex items-center'>
// // //               <img src={assets.company_icon} alt="" className='w-12 h-12 bg-white rounded p-2 mr-4' />
// // //               <div>
// // //                 <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
// // //                 <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
// // //                   <span className='flex items-center gap-1'>
// // //                     <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
// // //                     {jobData.companyId.name}
// // //                   </span>
// // //                   <span className='flex items-center gap-1'>
// // //                     <img src={assets.location_icon} alt="" className='w-4 h-4' />
// // //                     {jobData.location}
// // //                   </span>
// // //                   <span className='flex items-center gap-1'>
// // //                     <img src={assets.person_icon} alt="" className='w-4 h-4' />
// // //                     {jobData.level}
// // //                   </span>
// // //                   <span className='flex items-center gap-1'>
// // //                     <img src={assets.money_icon} alt="" className='w-4 h-4' />
// // //                     CTC: {kconvert.convertTo(jobData.salary)}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className='flex flex-col items-end'>
// // //               <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>Apply Now</button>
// // //               <p className='text-gray-500 text-xs mt-2'>Posted {moment(jobData.date).fromNow()}</p>
// // //             </div>
// // //           </div>
// // //           <div className='p-6 bg-gradient-to-b from-white to-gray-100'>
// // //             <div className='w-full lg:w-2/3'>
// // //               <h2 className='font-bold text-2xl mb-4 text-gray-800'>Job description</h2>
// // //               <div
// // //                 className="prose prose-gray max-w-none text-gray-600 mb-4"
// // //                 dangerouslySetInnerHTML={{ __html: jobData.description }}
// // //               />


// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   ) : (
// // //     <div>
// // //       <Loading />
// // //     </div>
// // //   )
// // // }

// // // export default ApplyJob

// // import React, { useContext, useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import moment from 'moment'
// // import kconvert from 'k-convert'

// // import Navbar from '../components/Navbar'
// // import Loading from '../components/Loading'
// // import { AppContext } from '../context/AppContext'
// // import { assets } from '../assets/assets'

// // function ApplyJob() {
// //   const { id } = useParams()
// //   const [jobData, setJobData] = useState(null)
// //   const { jobs } = useContext(AppContext)

// //   const fetchJob = async () => {
// //     const data = jobs.filter(job => job._id === id)
// //     if (data.length !== 0) {
// //       setJobData(data[0])
// //       console.log(data[0])
// //     }
// //   }

// //   useEffect(() => {
// //     if (jobs.length > 0) {
// //       fetchJob()
// //     }
// //   }, [id, jobs])

// //   return jobData ? (
// //     <>
// //       <Navbar />

// //       <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
// //         <div className='bg-white rounded-lg w-full'>
// //           {/* Job Header */}
// //           <div
// //             className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg'
// //             style={{ backgroundColor: '#e6f0fa' }}
// //           >
// //             <div className='flex items-center'>
// //               <img
// //                 src={assets.company_icon}
// //                 alt=""
// //                 className='w-12 h-12 bg-white rounded p-2 mr-4'
// //               />
// //               <div>
// //                 <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
// //                 <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
// //                   <span className='flex items-center gap-1'>
// //                     <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
// //                     {jobData.companyId.name}
// //                   </span>
// //                   <span className='flex items-center gap-1'>
// //                     <img src={assets.location_icon} alt="" className='w-4 h-4' />
// //                     {jobData.location}
// //                   </span>
// //                   <span className='flex items-center gap-1'>
// //                     <img src={assets.person_icon} alt="" className='w-4 h-4' />
// //                     {jobData.level}
// //                   </span>
// //                   <span className='flex items-center gap-1'>
// //                     <img src={assets.money_icon} alt="" className='w-4 h-4' />
// //                     CTC: {kconvert.convertTo(jobData.salary)}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className='flex flex-col items-end'>
// //               <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>
// //                 Apply Now
// //               </button>
// //               <p className='text-gray-500 text-xs mt-2'>
// //                 Posted {moment(jobData.date).fromNow()}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Job Description Section */}
// //           <div className='p-6 bg-gradient-to-b from-white to-gray-100'>
// //   <div className='w-full lg:w-2/3'>
// //     <h2 className='font-bold text-2xl mb-6 text-gray-800'>Job Description</h2>

// //     <div
// //       className="prose prose-gray max-w-none text-gray-700 leading-relaxed
// //                   [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3
// //                   [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
// //                   [&>p]:mb-4"
// //       dangerouslySetInnerHTML={{ __html: jobData.description }}
// //     />
// //   </div>
// // </div>


// //             </div>
// //           </div>


// //     </>
// //   ) : (
// //     <div>
// //       <Loading />
// //     </div>
// //   )
// // }

// // export default ApplyJob


// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import moment from 'moment'
// import kconvert from 'k-convert'

// import Navbar from '../components/Navbar'
// import Loading from '../components/Loading'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'
// import JobCard from '../components/JobCard'


// function ApplyJob() {
//   const { id } = useParams()
//   const [jobData, setJobData] = useState(null)
//   const { jobs } = useContext(AppContext)

//   const fetchJob = async () => {
//     const data = jobs.filter(job => job._id === id)
//     if (data.length !== 0) {
//       setJobData(data[0])
//       console.log(data[0])
//     }
//   }

//   useEffect(() => {
//     if (jobs.length > 0) {
//       fetchJob()
//     }
//   }, [id, jobs])

//   return jobData ? (
//     <>
//       <Navbar />

//       <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
//         <div className='bg-white rounded-lg w-full'>
//           {/* Job Header */}
//           <div
//             className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg'
//             style={{ backgroundColor: '#e6f0fa' }}
//           >
//             <div className='flex items-center'>
//               <img
//                 src={assets.company_icon}
//                 alt=""
//                 className='w-12 h-12 bg-white rounded p-2 mr-4'
//               />
//               <div>
//                 <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
//                 <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
//                   <span className='flex items-center gap-1'>
//                     <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
//                     {jobData.companyId.name}
//                   </span>
//                   <span className='flex items-center gap-1'>
//                     <img src={assets.location_icon} alt="" className='w-4 h-4' />
//                     {jobData.location}
//                   </span>
//                   <span className='flex items-center gap-1'>
//                     <img src={assets.person_icon} alt="" className='w-4 h-4' />
//                     {jobData.level}
//                   </span>
//                   <span className='flex items-center gap-1'>
//                     <img src={assets.money_icon} alt="" className='w-4 h-4' />
//                     CTC: {kconvert.convertTo(jobData.salary)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className='flex flex-col items-end'>
//               <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>
//                 Apply Now
//               </button>
//               <p className='text-gray-500 text-xs mt-2'>
//                 Posted {moment(jobData.date).fromNow()}
//               </p>
//             </div>
//           </div>

//           {/* Job Description Section */}
//           <div className='p-6 bg-gradient-to-b from-white to-gray-100'>
//             <div className='w-full lg:w-2/3'>
//               <h2 className='font-bold text-2xl mb-6 text-gray-800'>Job Description</h2>

//               <div
//                 className="prose prose-gray max-w-none text-gray-700 leading-relaxed
//                             [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3
//                             [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
//                             [&>p]:mb-4"
//                 dangerouslySetInnerHTML={{ __html: jobData.description }}
//               />

//               {/* Apply Now Button under Skills */}
//               <div className="mt-8">
//                 <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
//                   Apply Now
//                 </button>
//               </div>
//               <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
//                 <h2>More jobs from {jobData.companyId.name}</h2>
//                 {jobs.filter(job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id)
//                   .filter(job => true).slice(0, 4)
//                   .map((job, index) => <JobCard key={index} job={job} />)}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <div>
//       <Loading />
//     </div>
//   )
// }

// export default ApplyJob



import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import kconvert from 'k-convert'

import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

function ApplyJob() {
  const { id } = useParams()
  const [jobData, setJobData] = useState(null)
  const { jobs } = useContext(AppContext)

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0])
    }
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob()
    }
  }, [id, jobs])

  return jobData ? (
    <>
      <Navbar />

      <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white rounded-lg w-full'>
          {/* Job Header */}
          <div
            className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg'
            style={{ backgroundColor: '#e6f0fa' }}
          >
            <div className='flex items-center'>
              <img
                src={assets.company_icon}
                alt=""
                className='w-12 h-12 bg-white rounded p-2 mr-4'
              />
              <div>
                <h1 className='text-xl font-semibold text-gray-800'>{jobData.title}</h1>
                <div className='flex flex-wrap gap-2 mt-2 text-gray-600 text-sm'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
                    {jobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="" className='w-4 h-4' />
                    {jobData.location}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="" className='w-4 h-4' />
                    {jobData.level}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="" className='w-4 h-4' />
                    CTC: {kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>
                Apply Now
              </button>
              <p className='text-gray-500 text-xs mt-2'>
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          {/* Job Description and More Jobs Section */}
          <div className='p-6 bg-gradient-to-b from-white to-gray-100'>
            <div className='flex flex-col lg:flex-row justify-between gap-8'>
              {/* Job Description */}
              <div className='w-full lg:w-2/3'>
                <h2 className='font-bold text-2xl mb-6 text-gray-800'>Job Description</h2>

                <div
                  className="prose prose-gray max-w-none text-gray-700 leading-relaxed
                            [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-6 [&>h2]:mb-3
                            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
                            [&>p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: jobData.description }}
                />

                {/* Apply Now Button under Skills */}
                <div className='mt-8'>
                  <button className='bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition'>
                    Apply Now
                  </button>
                </div>
              </div>

              {/* More Jobs Section */}
              <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
                <h2 className='font-bold text-xl mb-4 text-gray-800'>More jobs from {jobData.companyId.name}</h2>
                {jobs
                  .filter(job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id)
                  .filter(job => true)
                  .slice(0, 4)
                  .map((job, index) => <JobCard key={index} job={job} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default ApplyJob
