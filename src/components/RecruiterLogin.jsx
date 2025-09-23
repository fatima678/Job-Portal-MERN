



// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { assets } from '../assets/assets';

// // // // // // // // function RecruiterLogin() {
// // // // // // // //     const [state, setState] = useState('Login');
// // // // // // // //     const [name, setName] = useState('');
// // // // // // // //     const [password, setPassword] = useState('');
// // // // // // // //     const [email, setEmail] = useState('');
// // // // // // // //     const [image, setImage] = useState(false);
// // // // // // // //     const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

// // // // // // // //     return (
// // // // // // // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // // // // // // //             <form action="" className='relative bg-white p-10 rounded-xl text-slate-500'>
// // // // // // // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
// // // // // // // //                 <p className='text-sm'>Welcome back! Please sign in to continue</p>
// // // // // // // //                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // // // //                     <img src={assets.email_icon} alt="" />
// // // // // // // //                     <input
// // // // // // // //                         className='outline-none text-sm'
// // // // // // // //                         onChange={(e) => setEmail(e.target.value)}
// // // // // // // //                         value={email}
// // // // // // // //                         type='email'
// // // // // // // //                         placeholder='Email'
// // // // // // // //                         required
// // // // // // // //                     />
// // // // // // // //                 </div>
// // // // // // // //                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // // // //                     <img src={assets.lock_icon} alt="" />
// // // // // // // //                     <input
// // // // // // // //                         className='outline-none text-sm'
// // // // // // // //                         onChange={(e) => setPassword(e.target.value)}
// // // // // // // //                         value={password}
// // // // // // // //                         type='password'
// // // // // // // //                         placeholder='Password'
// // // // // // // //                         required
// // // // // // // //                     />
// // // // // // // //                 </div>
// // // // // // // //                 <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
// // // // // // // //                 <button className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'>
// // // // // // // //                     {state === 'Login' ? 'login' : 'create account'}
// // // // // // // //                 </button>
// // // // // // // //                 {
// // // // // // // //                     state === 'Login' ? (
// // // // // // // //                         <p>Don't have an account? <span onClick={() => setState('Sign Up')}>Sign Up</span></p>
// // // // // // // //                     ) : (
// // // // // // // //                         <p>Already have an account? <span onClick={() => setState('Login')}>Login</span></p>
// // // // // // // //                     )
// // // // // // // //                 }
// // // // // // // //             </form>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default RecruiterLogin;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { assets } from '../assets/assets';

// // // // // // // function RecruiterLogin() {
// // // // // // //     const [state, setState] = useState('Login');
// // // // // // //     const [name, setName] = useState('');
// // // // // // //     const [password, setPassword] = useState('');
// // // // // // //     const [email, setEmail] = useState('');
// // // // // // //     const [company, setCompany] = useState('');
// // // // // // //     const [image, setImage] = useState(false);
// // // // // // //     const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

// // // // // // //     return (
// // // // // // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // // // // // //             <form action="" className='relative bg-white p-10 rounded-xl text-slate-500'>
// // // // // // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
// // // // // // //                 <p className='text-sm'>Welcome back! Please sign in to continue</p>
// // // // // // //                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // // //                     <img src={assets.lock_icon} alt="" />
// // // // // // //                     <input
// // // // // // //                         className='outline-none text-sm'
// // // // // // //                         onChange={(e) => setPassword(e.target.value)}
// // // // // // //                         value={password}
// // // // // // //                         type='password'
// // // // // // //                         placeholder='Password'
// // // // // // //                         required
// // // // // // //                     />
// // // // // // //                 </div>
// // // // // // //                 {state === 'Sign Up' && (
// // // // // // //                     <>
// // // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // // //                             <img src={assets.email_icon} alt="" />
// // // // // // //                             <input
// // // // // // //                                 className='outline-none text-sm'
// // // // // // //                                 onChange={(e) => setEmail(e.target.value)}
// // // // // // //                                 value={email}
// // // // // // //                                 type='email'
// // // // // // //                                 placeholder='Email'
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // // //                             <img src={assets.company_icon} alt="" />
// // // // // // //                             <input
// // // // // // //                                 className='outline-none text-sm'
// // // // // // //                                 onChange={(e) => setCompany(e.target.value)}
// // // // // // //                                 value={company}
// // // // // // //                                 placeholder='Company Name'
// // // // // // //                                 required
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                     </>
// // // // // // //                 )}
// // // // // // //                 <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
// // // // // // //                 <button className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'>
// // // // // // //                     {state === 'Login' ? 'login' : 'Sign Up'}
// // // // // // //                 </button>
// // // // // // //                 {
// // // // // // //                     state === 'Login' ? (
// // // // // // //                         <p>Don't have an account? <span onClick={() => setState('Sign Up')}>Sign Up</span></p>
// // // // // // //                     ) : (
// // // // // // //                         <p>Already have an account? <span onClick={() => setState('Login')}>Login</span></p>
// // // // // // //                     )
// // // // // // //                 }
// // // // // // //             </form>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }

