// import React from 'react'
// import { assets } from '../assets/assets'
// import { useClerk , UserButton, useUser } from '@clerk/clerk-react'
// import { Link } from 'react-router-dom'

// function Navbar() {

//     const {openSignIn} = useClerk();
//     const {user} = useUser();
//   return (
//     <div className='shadow py-4'>
//         <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
//             <img src={assets.logo} alt="" />
//             {
//                 user ?
//                 <div className='flex gap-4 items-center '>
//                     <Link to={'/applications'}>Applied Jobs</Link>
//                     <p> | </p>
//                     <p>
//   Hi, {user.firstName && user.lastName
//         ? `${user.firstName} ${user.lastName}`
//         : user.firstName
//           ? user.firstName
//           : user.primaryEmailAddress?.emailAddress.split("@")[0]}
// </p>

//                 </div>
//                  : 
//                  <div className='flex gap-4 max-sm:text-xs'>
//                 <button className='text-gray-600'>Recruiter Login</button>
//                 <button  onClick={e=> openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
//             </div>
//             }
            
//         </div>

//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={assets.logo} alt="" />
        {
          user ? (
            <div className='flex gap-4 items-center'>
              <Link to="/applications" className="text-blue-600 font-medium">
                Applied Jobs
              </Link>
              <p>|</p>
              <p>
                Hi, {user.firstName && user.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user.firstName
                    ? user.firstName
                    : user.primaryEmailAddress?.emailAddress.split("@")[0]}
              </p>
              {/* 👇 Ye lagana zaroori hai */}
              <UserButton afterSignOutUrl="/" userProfileUrl="/profile" />
            </div>
          ) : (
            <div className='flex gap-4 max-sm:text-xs'>
              <button className='text-gray-600'>Recruiter Login</button>
              <button 
                onClick={() => openSignIn()} 
                className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'
              >
                Login
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
