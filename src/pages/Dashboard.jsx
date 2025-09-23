


// // // // import React from 'react';
// // // // import { Link, Outlet } from 'react-router-dom';
// // // // import { assets } from '../assets/assets';

// // // // function Dashboard() {
// // // //   return (
// // // //     <div className='min-h-screen flex'>
// // // //       {/* Sidebar */}
// // // //       <div className='w-64 bg-gray-100 p-5 shadow'>
// // // //         <h2 className='text-xl font-bold mb-5'>Insiderjobs</h2>
// // // //         <nav>
// // // //           <ul className='space-y-2'>
// // // //             <li>
// // // //               <Link to="/dashboard/add-job" className='block py-2 px-4 hover:bg-gray-200 rounded'>Add Job</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/dashboard/manage-jobs" className='block py-2 px-4 hover:bg-gray-200 rounded'>Manage Jobs</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/dashboard/view-applications" className='block py-2 px-4 hover:bg-gray-200 rounded'>View Applications</Link>
// // // //             </li>
// // // //           </ul>
// // // //         </nav>
// // // //       </div>

// // // //       {/* Main Content Area */}
// // // //       <div className='flex-1 p-5'>
// // // //         {/* Navbar for Recruiter Panel */}
// // // //         <div className='shadow py-4 mb-5'>
// // // //           <div className='px-5 flex justify-between items-center'>
// // // //             <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
// // // //             <div className='flex items-center gap-3'>
// // // //               <p className='max-sm:hidden'>Welcome, GreatStack</p>
// // // //               <div className='relative group'>
// // // //                 <img className='w-8 border rounded-full' src={assets.company_icon} alt="Profile" />
// // // //                 <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
// // // //                   <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
// // // //                     <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Content will be rendered here based on the route */}
// // // //         <Outlet />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Dashboard;


// // // import React from 'react';
// // // import { Link, Outlet } from 'react-router-dom';
// // // import { assets } from '../assets/assets';

// // // function Dashboard() {
// // //   return (
// // //     <div className='min-h-screen flex'>
// // //       {/* Sidebar */}
// // //       <div className='w-64 bg-gray-100 p-5 shadow'>
// // //         <nav>
// // //           <ul className='space-y-2'>
// // //             <li>
// // //               <Link
// // //                 to="/dashboard/add-job"
// // //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// // //               >
// // //                 Add Job
// // //               </Link>
// // //             </li>
// // //             <li>
// // //               <Link
// // //                 to="/dashboard/manage-jobs"
// // //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// // //               >
// // //                 Manage Jobs
// // //               </Link>
// // //             </li>
// // //             <li>
// // //               <Link
// // //                 to="/dashboard/view-applications"
// // //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// // //               >
// // //                 View Applications
// // //               </Link>
// // //             </li>
// // //           </ul>
// // //         </nav>
// // //       </div>

// // //       {/* Main Content Area */}
// // //       <div className='flex-1'>
// // //         {/* Navbar for Recruiter Panel */}
// // //         <div className='w-full shadow py-4'>
// // //           <div className='px-5 flex justify-between items-center'>
// // //             <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
// // //             <div className='flex items-center gap-3'>
// // //               <p className='max-sm:hidden'>Welcome, GreatStack</p>
// // //               <div className='relative group'>
// // //                 <img className='w-8 border rounded-full' src={assets.company_icon} alt="Profile" />
// // //                 <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
// // //                   <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
// // //                     <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Content will be rendered here based on the route */}
// // //         <div className='p-5'>
// // //           <Outlet />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;



// // import React from 'react';
// // import { Link, Outlet } from 'react-router-dom';
// // import { assets } from '../assets/assets';

// // function Dashboard() {
// //   return (
// //     <div className='min-h-screen flex'>
// //       {/* Sidebar */}
// //       <div className='w-64 bg-gray-100 p-5 shadow'>
// //         <nav>
// //           <ul className='space-y-2'>
// //             <li>
// //               <Link
// //                 to="/dashboard/add-job"
// //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// //               >
// //                 Add Job
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/dashboard/manage-jobs"
// //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// //               >
// //                 Manage Jobs
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/dashboard/view-applications"
// //                 className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
// //               >
// //                 View Applications
// //               </Link>
// //             </li>
// //           </ul>
// //         </nav>
// //       </div>

// //       {/* Main Content Area */}
// //       <div className='flex-1'>
// //         {/* Navbar for Recruiter Panel */}
// //         <div className='w-full shadow py-4'>
// //           <div className='px-5 flex justify-between items-center'>
// //             <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
// //             <div className='flex items-center gap-3'>
// //               <p className='max-sm:hidden'>Welcome, GreatStack</p>
// //               <div className='relative group'>
// //                 <img className='w-8 border rounded-full' src={assets.company_icon} alt="Profile" />
// //                 <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
// //                   <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
// //                     <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Content will be rendered here below the navbar */}
// //         <div className='p-5'>
// //           <Outlet />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { assets } from '../assets/assets';

// function Dashboard() {
//   return (
//     <div className='min-h-screen'>
//       {/* Full-width Navbar */}
//       <div className='w-full shadow py-4'>
//         <div className='px-5 flex justify-between items-center'>
//           <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
//           <div className='flex items-center gap-3'>
//             <p className='max-sm:hidden'>Welcome, GreatStack</p>
//             <div className='relative group'>
//               <img className='w-8 border rounded-full' src={assets.company_icon} alt="Profile" />
//               <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
//                 <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
//                   <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar and Main Content */}
//       <div className='flex'>
//         {/* Sidebar */}
//         <div className='w-64 bg-gray-100 p-5 shadow'>
//           <nav>
//             <ul className='space-y-2'>
//               <li>
//                 <Link
//                   to="/dashboard/add-job"
//                   className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
//                 >
//                   Add Job
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/manage-jobs"
//                   className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
//                 >
//                   Manage Jobs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/dashboard/view-applications"
//                   className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
//                 >
//                   View Applications
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Main Content Area */}
//         <div className='flex-1 p-5'>
//           {/* Content will be rendered here below the navbar */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { assets } from '../assets/assets';

function Dashboard() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Full-width Navbar */}
      <div className='w-full shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="Logo" />
          <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'>Welcome, GreatStack</p>
            <div className='relative group'>
              <img className='w-8 border rounded-full' src={assets.company_icon} alt="Profile" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and Main Content */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='w-64 bg-gray-100 p-5 shadow'>
          <nav>
            <ul className='space-y-2'>
              <li>
                <Link
                  to="/dashboard/add-job"
                  className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
                >
                  Add Job
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manage-jobs"
                  className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
                >
                  Manage Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/view-applications"
                  className='block py-2 px-4 hover:bg-blue-500 hover:text-white rounded cursor-pointer'
                >
                  View Applications
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className='flex-1 p-5'>
          {/* Content will be rendered here below the navbar */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;