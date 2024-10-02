// app/page.tsx
"use client";
import dynamic from 'next/dynamic';
import Ipform from "@/components/IpForm";
import Result from "@/components/Result";
import { useState } from 'react';

// Dynamically import the OpenLayersMap to prevent SSR issues
const OpenLayersMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
});



export default function Home() {
const [ipAddress, setIpAddress] = useState("");

  const handleSearch = (value: string) =>{
    setIpAddress(value);
  }
  return (
    <div>
      <div>
        <Ipform onSearch={handleSearch}/>
      </div>
      <div>
        <Result />
      </div>
      <OpenLayersMap />
    </div>
  );
}
