// // // import React from 'react';

// // // function AddJob() {
// // //   return (
// // //     <div className="min-h-screen p-6 bg-gray-50">
// // //       <form className="max-w-lg mx-auto space-y-4">
// // //         {/* Job Title */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Job Title</label>
// // //           <input
// // //             type="text"
// // //             placeholder="Type here"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
// // //           />
// // //         </div>

// // //         {/* Job Description */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Job Description</label>a/
// // //           <textarea
// // //             placeholder="Type here"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 h-24 resize-none"
// // //           ></textarea>
// // //         </div>

// // //         {/* Job Category, Location, and Level */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">Job Category</label>
// // //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// // //               <option>Programming</option>
// // //               <option>Design</option>
// // //               <option>Marketing</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">Job Location</label>
// // //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// // //               <option>Bangalore</option>
// // //               <option>Mumbai</option>
// // //               <option>Delhi</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">Job Level</label>
// // //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// // //               <option>Senior Level</option>
// // //               <option>Mid Level</option>
// // //               <option>Junior Level</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Salary */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">Salary</label>
// // //           <input
// // //             type="number"
// // //             placeholder="0"
// // //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
// // //           />
// // //         </div>

// // //         {/* Submit Button */}
// // //         <div>
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
// // //           >
// // //             ADD
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default AddJob;


// // import React from 'react';
// // import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';

// // function AddJob() {
// //   return (
// //     <div className="min-h-screen p-6 bg-gray-50">
// //       <form className="max-w-lg mx-auto space-y-4">
// //         {/* Job Title */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700">Job Title</label>
// //           <input
// //             type="text"
// //             placeholder="Type here"
// //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
// //           />
// //         </div>

// //         {/* Job Description */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700">Job Description</label>
// //           <ReactQuill
// //             theme="snow"
// //             className="mt-1 border border-gray-300 rounded-md shadow-sm"
// //             placeholder="Normal"
// //           />
// //         </div>

// //         {/* Job Category, Location, and Level */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Job Category</label>
// //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// //               <option>Programming</option>
// //               <option>Design</option>
// //               <option>Marketing</option>
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Job Location</label>
// //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// //               <option>Bangalore</option>
// //               <option>Mumbai</option>
// //               <option>Delhi</option>
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">Job Level</label>
// //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
// //               <option>Beginner Level</option>
// //               <option>Mid Level</option>
// //               <option>Senior Level</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* Job Salary */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700">Job Salary</label>
// //           <input
// //             type="number"
// //             placeholder="2500"
// //             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
// //           />
// //         </div>

// //         {/* Submit Button */}
// //         <div>
// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
// //           >
// //             ADD
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AddJob;



// import React, { useState } from 'react';
// import MDEditor from '@uiw/react-md-editor';

// function AddJob() {
//   const [description, setDescription] = useState(''); // State to manage content

//   return (
//     <div className="min-h-screen p-6 bg-gray-50">
//       <form className="max-w-lg mx-auto space-y-4">
//         {/* Job Title */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Job Title</label>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
//           />
//         </div>

//         {/* Job Description with MDEditor */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Job Description</label>
//           <MDEditor
//             value={description}
//             onChange={setDescription}
//             placeholder="Normal (supports bold, italic, lists, etc.)"
//             className="mt-1 border border-gray-300 rounded-md shadow-sm"
//             preview="edit" // Use "live" for preview, "edit" for editor only
//           />
//         </div>

//         {/* Job Category, Location, and Level */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Job Category</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
//               <option>Programming</option>
//               <option>Design</option>
//               <option>Marketing</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Job Location</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
//               <option>Bangalore</option>
//               <option>Mumbai</option>
//               <option>Delhi</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Job Level</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
//               <option>Beginner Level</option>
//               <option>Mid Level</option>
//               <option>Senior Level</option>
//             </select>
//           </div>
//         </div>

//         {/* Job Salary */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Job Salary</label>
//           <input
//             type="number"
//             placeholder="2500"
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
//           >
//             ADD
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddJob;



import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function AddJob() {
  const [description, setDescription] = useState(''); // State to manage content

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <form className="max-w-lg mx-auto space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Job Description with MDEditor */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <MDEditor
            value={description}
            onChange={setDescription}
            placeholder="Normal (supports bold, italic, lists, etc.)"
            className="mt-1 border border-gray-300 rounded-md shadow-sm"
            preview="edit" // Use "live" for preview, "edit" for editor only
          />
        </div>

        {/* Job Category, Location, and Level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Category</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
              <option>Programming</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Location</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Level</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
              <option>Beginner Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>
        </div>

        {/* Job Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Salary</label>
          <input
            type="number"
            placeholder="2500"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;