// // // // // // // export default RecruiterLogin;


// // // // // // import React, { useState } from 'react';
// // // // // // import { assets } from '../assets/assets';

// // // // // // function RecruiterLogin() {
// // // // // //     const [state, setState] = useState('Login');
// // // // // //     const [name, setName] = useState('');
// // // // // //     const [password, setPassword] = useState('');
// // // // // //     const [email, setEmail] = useState('');
// // // // // //     const [company, setCompany] = useState('');
// // // // // //     const [image, setImage] = useState(false);
// // // // // //     const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

// // // // // //     return (
// // // // // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // // // // //             <form action="" className='relative bg-white p-10 rounded-xl text-slate-500'>
// // // // // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
// // // // // //                 <p className='text-sm'>Welcome back! Please sign in to continue</p>
// // // // // //                 {state === 'Login' ? (
// // // // // //                     <>
// // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // //                             <img src={assets.email_icon} alt="" />
// // // // // //                             <input
// // // // // //                                 className='outline-none text-sm'
// // // // // //                                 onChange={(e) => setEmail(e.target.value)}
// // // // // //                                 value={email}
// // // // // //                                 type='email'
// // // // // //                                 placeholder='Email'
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // //                             <img src={assets.lock_icon} alt="" />
// // // // // //                             <input
// // // // // //                                 className='outline-none text-sm'
// // // // // //                                 onChange={(e) => setPassword(e.target.value)}
// // // // // //                                 value={password}
// // // // // //                                 type='password'
// // // // // //                                 placeholder='Password'
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                     </>
// // // // // //                 ) : (
// // // // // //                     <>
// // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // //                             <img src={assets.company_icon} alt="" />
// // // // // //                             <input
// // // // // //                                 className='outline-none text-sm'
// // // // // //                                 onChange={(e) => setCompany(e.target.value)}
// // // // // //                                 value={company}
// // // // // //                                 placeholder='Company Name'
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // //                             <img src={assets.email_icon} alt="" />
// // // // // //                             <input
// // // // // //                                 className='outline-none text-sm'
// // // // // //                                 onChange={(e) => setEmail(e.target.value)}
// // // // // //                                 value={email}
// // // // // //                                 type='email'
// // // // // //                                 placeholder='Email'
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // // //                             <img src={assets.lock_icon} alt="" />
// // // // // //                             <input
// // // // // //                                 className='outline-none text-sm'
// // // // // //                                 onChange={(e) => setPassword(e.target.value)}
// // // // // //                                 value={password}
// // // // // //                                 type='password'
// // // // // //                                 placeholder='Password'
// // // // // //                                 required
// // // // // //                             />
// // // // // //                         </div>
// // // // // //                     </>
// // // // // //                 )}
// // // // // //                 <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
// // // // // //                 <button className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'>
// // // // // //                     {state === 'Login' ? 'login' : 'Sign Up'}
// // // // // //                 </button>
// // // // // //                 {
// // // // // //                     state === 'Login' ? (
// // // // // //                         <p className='mt-5 text-center'>Don't have an account? <span onClick={() => setState('Sign Up')} className='cursor-pointer text-blue-600'>Sign Up</span></p>
// // // // // //                     ) : (
// // // // // //                         <p className='mt-5 text-center'>Already have an account? <span onClick={() => setState('Login')} className='cursor-pointer text-blue-600'>Login</span></p>
// // // // // //                     )
// // // // // //                 }
// // // // // //             </form>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default RecruiterLogin;


// // // // // import React, { useState } from 'react';
// // // // // import { assets } from '../assets/assets';

