"use client";

import { Search, Plus } from "lucide-react";

interface Props{
    onAdd:()=>void;
}

export default function StaffToolbar({
    onAdd
}:Props){

    return(
        <div className="border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl text-white font-semibold">
                        Team Members
                    </h1>
                </div>
                <button
                    onClick={onAdd}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-indigo-600
                    px-4
                    py-3
                    font-medium
                    transition
                    hover:bg-indigo-500
                    ">
                    <Plus size={18}/>
                    Add Member
                </button>
            </div>

            <div className="relative mt-6">

            <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-500 text-white"
            />

            <input
                placeholder="Search members..."
                className="
                h-12
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                pl-11
                pr-4
                outline-none
                focus:border-indigo-500"/>
        </div>

    </div>
    );

}