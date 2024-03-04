import React from "react";
import { Link } from 'react-router-dom';

const SideNavbarUser: React.FC = () => {
 return (
    <>
      <nav style={{ backgroundColor: "#121212" }}
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                 className="w-6 h-6"
                 aria-hidden="true"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
                >
                 <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                 ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                 src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/426963797_1083902849549118_5791859232688171486_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=SLqvOkzzRY4AX-eGOLW&_nc_ht=scontent.fmnl25-1.fna&oh=03_AdQg1yKPWUhRV8ynkQ8WmwT1SIV8OCwl_23mWq9ZTM8E3g&oe=65F263F0"
                 className="h-8 me-3"
                 alt="FlowBite Logo"
                />
                <Link to="dashboard" className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-yellow-500">
                 TigerGrid
                </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
        style={{ position: 'relative' }} // Make the aside element a relative positioning context
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {/* Removed existing routes */}
          </ul>
          {/* Container for "Hello User" and Logout button */}
          <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <div className="px-3 pb-4">
              <p className="text-sm text-gray-700 font-bold">Hello, User</p>
              <button
                className="mt-4 mb-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                style={{ width: '50%', marginRight: '10px' }} // Adjusted width and added margin-right
                >
                Logout
                </button>
            </div>
          </div>
        </div>
      </aside>
    </>
 );
};

export default SideNavbarUser;
