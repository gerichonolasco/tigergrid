import React, { FC } from "react";
import { Link } from "react-router-dom";

const AcadPDCA: FC = () => {
    return (
        <div className="flex justify-center h-screen mt-32">
            <Link to="/route1">
                <div className="flex flex-col items-center">
                <svg className="h-56 w-56 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
                    <span className="text-sm mt-1 font-bold">Plan</span>
                </div>
            </Link>
            <Link to="/route2">
                <div className="flex flex-col items-center">
                <svg className="h-56 w-56 text-black-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                    <span className="text-sm mt-1 font-bold">Do</span>
                </div>
            </Link>
            {/* Repeating the first two SVGs */}
            <Link to="/route3">
                <div className="flex flex-col items-center">
                <svg className="h-56 w-56 text-black-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 11 12 14 22 4" />  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                    <span className="text-sm mt-1 font-bold">Check</span>
                </div>
            </Link>
            <Link to="/route4">
                <div className="flex flex-col items-center">
                <svg className="h-56 w-56 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
</svg>

                    <span className="text-sm mt-1 font-bold">Act</span>
                </div>
            </Link>
        </div>
    );
}

export default AcadPDCA;
