// app/page.tsx

import dynamic from 'next/dynamic';
import Ipform from "@/components/IpForm";
import Result from "@/components/Result";

// Dynamically import the OpenLayersMap to prevent SSR issues
const OpenLayersMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div>
        <Ipform />
      </div>
      <div>
        <Result />
      </div>
      <OpenLayersMap />
    </div>
  );
}
