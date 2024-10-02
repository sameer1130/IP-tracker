
import { NextResponse } from "next/server";

export async function GET(request : Request){
    const {searchParams} = new URL(request.url);
    const ip = searchParams.get('ip');
    const apiKey = process.env.GEO_API_KEY;

    try{
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
;
        const data = await response.json();
        return NextResponse.json(data);

    }catch(error){
        console.error("Error fetching IP details:", error);
        return NextResponse.json(
            {
                error: "Failed to fetch the data from the API"
            },
            {
                status: 500
            }
        );
    }
}