// import React from 'react'
// import moment from 'moment';

// function ManageJobs() {
//   return (

//     <div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Job Title</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Applicants</th>
//               <th>Visible</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </div>
//   );
// };



// export default ManageJobs

import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ManageJobs = () => {
    const navigate = useNavigate();
  const manageJobsData = [
    { title: 'Full Stack Developer', date: '2025-09-23', location: 'Bangalore', applicants: 5 },
    { title: 'Data Scientist', date: '2025-09-22', location: 'San Francisco', applicants: 3 },
    { title: 'UI/UX Designer', date: '2025-09-21', location: 'Dubai', applicants: 2 },
    // Add more data as needed
  ];

  return (
    <div className="p-6">
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">#</th>
              <th className="border p-2 text-left">Job Title</th>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Applicants</th>
              <th className="border p-2 text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{job.title}</td>
                <td className="border p-2">{moment(job.date).format('ll')}</td>
                <td className="border p-2">{job.location}</td>
                <td className="border p-2">{job.applicants}</td>
                <td className="border p-2">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white py-2 px-4 rounded'>Add new Job</button>
      </div>
    </div>
  );
};

export default ManageJobs;