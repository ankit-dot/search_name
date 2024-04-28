'use client';
import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useUserContext } from '@/context';
import { useDebouce } from '@/hooks/Hook';


export default function Search() {
  const [text, setText] = useState('');
  const debouceText = useDebouce(text)

  const {setSearchData } = useUserContext();
 
  async function handleSearch() {
    try {
      const response = await axios.get(`api/users/search_names?param=${text}`);
      
      setSearchData(response.data);
    } catch (error) {
      console.log("error:- " + error.message);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [debouceText]);

  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <MagnifyingGlassIcon
          className='h-5 w-5 text-gray-400'
          aria-hidden='true' />
      </div>
      <input
        value={text}
        placeholder=' Search Names...'
        onChange={e => setText(e.target.value)}
        className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6' />
    </div>
  );
}