// // // // // function RecruiterLogin() {
// // // // //     const [state, setState] = useState('Login');
// // // // //     const [step, setStep] = useState('Step 1'); // Manages the sign-up steps
// // // // //     const [name, setName] = useState('');
// // // // //     const [password, setPassword] = useState('');
// // // // //     const [email, setEmail] = useState('');
// // // // //     const [company, setCompany] = useState('');
// // // // //     const [image, setImage] = useState(null); // Stores the uploaded image URL
// // // // //     const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

// // // // //     const handleImageUpload = (event) => {
// // // // //         const file = event.target.files[0];
// // // // //         if (file) {
// // // // //             setImage(URL.createObjectURL(file)); // Preview the uploaded image
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // // // //             <form action="" className='relative bg-white p-10 rounded-xl text-slate-500 w-[400px]'>
// // // // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
// // // // //                 <p className='text-sm text-center'>Welcome back! Please sign in to continue</p>
// // // // //                 {state === 'Login' ? (
// // // // //                     <>
// // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // //                             <img src={assets.email_icon} alt="" />
// // // // //                             <input
// // // // //                                 className='outline-none text-sm'
// // // // //                                 onChange={(e) => setEmail(e.target.value)}
// // // // //                                 value={email}
// // // // //                                 type='email'
// // // // //                                 placeholder='Email'
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                         <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // //                             <img src={assets.lock_icon} alt="" />
// // // // //                             <input
// // // // //                                 className='outline-none text-sm'
// // // // //                                 onChange={(e) => setPassword(e.target.value)}
// // // // //                                 value={password}
// // // // //                                 type='password'
// // // // //                                 placeholder='Password'
// // // // //                                 required
// // // // //                             />
// // // // //                         </div>
// // // // //                     </>
// // // // //                 ) : (
// // // // //                     <>
// // // // //                         {step === 'Step 1' ? (
// // // // //                             <>
// // // // //                                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // //                                     <img src={assets.company_icon} alt="" />
// // // // //                                     <input
// // // // //                                         className='outline-none text-sm'
// // // // //                                         onChange={(e) => setCompany(e.target.value)}
// // // // //                                         value={company}
// // // // //                                         placeholder='Company Name'
// // // // //                                         required
// // // // //                                     />
// // // // //                                 </div>
// // // // //                                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // //                                     <img src={assets.email_icon} alt="" />
// // // // //                                     <input
// // // // //                                         className='outline-none text-sm'
// // // // //                                         onChange={(e) => setEmail(e.target.value)}
// // // // //                                         value={email}
// // // // //                                         type='email'
// // // // //                                         placeholder='Email'
// // // // //                                         required
// // // // //                                     />
// // // // //                                 </div>
// // // // //                                 <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // // //                                     <img src={assets.lock_icon} alt="" />
// // // // //                                     <input
// // // // //                                         className='outline-none text-sm'
// // // // //                                         onChange={(e) => setPassword(e.target.value)}
// // // // //                                         value={password}
// // // // //                                         type='password'
// // // // //                                         placeholder='Password'
// // // // //                                         required
// // // // //                                     />
// // // // //                                 </div>
// // // // //                                 <button
// // // // //                                     className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // // // //                                     onClick={() => setStep('Step 2')}
// // // // //                                 >
// // // // //                                     Next
// // // // //                                 </button>
// // // // //                             </>
// // // // //                         ) : (
// // // // //                             <>
// // // // //                                 <p className='text-sm text-center'>Upload Company Logo</p>
// // // // //                                 <div className='mt-5 flex justify-center'>
// // // // //                                     {image ? (
// // // // //                                         <img src={image} alt="Uploaded Logo" className='w-32 h-32 object-cover rounded-full' />
// // // // //                                     ) : (
// // // // //                                         <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center'>
// // // // //                                             <span className='text-gray-500'>No Image</span>
// // // // //                                         </div>
// // // // //                                     )}
// // // // //                                 </div>
// // // // //                                 <div className='mt-5'>
// // // // //                                     <label className='block text-sm text-gray-600'>Upload Logo</label>
// // // // //                                     <input
// // // // //                                         type='file'
// // // // //                                         accept='image/*'
// // // // //                                         onChange={handleImageUpload}
// // // // //                                         className='mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700'
// // // // //                                     />
// // // // //                                 </div>
// // // // //                                 <button
// // // // //                                     className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // // // //                                     onClick={() => setStep('Step 1')}
// // // // //                                 >
// // // // //                                     Back
// // // // //                                 </button>
// // // // //                             </>
// // // // //                         )}
// // // // //                     </>
// // // // //                 )}
// // // // //                 <p className='text-sm text-blue-600 my-4 cursor-pointer text-center'>Forgot Password?</p>
// // // // //                 {state === 'Login' ? (
// // // // //                     <p className='text-center'>Don't have an account? <span onClick={() => setState('Sign Up')} className='cursor-pointer text-blue-600'>Sign Up</span></p>
// // // // //                 ) : (
// // // // //                     <p className='text-center'>Already have an account? <span onClick={() => setState('Login')} className='cursor-pointer text-blue-600'>Login</span></p>
// // // // //                 )}
// // // // //             </form>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default RecruiterLogin;






