// app/page.tsx
"use client";
import dynamic from 'next/dynamic';
import Ipform from "@/components/IpForm";
import Result from "@/components/Result";
import { useEffect, useState } from 'react';

// Dynamically import the OpenLayersMap to prevent SSR issues
const OpenLayersMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
});



export default function Home() {
const [ipAddress, setIpAddress] = useState("");
const [ipDetails, setIpDetails] = useState<any>(null);


  const handleSearch = (value: string) =>{
    setIpAddress(value);
  }

  useEffect(() =>{
    if(ipAddress){
      fetch(`/api/geo?ip=${ipAddress}`)
      .then((response) => {
        if(!response.ok){
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) =>{
        setIpDetails(data)
      }).catch((error) =>{
        console.error("Error fetching the data", error);
        setIpDetails(null);
      })
    }
  }, [ipAddress])
  return (
    <div>
      <div>
        <Ipform onSearch={handleSearch}/>
      </div>
      <div>
        <Result ipAddress={ipAddress} ipDetails={ipDetails}/>
      </div>
      <OpenLayersMap />
    </div>
  );
}
