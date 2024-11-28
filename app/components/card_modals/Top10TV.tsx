"use client"

import dynamic from 'next/dynamic'
import { MovieProps } from "@/app/src/types/props";
import { useEffect, useState } from "react";
import "./card.css"
import PreviewCard from './PreviewCard';
import { useCardContext } from './CardContext';

interface top10Props extends MovieProps {
  index:number
  id:number
}

export default function Top10TVShows({
  index,
  id,
  ...movieProps
}: top10Props) {

  const [svgDataArray, setSvgDataArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      const [svgData] = await Promise.all([
        import("../../data/SvgData"),
      ]);

      setSvgDataArray(svgData.default);
      setIsLoading(false);
    };

    fetchData();
    
  }, []);

  // if (isLoading) return null;

  const { setIsHover } = useCardContext();
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  const svgData = svgDataArray[index] || {
    id: '',
    width: 0,
    height: 0,
    viewBox: '',
    className: '',
    stroke: '',
    strokeLinejoin: '',
    strokeWidth: '',
    pathData: '',
  };

  return (
    <div 
      className="relative flex top10cardWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      aria-label='top10'
    >
       {!isLoading && (
        <svg
        id={svgDataArray[index].id}
        width={svgDataArray[index].width}
        height={svgDataArray[index].height}
        viewBox={svgDataArray[index].viewBox}
        className={`${svgDataArray[index].className}`}
      >
        <path
          stroke={svgDataArray[index].stroke}
          strokeLinejoin={svgDataArray[index].strokeLinejoin}
          strokeWidth={svgDataArray[index].strokeWidth}
          d={svgDataArray[index].pathData}
        ></path>
      </svg>
       )}
      
      <PreviewCard
        key={id}
        id={id}
        {...movieProps}
        imageStyle="rounded-e-sm"
        top10Wrapper={true}
      />
    </div>
  )
}