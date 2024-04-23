import React, { FC } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const IAChooseType: FC = () => {
  return (
    <div className="flex justify-center h-screen mt-32">
      <Link to="/admin/unitoria">
        {" "}
        {/* Add Link component and specify route */}
        <div className="flex flex-col items-center">
          <svg
            className="h-44 w-64 text-black-500"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="2" />
            <line x1="9" y1="12" x2="9.01" y2="12" />
            <line x1="13" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="9.01" y2="16" />
            <line x1="13" y1="16" x2="15" y2="16" />
          </svg>
          <span className="text-sm mt-1 font-bold">
            Evaluation Score Summary
          </span>
        </div>
      </Link>
      <Link to="/admin/adminpdca">
        {" "}
        {/* Add Link component and specify route */}
        <div className="flex flex-col items-center">
          <svg
            className="h-44 w-56 text-black-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
            <line x1="12" y1="8" x2="12" y2="8" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="text-sm mt-1 font-bold">Auditor Mean Score</span>
        </div>
      </Link>
    </div>
  );
};

export default IAChooseType;
