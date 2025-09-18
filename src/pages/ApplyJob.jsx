// // import React from 'react'
// // import { useContext, useEffect, useState } from 'react'
// // import Loading from '../components/Loading'
// // import { useParams } from 'react-router-dom'
// // import { AppContext } from '../context/AppContext'
// // import { assets } from '../assets/assets'
// // import kconvert from 'k-convert'
// // import moment from 'moment'
// // import Navbar from '../components/Navbar'

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
// //         <div className='bg-white text-black rounded-lg w-full'>
// //           <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 b-sky-50 border border-sky-400 rounded-xl'>
// //             <div>
// //               <img src={assets.company_icon} alt="" />
// //             </div>
// //             <div>
// //               <h1>{jobData.title}</h1>
// //               <div>
// //                 <span>
// //                   <img src={assets.suitcase_icon} alt="" />
// //                   {jobData.companyId.name}
// //                 </span>
// //                 <span>
// //                   <img src={assets.location_icon} alt="" />
// //                   {jobData.location}
// //                 </span>
// //                 <span>
// //                   <img src={assets.person_icon} alt="" />
// //                   {jobData.level}
// //                 </span>
// //                  <span>
// //                   <img src={assets.money_icon} alt="" />
// //                    CTC: {kconvert.convertTo(jobData.salary)}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <button>Apply Now</button>
// //             <p>Posted {moment(jobData.date).fromNow()}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   ) : (
// //     <div>
// //       <Loading />

// //     </div>
// //   )
// // }

// // export default ApplyJob

// import React from 'react'
// import { useContext, useEffect, useState } from 'react'
// import Loading from '../components/Loading'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'
// import kconvert from 'k-convert'
// import moment from 'moment'
// import Navbar from '../components/Navbar'

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
//         <div className='bg-white text-black rounded-lg w-full'>
//           <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl' style={{ backgroundColor: '#e6f0fa' }}>
//             <div className='flex flex-col md:flex-row items-center'>
//               <img className='  h-24 bg-white rounded-lg p-4 mr-4 mr-4 max-md:mb-4' src={assets.company_icon} alt=""  />
//             </div>
//             <div className=' text-center md:text-left text-neutral-700'>
//               <h1 className='text-2xl font-bold'>{jobData.title}</h1>
//               <div className='mt-4 space-y-2'>
//                 <span className='flex items-center gap-2'>
//                   <img src={assets.suitcase_icon} alt="" className='w-6 h-6' />
//                   {jobData.companyId.name}
//                 </span>
//                 <span className='flex items-center gap-2'>
//                   <img src={assets.location_icon} alt="" className='w-6 h-6' />
//                   {jobData.location}
//                 </span>
//                 <span className='flex items-center gap-2'>
//                   <img src={assets.person_icon} alt="" className='w-6 h-6' />
//                   {jobData.level}
//                 </span>
//                 <span className='flex items-center gap-2'>
//                   <img src={assets.money_icon} alt="" className='w-6 h-6' />
//                   CTC: {kconvert.convertTo(jobData.salary)}
//                 </span>
//               </div>
//             </div>
//             <div className='flex flex-col items-end'>
//               <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Apply Now</button>
//               <p className='text-gray-600 mt-2'>Posted {moment(jobData.date).fromNow()}</p>
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


import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import Navbar from '../components/Navbar'

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
          <div className='flex items-center justify-between p-6 bg-sky-100 border border-sky-300 rounded-lg' style={{ backgroundColor: '#e6f0fa' }}>
            <div className='flex items-center'>
              <img src={assets.company_icon} alt="" className='w-12 h-12 bg-white rounded p-2 mr-4' />
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
              <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>Apply Now</button>
              <p className='text-gray-500 text-xs mt-2'>Posted {moment(jobData.date).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default ApplyJob