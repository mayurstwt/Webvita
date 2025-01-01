"use client"

// import Image from 'next/image';
// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className=" text-white min-h-[10vh] flex items-center">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Image src={"https://res.cloudinary.com/damr9jzpb/image/upload/v1735748515/webvitalogo_ylp9go.png"} width={200} height={200} alt=''/>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="text-black hover:text-orange-500 transition">
//               Home
//             </a>
//             <a href="#" className=" text-black hover:text-orange-500 transition">
//               About
//             </a>
//             <a href="#" className=" text-black hover:text-orange-500 transition">
//               Services
//             </a>
//             <a href="#" className=" text-black hover:text-orange-500 transition">
//               Contact
//             </a>
//           </div>

//           {/* Hamburger Icon */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-black hover:text-orange-500 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="space-y-8 py-2">
//               <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition">
//                 Home
//               </a>
//               <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition">
//                 About
//               </a>
//               <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition">
//                 Services
//               </a>
//               <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition">
//                 Contact
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-white py-3 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
              <Image src={"https://res.cloudinary.com/damr9jzpb/image/upload/v1735748515/webvitalogo_ylp9go.png"} width={200} height={200} alt=''/>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-orange-500 transition">
              Home
            </Link>
            <Link href="/about" className="text-black hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/services" className="text-black hover:text-orange-500 transition">
              Services
            </Link>
            <Link href="/contact" className="text-black hover:text-orange-500 transition">
              Contact
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-2 py-4">
            <Link
              href="/"
              className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-black hover:bg-orange-500 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
