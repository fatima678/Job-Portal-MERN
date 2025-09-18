// import React from 'react'

// function RecruiterLogin() {

//     const [state, setState] = useState('Login');

//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');

//     const [image, setImage] = useState(false);

//     const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
//     return (

//         <div>
//             login Popup
//         </div>
//     )
// }

// export default RecruiterLogin

import React, { useState } from 'react';

function RecruiterLogin() {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  return (
    <div>
     <form action="">
  <h1>Recruiter {state}</h1>
  <p>Welcome back! Please sign in to continue</p>
  <div>
    <img src={assets.person_icon} alt="" />
    <input onChange={(e) => setName(e.target.value)} value={name} />
  </div>
  <div>
    <img src={assets.person_icon} alt="" />
    <input onChange={(e) => setName(e.target.value)} value={name} />
  </div>
  <div>
    <img src={assets.person_icon} alt="" />
    <input onChange={(e) => setName(e.target.value)} value={name} />
  </div>
</form>
    </div>
  );
}

export default RecruiterLogin;
