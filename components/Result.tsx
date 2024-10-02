

export default function Result() {
    return (<div className="pl-44">
        <div className="relative block top-20  flex justify-between max-w-6xl rounded-lg  items-center bg-white">
            <div className="p-10 border-r border-slate-200 w-1/4 p-4">
                <div className="text-slate-400 text-sm ">
                    IP ADDRESS
                </div>
                <div className="font-bold text-4xl pt-2 text-slate-700">
                    8.8.8.8
                </div>
            </div>
            <div className="p-10 border-r border-slate-200 w-1/4 p-4">
                <div className="text-slate-400 text-sm ">
                Location
                </div>
                <div className="font-bold text-4xl pt-2 text-slate-700">
                    London
                </div>
            </div>
            <div className="p-10 border-r border-slate-200 w-1/4 p-4">
                <div className="text-slate-400 text-sm ">
                Timezone
                </div>
                <div className="font-bold text-4xl pt-2 text-slate-700">
                    UTC
                </div>
            </div>
            <div className="p-10 border-r border-slate-200 w-1/4 p-4">
                <div className="text-slate-400 text-sm ">
                ISP
                </div>
                <div className="font-bold text-4xl pt-2 text-slate-700">
                    Google 
                </div>
            </div>
        </div>
    </div>)
}