"use client";
import Image from "next/image";
import Pattern from "@/Images/pattern-bg-desktop.png"
import { useState } from "react";


export default function Ipform({onSearch} : {onSearch: (value: string) => void}) {
    const [inputValue, setInputValue] = useState("");

    const handleOnClick = () =>{
        if(inputValue.trim()){
            onSearch(inputValue);
            setInputValue("");
        }
    }


    return (<div className="items-center">
        <div className="absolute w-full">
            <Image src={Pattern} alt="pattern" layout="responsive"/>
        </div>
        <div className="relative top-12 flex justify-center items-center text-white font-extrabold text-3xl">
            IP Address Tracker 

        </div>
        <div className="relative flex justify-center items-center ">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search for any IP address or domain" className="mt-20 w-96 h-12 rounded-full bg-white text-slate-200 pl-4 focus:outline-none"/>
        {/* <input type="search" id="default-search" className=" p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required /> */}
        <button onClick={handleOnClick}type="submit" className="mt-20 -ml-16 text-white bg-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-4 py-3.5">Search</button>
        </div>
    </div>);
}