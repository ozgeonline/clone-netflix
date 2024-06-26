"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react';

const SearchInputComponent: React.FC = () => {
  
  const [openSearch, setOpenSearch] = useState(false)
  const [query, setQuery] = useState<string>();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    
    if (value) {
      router.push(`/home/query?query=${value}`);
    } else {
      router.push(`/home/query`);
    }
  };

  // const debouncedNavigate = useCallback(
  //   debounce((value: string) => {
  //     if (value) {
  //       router.push(`${pathname}/query?query=${value}`);
  //     } else {
  //       router.back();
        
  //     }
  //   }, 1000), // Adjust the delay as needed
  //   [router]
  // );
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setQuery(value);
  //   debouncedNavigate(value);
  // };
  // useEffect(() => {
  //   return () => {
  //     debouncedNavigate.cancel();
  //   };
  // }, [debouncedNavigate]);

  const handleOpenSearch = ( value:boolean) => {
    setOpenSearch(prevState => !prevState);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setOpenSearch(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (openSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  return (
    <div className='hidden sm:flex relative items-center'>
      <div
        ref={searchRef}
        className={`
          search-container ${openSearch ? "w-40 sm:w-50 md:w-60 bg-black/80 border border-white" : ""}
          flex justify-between relative h-7 sm:h-8
        `}
      >
        <Search
          onClick={() => handleOpenSearch(openSearch)}
          className='inline-flex size-6 sm:size-8 p-1 cursor-pointer'
        />
        <input
          type='search'
          ref={inputRef}
          value={query}
          onChange={handleInputChange}
          placeholder='Titles, genres'
          className={`
            input-search-field ${openSearch ? "w-full opacity-100" : "hidden"} 
            rounded-none outline-none bg-transparent h-6 sm:h-8 placeholder:max-sm:text-xs placeholder:text-sm
          `}
        />
      </div>
    </div>
  );
};

export default SearchInputComponent;