// // // // import React, { useState } from 'react';
// // // // import { assets } from '../assets/assets';

// // // // function RecruiterLogin() {
// // // //     const [state, setState] = useState('Login'); // Login or Sign Up
// // // //     const [company, setCompany] = useState('');
// // // //     const [password, setPassword] = useState('');
// // // //     const [email, setEmail] = useState('');
// // // //     const [image, setImage] = useState(null);

// // // //     const handleImageUpload = (event) => {
// // // //         const file = event.target.files[0];
// // // //         if (file) {
// // // //             setImage(URL.createObjectURL(file));
// // // //         }
// // // //     };

// // // //     const handleSubmit = (e) => {
// // // //         e.preventDefault(); // form refresh ko rokta hai
// // // //         if (state === "Login") {
// // // //             alert("Login Submitted ✅");
// // // //         } else {
// // // //             alert("Sign Up Submitted ✅");
// // // //         }
// // // //     };

// // // //     // Step 1 (Sign Up Form)
// // // //     const SignUpStep1 = () => (
// // // //         <>
// // // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // //                 <img src={assets.company_icon} alt="" />
// // // //                 <input
// // // //                     className='outline-none text-sm w-full'
// // // //                     onChange={(e) => setCompany(e.target.value)}
// // // //                     value={company}
// // // //                     placeholder='Company Name'
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // //                 <img src={assets.email_icon} alt="" />
// // // //                 <input
// // // //                     className='outline-none text-sm w-full'
// // // //                     onChange={(e) => setEmail(e.target.value)}
// // // //                     value={email}
// // // //                     type='email'
// // // //                     placeholder='Email'
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // //                 <img src={assets.lock_icon} alt="" />
// // // //                 <input
// // // //                     className='outline-none text-sm w-full'
// // // //                     onChange={(e) => setPassword(e.target.value)}
// // // //                     value={password}
// // // //                     type='password'
// // // //                     placeholder='Password'
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <button
// // // //                 type="button" // yahan button refresh nahi karega
// // // //                 className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // // //                 onClick={() => setState('SignUpStep2')}
// // // //             >
// // // //                 Next
// // // //             </button>
// // // //         </>
// // // //     );

// // // //     // Step 2 (Company Logo Upload Page)
// // // //     const SignUpStep2 = () => (
// // // //         <>
// // // //             <p className='text-sm text-center'>Upload Company Logo</p>
// // // //             <div className='mt-5 flex justify-center'>
// // // //                 {image ? (
// // // //                     <img src={image} alt="Uploaded Logo" className='w-32 h-32 object-cover rounded-full' />
// // // //                 ) : (
// // // //                     <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center'>
// // // //                         <span className='text-gray-500'>No Image</span>
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //             <div className='mt-5'>
// // // //                 <label className='block text-sm text-gray-600'>Upload Logo</label>
// // // //                 <input
// // // //                     type='file'
// // // //                     accept='image/*'
// // // //                     onChange={handleImageUpload}
// // // //                     className='mt-1 block w-full text-sm text-gray-500 
// // // //                                file:mr-4 file:py-2 file:px-4 
// // // //                                file:rounded-full file:border-0 
// // // //                                file:text-sm file:bg-blue-600 file:text-white 
// // // //                                hover:file:bg-blue-700'
// // // //                 />
// // // //             </div>
// // // //             <button
// // // //                 type="submit" // yahan final submit hoga
// // // //                 className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // // //             >
// // // //                 Submit
// // // //             </button>
// // // //             <button
// // // //                 type="button"
// // // //                 className='bg-gray-400 text-white w-full mt-3 py-2 rounded-full'
// // // //                 onClick={() => setState('Sign Up')}
// // // //             >
// // // //                 Back
// // // //             </button>
// // // //         </>
// // // //     );

