import React from "react";

function Loading() {
    return (
        <div className="flex h-screen items-center justify-center bg-slate-600">
            <div className="flex flex-col w-52 gap-4">
                <div className="h-32 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="h-4 w-28 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="h-4 w-full bg-gray-300 animate-pulse rounded-md"></div>
                <div className="h-4 w-full bg-gray-300 animate-pulse rounded-md"></div>
            </div>
        </div>
    );
}

export default Loading;
