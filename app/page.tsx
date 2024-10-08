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
interface IpDetails {
  ip: string;
  query: string;
  location: {
    city: string;
    region: string;
    country: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
  
}



export default function Home() {
const [ipAddress, setIpAddress] = useState("");
const [ipDetails, setIpDetails] = useState<IpDetails | null>(null);


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
        {ipDetails && (
          <Result ipAddress={ipAddress} ipDetails={ipDetails} /> // Only render when ipDetails is available
        )}
      </div>
      <OpenLayersMap 
      latitude={ipDetails?.location.lat || null} // Get latitude from ipDetails
      longitude={ipDetails?.location.lng || null} // Get longitude from ipDetails
      />
    </div>
  );
}