// // // //     // Login Page
// // // //     const LoginPage = () => (
// // // //         <>
// // // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // //                 <img src={assets.email_icon} alt="" />
// // // //                 <input
// // // //                     className='outline-none text-sm w-full'
// // // //                     onChange={(e) => setEmail(e.target.value)}
// // // //                     value={email}
// // // //                     type='email'
// // // //                     placeholder='Email'
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // // //                 <img src={assets.lock_icon} alt="" />
// // // //                 <input
// // // //                     className='outline-none text-sm w-full'
// // // //                     onChange={(e) => setPassword(e.target.value)}
// // // //                     value={password}
// // // //                     type='password'
// // // //                     placeholder='Password'
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <p className='text-sm text-blue-600 my-4 cursor-pointer text-center'>Forgot Password?</p>
// // // //             <button type="submit" className='bg-blue-600 text-white w-full mt-2 py-2 rounded-full'>
// // // //                 Login
// // // //             </button>
// // // //         </>
// // // //     );

// // // //     return (
// // // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // // //             <form 
// // // //                 onSubmit={handleSubmit} 
// // // //                 className='relative bg-white p-10 rounded-xl text-slate-500 w-[400px]'
// // // //             >
// // // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>
// // // //                     Recruiter {state === 'Login' ? 'Login' : 'Sign Up'}
// // // //                 </h1>
// // // //                 <p className='text-sm text-center'>
// // // //                     {state === 'Login'
// // // //                         ? 'Welcome back! Please sign in to continue'
// // // //                         : 'Create your recruiter account to continue'}
// // // //                 </p>

// // // //                 {/* Conditional Rendering */}
// // // //                 {state === 'Login' && <LoginPage />}
// // // //                 {state === 'Sign Up' && <SignUpStep1 />}
// // // //                 {state === 'SignUpStep2' && <SignUpStep2 />}

// // // //                 {/* Bottom Text Links */}
// // // //                 {state === 'Login' ? (
// // // //                     <p className='text-center'>
// // // //                         Don't have an account?{' '}
// // // //                         <span
// // // //                             onClick={() => setState('Sign Up')}
// // // //                             className='cursor-pointer text-blue-600'
// // // //                         >
// // // //                             Sign Up
// // // //                         </span>
// // // //                     </p>
// // // //                 ) : (
// // // //                     state !== 'SignUpStep2' && (
// // // //                         <p className='text-center'>
// // // //                             Already have an account?{' '}
// // // //                             <span
// // // //                                 onClick={() => setState('Login')}
// // // //                                 className='cursor-pointer text-blue-600'
// // // //                             >
// // // //                                 Login
// // // //                             </span>
// // // //                         </p>
// // // //                     )
// // // //                 )}
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // }



// // // // export default RecruiterLogin;



// // // import React, { useState } from 'react';
// // // import { assets } from '../assets/assets';

// // // function RecruiterLogin() {
// // //     const [state, setState] = useState('Login'); // Login | Sign Up | SignUpStep2
// // //     const [company, setCompany] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [email, setEmail] = useState('');
// // //     const [image, setImage] = useState(null);

// // //     const handleImageUpload = (event) => {
// // //         const file = event.target.files[0];
// // //         if (file) {
// // //             setImage(URL.createObjectURL(file));
// // //         }
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault(); // prevent refresh
// // //         if (state === "Login") {
// // //             alert(`Login Successful ✅\nEmail: ${email}`);
// // //         } else if (state === "SignUpStep2") {
// // //             alert(`Sign Up Completed ✅\nCompany: ${company}\nEmail: ${email}`);
// // //         }
// // //     };

