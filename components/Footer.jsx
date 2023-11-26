import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      getCategories().then((newCategories) => {
         setCategories(newCategories);
      });
   }, []);

   return (
      <div className='container mx-auto px-2 md:px-4 lg:px-10 bg-black content-center'>
         <div className='border-b w-full inline-block py-8'>
            <div
               className='block content-center'
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Link href='https://github.com/khanempire'>
                  <a target='_blank'>
                     <span className='cursor-pointer font-bold text-2xl italic hover:not-italic header-style pr-4'>
                        Github
                     </span>
                  </a>
               </Link>
               <Link href='https://www.linkedin.com/in/md-aamir-khan/'>
                  <a target='_blank'>
                     <span className='cursor-pointer font-bold text-2xl italic hover:not-italic header-style'>
                        LinkedIn
                     </span>
                  </a>
               </Link>
            </div>
            <div className='text-white pt-2'>
               <p
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
               >
                  © Copyright, 2023
               </p>
            </div>
         </div>
      </div>
   );
};

export default Header;
