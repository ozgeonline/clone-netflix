"use client"
import React, { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  // imageString: string;
  // videoSource: string;
  // overview: string;
  // release: number;
  // duration: number;
  // age: number;
  // cast: string;
  // genres: string;
  // category: string;
  // WatchLists: boolean;
}

const SortBySelect: React.FC<{ data: Movie[] }> = ({ data }) => {
  const [sortedData, setSortedData] = useState<Movie[]>(data);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setSortedData(sorted);
  }, [data, sortOrder]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as any;
    setSortOrder(value);
  };

  console.log("sortedData",sortedData)

  return (
    <select
      onChange={handleSortChange}
      className="px-2 py-1 w-60 h-7 bg-black border border-white text-sm font-semibold tracking-wider outline-none hover:bg-[#333] cursor-pointer"
      value={sortOrder}
    >
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>
  );
};

export default SortBySelect;