// // //     // Step 1 (Sign Up Form)
// // //     const SignUpStep1 = () => (
// // //         <>
// // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // //                 <img src={assets.company_icon} alt="" />
// // //                 <input
// // //                     className='outline-none text-sm w-full'
// // //                     onChange={(e) => setCompany(e.target.value)}
// // //                     value={company}
// // //                     placeholder='Company Name'
// // //                     required
// // //                 />
// // //             </div>
// // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // //                 <img src={assets.email_icon} alt="" />
// // //                 <input
// // //                     className='outline-none text-sm w-full'
// // //                     onChange={(e) => setEmail(e.target.value)}
// // //                     value={email}
// // //                     type='email'
// // //                     placeholder='Email'
// // //                     required
// // //                 />
// // //             </div>
// // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // //                 <img src={assets.lock_icon} alt="" />
// // //                 <input
// // //                     className='outline-none text-sm w-full'
// // //                     onChange={(e) => setPassword(e.target.value)}
// // //                     value={password}
// // //                     type='password'
// // //                     placeholder='Password'
// // //                     required
// // //                 />
// // //             </div>
// // //             <button
// // //                 type="button"
// // //                 className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // //                 onClick={() => setState('SignUpStep2')}
// // //             >
// // //                 Next
// // //             </button>
// // //         </>
// // //     );

// // //     // Step 2 (Company Logo Upload Page)
// // //     const SignUpStep2 = () => (
// // //         <>
// // //             <p className='text-sm text-center'>Upload Company Logo</p>
// // //             <div className='mt-5 flex justify-center'>
// // //                 {image ? (
// // //                     <img src={image} alt="Uploaded Logo" className='w-32 h-32 object-cover rounded-full' />
// // //                 ) : (
// // //                     <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center'>
// // //                         <span className='text-gray-500'>No Image</span>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //             <div className='mt-5'>
// // //                 <label className='block text-sm text-gray-600'>Upload Logo</label>
// // //                 <input
// // //                     type='file'
// // //                     accept='image/*'
// // //                     onChange={handleImageUpload}
// // //                     className='mt-1 block w-full text-sm text-gray-500 
// // //                                file:mr-4 file:py-2 file:px-4 
// // //                                file:rounded-full file:border-0 
// // //                                file:text-sm file:bg-blue-600 file:text-white 
// // //                                hover:file:bg-blue-700'
// // //                 />
// // //             </div>
// // //             <button
// // //                 type="submit"
// // //                 className='bg-blue-600 text-white w-full mt-6 py-2 rounded-full'
// // //             >
// // //                 Submit
// // //             </button>
// // //             <button
// // //                 type="button"
// // //                 className='bg-gray-400 text-white w-full mt-3 py-2 rounded-full'
// // //                 onClick={() => setState('Sign Up')}
// // //             >
// // //                 Back
// // //             </button>
// // //         </>
// // //     );

// // //     // Login Page
// // //     const LoginPage = () => (
// // //         <>
// // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // //                 <img src={assets.email_icon} alt="" />
// // //                 <input
// // //                     className='outline-none text-sm w-full'
// // //                     onChange={(e) => setEmail(e.target.value)}
// // //                     value={email}
// // //                     type='email'
// // //                     placeholder='Email'
// // //                     required
// // //                 />
// // //             </div>
// // //             <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
// // //                 <img src={assets.lock_icon} alt="" />
// // //                 <input
// // //                     className='outline-none text-sm w-full'
// // //                     onChange={(e) => setPassword(e.target.value)}
// // //                     value={password}
// // //                     type='password'
// // //                     placeholder='Password'
// // //                     required
// // //                 />
// // //             </div>
// // //             <p className='text-sm text-blue-600 my-4 cursor-pointer text-center'>Forgot Password?</p>
// // //             <button type="submit" className='bg-blue-600 text-white w-full mt-2 py-2 rounded-full'>
// // //                 Login
// // //             </button>
// // //         </>
// // //     );

// // //     return (
// // //         <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
// // //             <form 
// // //                 onSubmit={handleSubmit} 
// // //                 className='relative bg-white p-10 rounded-xl text-slate-500 w-[400px]'
// // //             >
// // //                 <h1 className='text-center text-2xl text-neutral-700 font-medium'>
// // //                     Recruiter {state === 'Login' ? 'Login' : 'Sign Up'}
// // //                 </h1>
// // //                 <p className='text-sm text-center'>
// // //                     {state === 'Login'
// // //                         ? 'Welcome back! Please sign in to continue'
// // //                         : 'Create your recruiter account to continue'}
// // //                 </p>

