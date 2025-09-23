// import React from 'react';
// import { viewApplicationsPageData } from '../assets/assets';

// const ViewApplications = () => {
//   return (
//     <div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>User name</th>
//               <th>Job Title</th>
//               <th>Location</th>
//               <th>Resume</th>
//             </tr>
//           </thead>
//           <tbody>
//             {viewApplicationsPageData.map((applicant, index) => (
//               <tr key={index}>
//                 <td className="border p-2">{index + 1}</td>
//                 <td className="border p-2">
//                   <img src={applicant.imgSrc} alt="" />
//                   <span>{applicant.name}</span>
//                 </td>
//                 <td className="border p-2">{applicant.jobTitle}</td>
//                 <td className="border p-2">{applicant.location}</td>
//                 <td className="border p-2">
//                   <a href={applicant.resume} target="_blank" rel="noopener noreferrer">
//                     <img src="assets/resume_download_icon.png" alt="" />
//                   </a>
//                 </td>
//                 <td>
//                     <div>
//                         <button>...</button>
//                     </div>
//                     <div>
//                         <button>Accept </button>
//                          <button>Reject</button>
//                     </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ViewApplications;




import React, { useState } from 'react';
import { viewApplicationsPageData } from '../assets/assets';

const ViewApplications = () => {
  const [showMenu, setShowMenu] = useState(null); // State to toggle action menu

  return (
    <div className="p-6">
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">#</th>
              <th className="border p-2 text-left">User name</th>
              <th className="border p-2 text-left">Job Title</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Resume</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 flex items-center">
                  <img src={applicant.imgSrc} alt="" className="w-10 h-10 rounded-full mr-2" />
                  <span>{applicant.name}</span>
                </td>
                <td className="border p-2">{applicant.jobTitle}</td>
                <td className="border p-2">{applicant.location}</td>
                <td className="border p-2">
                  <a
                    href={applicant.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    Resume
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l4-4m-4 4H4"
                      />
                    </svg>
                  </a>
                </td>
                <td className="border p-2 relative">
                  <button
                    onClick={() => setShowMenu(showMenu === index ? null : index)}
                    className="focus:outline-none"
                  >
                    ...
                  </button>
                  {showMenu === index && (
                    <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg">
                      <button className="block w-full text-left px-4 py-2 hover:bg-green-100 bg-green-500 text-white">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-red-100 bg-red-500 text-white">
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;