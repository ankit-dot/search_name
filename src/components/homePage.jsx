'use client'
import React from "react"
import Search from './search';
import { useState } from "react";
import { useUserContext } from "@/context";
import Image from "next/image";
export default function HomePage() {
    const { searchData } = useUserContext()
    const src = "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1714237430~exp=1714241030~hmac=61fb4c2c7cdd057bef964ae64702543afecd404f478f91621a1d545954832f0b&w=900";
    
    
    
    return (

     <>

     
        <ul
        role='list'
        className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 mt-8'
      >
        {searchData.map((user) => (
          <li key={user._id.toString()} className='relative'>
            <div className='group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100'>
              <Image
                loader = {() => src}
                src={src}
                alt=''
                className='object-cover group-hover:opacity-75'
                width={300}
                height={300}
              />
            </div>
            <p className='mt-2 block truncate font-medium'>{user.user_name}</p>
            <p className='block text-sm font-medium text-gray-500'>
              {user.user_job}
            </p>
            <p className='block text-sm font-medium text-gray-500'>
              {user.user_age}
            </p>
          </li>
        ))}
        </ul>

        </>
    );
  }