// // //                 {/* Conditional Rendering */}
// // //                 {state === 'Login' && <LoginPage />}
// // //                 {state === 'Sign Up' && <SignUpStep1 />}
// // //                 {state === 'SignUpStep2' && <SignUpStep2 />}

// // //                 {/* Bottom Text Links */}
// // //                 {state === 'Login' ? (
// // //                     <p className='text-center mt-4'>
// // //                         Don't have an account?{' '}
// // //                         <span
// // //                             onClick={() => setState('Sign Up')}
// // //                             className='cursor-pointer text-blue-600'
// // //                         >
// // //                             Sign Up
// // //                         </span>
// // //                     </p>
// // //                 ) : (
// // //                     state !== 'SignUpStep2' && (
// // //                         <p className='text-center mt-4'>
// // //                             Already have an account?{' '}
// // //                             <span
// // //                                 onClick={() => setState('Login')}
// // //                                 className='cursor-pointer text-blue-600'
// // //                             >
// // //                                 Login
// // //                             </span>
// // //                         </p>
// // //                     )
// // //                 )}
// // //             </form>
// // //         </div>
// // //     );
// // // }

// // // export default RecruiterLogin;





// // import React, { useState } from "react";
// // import { assets } from "../assets/assets";

// // function RecruiterAuthModal({ onClose }) {
// //   const [isLogin, setIsLogin] = useState(true); // true = Login, false = Signup
// //   const [company, setCompany] = useState("");
// //   const [logo, setLogo] = useState(null);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   // Upload logo preview
// //   const handleLogoUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) setLogo(URL.createObjectURL(file));
// //   };

// //   // Handle submit
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (isLogin) {
// //       alert(`Login Successful ✅\nEmail: ${email}`);
// //     } else {
// //       alert(
// //         `Signup Successful ✅\nCompany: ${company}\nEmail: ${email}\nPassword: ${password}`
// //       );
// //     }
// //     onClose(); // modal close
// //   };

// //   return (
// //     <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="relative bg-white p-8 rounded-xl shadow-lg w-[400px]"
// //       >
// //         {/* Close button */}
// //         <button
// //           type="button"
// //           onClick={onClose}
// //           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
// //         >
// //           ✕
// //         </button>

// //         {/* Title */}
// //         <h1 className="text-center text-2xl font-bold text-gray-700">
// //           Recruiter {isLogin ? "Login" : "Sign Up"}
// //         </h1>
// //         <p className="text-sm text-center text-gray-500 mb-6">
// //           {isLogin
// //             ? "Welcome back! Please sign in to continue"
// //             : "Create your recruiter account to continue"}
// //         </p>

// //         {/* Login Form */}
// //         {isLogin ? (
// //           <>
// //             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
// //               <img src={assets.email_icon} alt="email" />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 className="outline-none text-sm w-full"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
// //               <img src={assets.lock_icon} alt="lock" />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 className="outline-none text-sm w-full"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <p className="text-sm text-blue-600 my-4 cursor-pointer text-center">
// //               Forgot Password?
// //             </p>
// //           </>
// //         ) : (
// //           /* Signup Form */
// //           <>
// //             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
// //               <img src={assets.company_icon} alt="company" />
// //               <input
// //                 type="text"
// //                 placeholder="Company Name"
// //                 className="outline-none text-sm w-full"
// //                 value={company}
// //                 onChange={(e) => setCompany(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             {/* Upload Logo */}
// //             <div className="mt-5">
// //               <label className="block text-sm text-gray-600 mb-2">
// //                 Upload Company Logo
// //               </label>
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleLogoUpload}
// //                 className="block w-full text-sm text-gray-500
// //                            file:mr-4 file:py-2 file:px-4
// //                            file:rounded-full file:border-0
// //                            file:text-sm file:bg-blue-600 file:text-white
// //                            hover:file:bg-blue-700"
// //               />
// //               {logo && (
// //                 <div className="flex justify-center mt-4">
// //                   <img
// //                     src={logo}
// //                     alt="Company Logo"
// //                     className="w-20 h-20 object-cover rounded-full"
// //                   />
// //                 </div>
// //               )}
// //             </div>

// //             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
// //               <img src={assets.email_icon} alt="email" />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 className="outline-none text-sm w-full"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
// //               <img src={assets.lock_icon} alt="lock" />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 className="outline-none text-sm w-full"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>
// //           </>
// //         )}

