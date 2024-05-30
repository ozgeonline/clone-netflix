"use client";

import { useState, useEffect, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Loading_Animate from '@/app/components/Loading_Animate';

const SortBySelect = dynamic(() => import('@/app/components/modals/select_modal/SortBySelect'));

interface Movie {
  id: number;
  title: string;
  overview: string;
  imageString: string;
  videoSource: string;
  release: number;
  duration: number;
  age: number;
  cast: string;
  genres: string;
  category: string;
  WatchLists: any[];
}

interface CategoryPageClientProps {
  initialData: Movie[];
  initialSortOrder: 'default' | 'asc' | 'desc';
  title: string;
}

const CategoryPageClient = ({ initialData, initialSortOrder, title }: CategoryPageClientProps) => {
  const [data, setData] = useState(initialData);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSortChange = (order: 'default' | 'asc' | 'desc') => {
    startTransition(() => {
      setSortOrder(order);
    });

    const currentParams = new URLSearchParams(searchParams);
    currentParams.set('sortOrder', order);
    router.push(`/${title}?${currentParams.toString()}`);
  };

  useEffect(() => {
    const sorted = [...data].sort((a, b) =>
      sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setData(sorted)
  }, [sortOrder]);
  
  return (
    <div>
      {isPending ? (
        <>
          <div className='absolute z-[9999] w-full h-full top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg_main/80'>
            <Loading_Animate/>
          </div>
          <SortBySelect data={data} sortOrder={sortOrder} onSortChange={handleSortChange} />
        </>
      ) : (
        <SortBySelect data={data} sortOrder={sortOrder} onSortChange={handleSortChange} />
      )}
    </div>
  );
};

export default CategoryPageClient;