// //         {/* Submit button */}
// //         <button
// //           type="submit"
// //           className="bg-blue-600 text-white w-full mt-6 py-2 rounded-full"
// //         >
// //           {isLogin ? "Login" : "Sign Up"}
// //         </button>

// //         {/* Toggle link */}
// //         <p className="text-center mt-4">
// //           {isLogin ? (
// //             <>
// //               Don’t have an account?{" "}
// //               <span
// //                 onClick={() => setIsLogin(false)}
// //                 className="cursor-pointer text-blue-600"
// //               >
// //                 Sign Up
// //               </span>
// //             </>
// //           ) : (
// //             <>
// //               Already have an account?{" "}
// //               <span
// //                 onClick={() => setIsLogin(true)}
// //                 className="cursor-pointer text-blue-600"
// //               >
// //                 Login
// //               </span>
// //             </>
// //           )}
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// // export default RecruiterAuthModal;


// import React, { useState, useContext } from "react";
// import { AppContext } from "../context/AppContext";

// function RecruiterLogin() {
//   const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext);
//   const [isLogin, setIsLogin] = useState(true);

//   const [company, setCompany] = useState("");
//   const [logo, setLogo] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   if (!showRecruiterLogin) return null; // agar false hai to kuch mat dikhao

//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setLogo(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       alert(`Login ✅ Email: ${email}`);
//     } else {
//       alert(`Signup ✅ Company: ${company}, Email: ${email}`);
//     }
//     setShowRecruiterLogin(false); // submit ke baad band
//   };

//   return (
//     <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[380px] relative">
//         {/* Cross Button */}
//         <button
//           onClick={() => setShowRecruiterLogin(false)}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
//         >
//           ✕
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4">
//           {isLogin ? "Recruiter Login" : "Recruiter Sign Up"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isLogin ? (
//             <>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />
//               <p className="text-sm text-blue-600 text-center cursor-pointer">
//                 Forgot Password?
//               </p>
//             </>
//           ) : (
//             <>
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 value={company}
//                 onChange={(e) => setCompany(e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />
//               {/* Logo Upload */}
//               <div>
//                 <label className="block text-sm mb-1">Upload Company Logo</label>
//                 <input type="file" accept="image/*" onChange={handleLogoUpload} />
//                 {logo && (
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     className="w-16 h-16 mt-2 rounded-full object-cover mx-auto"
//                   />
//                 )}
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         {/* Toggle link */}
//         <p className="text-center text-sm mt-3">
//           {isLogin ? (
//             <>
//               Don’t have an account?{" "}
//               <span
//                 onClick={() => setIsLogin(false)}
//                 className="text-blue-600 cursor-pointer"
//               >
//                 Sign Up
//               </span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span
//                 onClick={() => setIsLogin(true)}
//                 className="text-blue-600 cursor-pointer"
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default RecruiterLogin;




import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function RecruiterLogin() {
  const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(true);

  const [company, setCompany] = useState("");
  const [logo, setLogo] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  if (!showRecruiterLogin) return null;

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // ==== LOGIN ====
      const savedUser = JSON.parse(localStorage.getItem("recruiter"));

      if (!savedUser) {
        alert("⚠️ Please Signup !");
        return;
      }

      if (savedUser.email === email && savedUser.password === password) {
        alert("✅ Login Successful!");
        setShowRecruiterLogin(false);
        navigate("/dashboard");
      } else {
        alert("❌ Invalid email or password!");
      }
    } else {
      // ==== SIGNUP ====
      const newUser = { company, email, password };
      localStorage.setItem("recruiter", JSON.stringify(newUser));

      alert("✅ Signup successful! You can login.");
      setIsLogin(true); // ab login form dikhao
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[380px] relative">
        {/* Close Button */}
        <button
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-4">
          {isLogin ? "Recruiter Login" : "Recruiter Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isLogin ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <p className="text-sm text-blue-600 text-center cursor-pointer">
                Forgot Password?
              </p>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />

              <div>
                <label className="block text-sm mb-1">Upload Company Logo</label>
                <input type="file" accept="image/*" onChange={handleLogoUpload} />
                {logo && (
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-16 h-16 mt-2 rounded-full object-cover mx-auto"
                  />
                )}
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-3">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-blue-600 cursor-pointer"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-blue-600 cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default RecruiterLogin;
